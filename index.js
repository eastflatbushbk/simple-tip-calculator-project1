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
  document.querySelector('#list').innerHTML = ''
  result();
  
  })
  function result (){
    const totalBillStr = bill.innerHTML;
    const totalBill = +totalBillStr ;
    let selectElement = document.getElementById("tippercentage");
    let as = document.forms[0].tippercentage.value;
    let tip = selectElement.options[selectElement.selectedIndex].value;
     
     console.log(totalBill);
    console.log(as , tip)
    //output = selectElement.value;
  // let tip = selectElement.options[selectElement.selectedIndex].value;
  const tipTotal = totalBill * (tip/100)
  console.log(totalBill)
  const finalBill = totalBill + tipTotal;
  console.log(finalBill)
  //$("p").remove();
  //displayResult()
  let displayResult = document.createElement('p');
 // p.textContent = `The tip amount is $ ${tipTotal} and the total bill with tip is $ ${finalBill} `;
 // document.querySelector('#list').appendChild(p);
 displayResult.textContent = `The tip amount is $ ${tipTotal} and the total bill with tip is $ ${finalBill} `
 document.querySelector('#list').appendChild(displayResult)


 // alert("hello");
  console.log(document.querySelector('p'))
  }

 //function displayResult() {
 //     if (p != undefined ){
 ///         alert("hello")
///$(p).remove()
//return
 //     }
 //     else {
  //       return
//      }
      
//    }

