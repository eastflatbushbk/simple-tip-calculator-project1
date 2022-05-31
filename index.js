const increment = document.getElementById('plus');
const decrement = document.getElementById('minus')
let bill = document.getElementById('totalbill');
const form = document.querySelector('form')

increment.addEventListener('click', function () {

    let someNum = parseInt(bill.innerHTML);
    bill.innerHTML = someNum + 1;
    
    decrement.disabled = false;
    
  });
  decrement.addEventListener('click', function () {
    if(bill.innerHTML <= 0) {
      decrement.disabled = true
    }
    else{
      let someNum = parseInt(bill.innerHTML);
      bill.innerHTML = someNum - 1;
   
  }
  });
 

form.addEventListener('submit', (e) => {
  e.preventDefault();
  document.querySelector('#list').innerHTML = ''
  result();
  
  })
  function result (){
    const totalBillStr = bill.innerHTML;
    const totalBill = +totalBillStr ;
    let selectElement = document.getElementById("tippercentage");
   // let as = document.forms[0].tippercentage.value;
    let tip = selectElement.options[selectElement.selectedIndex].value;
     
     
   // console.log(as , tip)
    
  const tipTotal = totalBill * (tip/100)
  
  const finalBill = totalBill + tipTotal;
 
  let displayResult = document.createElement('p');
 
 displayResult.textContent = `The tip amount is $ ${tipTotal} and the total bill with tip is $ ${finalBill} `
 document.querySelector('#list').appendChild(displayResult)


 
  
  }
