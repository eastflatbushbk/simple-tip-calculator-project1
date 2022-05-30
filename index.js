const increment = document.getElementById('plus');
const decrement = document.getElementById('minus')
let bill = document.getElementById('totalbill');

increment.addEventListener('click', function () {

    let someNum = parseInt(bill.innerHTML);
    bill.innerHTML = someNum + 1;
    
    decrement.disabled = false;
    //bill.textContent = number++;
  });
  decrement.addEventListener('click', function () {
    counterEl.textContent = number--;
  });