const text = document.querySelector('h3');
const total = document.querySelector('.total');
const current = document.querySelector('.current');
const COUNT_BTN = document.querySelector('#count');
const RESET_BTN = document.querySelector('#reset');
const MODE_BTN = document.querySelector('#mode')


let totalValue = 0;
let currentValue = 0; 
let tas = text.textContent = 'Subhanalloh';
let countOrder = 1;
let textValue = text.textContent;
let Mode = 99;
let currentMode = 34;
let limittMode = 33;


function getCurrentValue(){
if(totalValue < Mode){
  totalValue += 1;
  currentValue += 1;
}else{
  return null
}

  if(countOrder === 1){
    currentValue = 1;
    countOrder +=1;
    text.textContent = 'Subhanalloh'
  } else if (currentValue === currentMode && countOrder === 2){
    currentValue = 1;
    countOrder +=1;
  
    text.textContent = 'Alhamdulillah'
  }else if(currentValue === currentMode && countOrder ===3 ){
    
    text.textContent = 'Allohu Akbar' 
    currentValue = 1;
    checkTotal()
  }
   vibration()


  return (
    current.textContent = currentValue,
    total.textContent = totalValue,
    checkTotal()
  )
}



function checkTotal(){
  if(totalValue === Mode ){
    text.textContent = ' Please RESET!'
    vibrate(200)
  }
}

function reset (){
  // console.log(totalValue);
   totalValue = 0;  
   total.textContent = 0
   currentValue = 0; 
   current.textContent = 0
   tas = text.textContent = 'Subhanalloh';
   countOrder = 1;
   textValue = text.textContent
   Mode = 99;
   currentMode = 34;
   vibrate(100)
   text.textContent = 'You have reset!'
   limittMode = 33;

}

function changeMode(){
   Mode = 303;
   currentMode = 102;
   totalValue = 0;  
   total.textContent = 0
   currentValue = 0; 
   current.textContent = 0
   tas = text.textContent = 'Subhanalloh';
   countOrder = 1;
   textValue = text.textContent;
   text.textContent = 'Mode is Updated!'
   limittMode = 101;
  
   vibrate(100)
}

function vibrate(vib) {
  
  navigator.vibrate([vib]);
}

function vibration (){
  if(currentValue === limittMode){
    vibrate(200)
  }else{
    vibrate(10)
  }
}


COUNT_BTN.addEventListener("click", getCurrentValue);
RESET_BTN.addEventListener("click", reset);
MODE_BTN.addEventListener('click', changeMode)
