const birthday = new Date('2026-04-29T00:00:00').getTime();
const countdown = document.getElementById('countdown');
const birthdayMessage = document.getElementById('birthday-message');

const sections = [
  'wish-section',
  'cake-section',
  'tree-section',
  'message-section',
  'thankyou-section'
];

function updateCountdown() {
  const now = new Date().getTime();
  const distance = birthday - now;

  if (distance <= 0) {
    clearInterval(timer);
    countdown.style.display = 'none';
    birthdayMessage.classList.remove('hidden');

    confetti({
      particleCount: 250,
      spread: 120,
      origin: { y: 0.6 }
    });

    sections.forEach(id => {
      document.getElementById(id).classList.remove('hidden');
    });
    return;
  }

  document.getElementById('days').textContent = Math.floor(distance / (1000 * 60 * 60 * 24));
  document.getElementById('hours').textContent = Math.floor((distance / (1000 * 60 * 60)) % 24);
  document.getElementById('minutes').textContent = Math.floor((distance / (1000 * 60)) % 60);
  document.getElementById('seconds').textContent = Math.floor((distance / 1000) % 60);
}

const timer = setInterval(updateCountdown, 1000);
updateCountdown();

document.getElementById('cake').addEventListener('click', function () {
  this.textContent = '🍰';
  document.getElementById('cake-text').textContent =
    'Cake cut successfully! Let the celebration begin! 🎊';

  confetti({
    particleCount: 300,
    spread: 180
  });
});
