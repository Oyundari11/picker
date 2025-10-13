const wheel = document.getElementById('wheel');
const btn = document.getElementById('spinBtn');

let rotation = 0;

btn.addEventListener('click', () => {
  // Add random spins
  const randomSpin = Math.floor(2000 + Math.random() * 2000);
  rotation += randomSpin;
  wheel.style.transform = `rotate(${rotation}deg)`;
});