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
  const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  result();
  
  })
  function result (){
    const totalBillStr = bill.innerHTML;
    const totalBill = +totalBillStr ;
    let selectElement = document.getElementById("tippercentage");
    let as = document.forms[0].tippercentage.value;
    let tip = selectElement.options[selectElement.selectedIndex].value;
     alert("hello");

  }