const increment = document.getElementById('plus');
const decrement = document.getElementById('minus')
let bill = document.getElementById('totalbill');
const form = document.querySelector('form')
const baseUrl = 'http://localhost:3000'
let calculations = []

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
  document.querySelector('#prior-list').innerHTML = ''
  loadCalculations();
  result();
 
 
  })
 
 
  function result (){
    const totalBillStr = bill.innerHTML;
    const totalBill = +totalBillStr ;

    let selectElement = document.getElementById("tippercentage");
    const tip = selectElement.options[selectElement.selectedIndex].value;
     
    const tipTotal = totalBill * (tip/100)
    const finalBill = totalBill + tipTotal;
 
  let displayResult = document.createElement('p');
 
 displayResult.textContent = `The tip amount is $ ${tipTotal} and the total bill with tip is $ ${finalBill} `
 document.querySelector('#list').appendChild(displayResult)

 const saveResult = `bill amount:$ ${totalBill}  , tip percentage: ${tip} %,tip amount:$ ${tipTotal} ,total amount:$ ${finalBill} `
 saveCalculation (saveResult) ;

}

const loadCalculations = async () => {
  const resp = await fetch(baseUrl + '/calculations')
  const data = await resp.json();
  calculations = data
  console.log(calculations)
 let recent5 = calculations.slice(1).slice(-5)
 console.log(recent5)
 let sortedRecent5 = recent5.sort ( function(a, b) {return b.id-a.id} )
 console.log(sortedRecent5)
 
 
 appendData(sortedRecent5)
 }
 
 function appendData(data) {
  const mainContainer = document.getElementById("prior-list");

  
   data.forEach((data) => { 
      const li = document.createElement("li");
      
      li.innerHTML =  data.result ;
      li.onmouseover = function() {
        this.style.backgroundColor = 'lightblue';
      }
      li.onmouseleave = function() {
        this.style.backgroundColor = '';
      }
      mainContainer.appendChild(li);
   
  })
}

const saveCalculation = async (data) =>{


  const saveDate = Date()
  
  console.log(saveDate)

  fetch ( (baseUrl + '/calculations'),{
    method: 'POST',
   headers: {
      "Content-Type": "application/json",
     },
        body: JSON.stringify({
          date : saveDate,
          result: data
        })
  })
  .then(resp => resp.json())
  .then(json => console.log(json))
  .catch( error => console.log(error))

}

const resultColor = document.getElementById('list');
resultColor.addEventListener("mouseover", colorList() ) 

function colorList(){

resultColor.onmouseover = function() {
  this.style.backgroundColor = 'yellow';
}
resultColor.onmouseleave = function() {
  this.style.backgroundColor = '';
}
}
