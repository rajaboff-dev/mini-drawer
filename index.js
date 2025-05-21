const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const color = document.getElementById('color');

canvas.width = 500;
canvas.height = 500;

console.log('ctx', ctx);

ctx.strokeRect(0, 0, canvas.width, canvas.height);

let isMouseMoving = false;

canvas.addEventListener('click', (e) => {
  isMouseMoving = !isMouseMoving;
  if (isMouseMoving) {
    const rect = canvas.getBoundingClientRect();
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
  }else {
    ctx.closePath();
  }

})

canvas.addEventListener('mousemove', (e) => {
  if(!isMouseMoving) return;
  const rect = canvas.getBoundingClientRect();
  ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
  ctx.strokeStyle = color.value
  ctx.stroke();
})