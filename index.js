const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const color = document.getElementById('color');
const size = document.getElementById('size');

canvas.width = 500;
canvas.height = 500;

console.log('ctx', ctx);

ctx.strokeRect(0, 0, canvas.width, canvas.height);

let isMouseMoving = false;

canvas.addEventListener('dblclick', (e) => {
  isMouseMoving = true;
  const rect = canvas.getBoundingClientRect();
  ctx.beginPath();
  ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
})



canvas.addEventListener('mousemove', (e) => {
  if(!isMouseMoving) return;
  const rect = canvas.getBoundingClientRect();
  ctx.lineWidth = size.value
  ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
  ctx.strokeStyle = color.value
  ctx.stroke();
})

canvas.addEventListener('click', (e) => {
  ctx.closePath();
  isMouseMoving = false;
})