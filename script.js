const cube = document.querySelector('.cube');
let startX, startY, currentX = 0, currentY = 0;

let isDragging = false;

document.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX - currentX;
  startY = e.clientY - currentY;
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  currentX = e.clientX - startX;
  currentY = e.clientY - startY;

  cube.style.transform = `rotateX(${currentY / 5}deg) rotateY(${currentX / 5}deg)`;
});

document.addEventListener('touchstart', (e) => {
  isDragging = true;
  startX = e.touches[0].clientX - currentX;
  startY = e.touches[0].clientY - currentY;
});

document.addEventListener('touchend', () => {
  isDragging = false;
});

document.addEventListener('touchmove', (e) => {
  if (!isDragging) return;

  currentX = e.touches[0].clientX - startX;
  currentY = e.touches[0].clientY - startY;

  cube.style.transform = `rotateX(${currentY / 2}deg) rotateY(${currentX / 2}deg)`;
});