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
    if(bill.innerHTML <= 0) {
      decrement.disabled = true
    }
    else{
      let someNum = parseInt(bill.innerHTML);
      bill.innerHTML = someNum - 1;
   // bill.textContent = number--;
  }
  });