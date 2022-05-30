const increment = document.getElementById('plus');
const decrement = document.getElementById('minus')
let counterEl = document.getElementById('counter');
increment.addEventListener('click', function () {
    counterEl.textContent = number++;
  });
  decrement.addEventListener('click', function () {
    counterEl.textContent = number--;
  });