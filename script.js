const birthday = new Date('2026-12-25T00:00:00');
const countdown = document.getElementById('countdown');
const birthdayMessage = document.getElementById('birthday-message');

const sections = [
  'wish-section',
  'cake-section',
  'memory-tree',
  'special-message',
  'thank-you'
];

const photos = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
  'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9',
  'https://images.unsplash.com/photo-1506863530036-1efeddceb993',
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1'
];

function updateCountdown() {
  const now = new Date();
  const diff = birthday - now;

  if (diff <= 0) {
    clearInterval(timer);
    countdown.style.display = 'none';
    birthdayMessage.classList.remove('hidden');
    confetti({ particleCount: 250, spread: 120, origin: { y: 0.6 } });

    sections.forEach(id => {
      document.getElementById(id).classList.remove('hidden');
    });
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdown.innerHTML = `
    <div class="time-box"><span>${days}</span>Days</div>
    <div class="time-box"><span>${hours}</span>Hours</div>
    <div class="time-box"><span>${minutes}</span>Minutes</div>
    <div class="time-box"><span>${seconds}</span>Seconds</div>
  `;
}

const timer = setInterval(updateCountdown, 1000);
updateCountdown();

const cake = document.getElementById('cake');
const cakeText = document.getElementById('cake-text');

cake.addEventListener('click', () => {
  cake.textContent = '🍰';
  cakeText.textContent = 'Cake cut successfully! Let the celebration begin! 🎊';
  confetti({ particleCount: 300, spread: 180 });
});

const photoGrid = document.getElementById('photo-grid');
photos.forEach((photo, index) => {
  const img = document.createElement('img');
  img.src = `${photo}?w=500&auto=format&fit=crop`;
  img.alt = `Memory ${index + 1}`;
  photoGrid.appendChild(img);
});
