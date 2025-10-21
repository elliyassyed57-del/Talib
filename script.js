const openBtn = document.getElementById('open');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('close');
const teaser = document.getElementById('teaser');

openBtn.addEventListener('click', () => {
  overlay.style.display = 'flex';
  overlay.querySelector('.box').focus && overlay.querySelector('.box').focus();
});

closeBtn.addEventListener('click', () => overlay.style.display = 'none');

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') overlay.style.display = 'none';
});

teaser.addEventListener('click', () => openBtn.click());
