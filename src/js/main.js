const button = document.querySelector('button');
const popupWrapper = document.querySelector('.popupWrapper')
const popup = document.querySelector('.popup');
const popupBoldText = document.querySelector('.popupBoldText');
const buttonX = document.querySelector('.buttonX');
const buttonReset = document.querySelector('.buttonReset');

let counterInStorage = localStorage.getItem("counterInStorage") !== null ? JSON.parse(localStorage.getItem('counterInStorage')) : 0; 
let counter = parseInt(counterInStorage);
let popupActive =false;

button.addEventListener('click',()=>{
  if(counter>=4){
    buttonReset.style.display = 'block';
  }
    if(!popupActive){
    popupWrapper.style.display = 'block'
    window.localStorage.clear();
    window.localStorage.setItem('counterInStorage', JSON.stringify(counter+1));
    counter++;
    popupBoldText.textContent = counter+ ' times';
    popupActive=true;}})


    popupWrapper.addEventListener('click', function(e){
    if(popupActive){
	if (popup.contains(e.target)){
  } else{
    popupWrapper.style.display = 'none'
    popupActive = false;
  }}})

  buttonX.addEventListener('click', function(e){
    popupWrapper.style.display = 'none'
    popupActive = false;
  })

  buttonReset.addEventListener('click',()=>{
    window.localStorage.clear();
    counter=0;
    popupBoldText.textContent = counter+ ' times';
    buttonReset.style.display = 'none';
  });