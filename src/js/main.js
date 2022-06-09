const button = document.querySelector('button');
const popupWrapper = document.querySelector('.popupWrapper')
const popup = document.querySelector('.popup');
const popupBoldText = document.querySelector('.popupBoldText');
const buttonX = document.querySelector('.buttonX');
const buttonReset = document.querySelector('.buttonReset');

let counter = 0;
let popupActive =false;

button.addEventListener('click',()=>{
  if(counter>=4){
    buttonReset.style.display = 'block';
  }
    if(!popupActive){
    popupWrapper.style.display = 'block'
    counter++;
    console.log('counter: '+counter)
    console.log('popup: '+popupActive)
    popupBoldText.textContent = counter+ ' times';
    popupActive=true;}})


    popupWrapper.addEventListener('click', function(e){
    console.log('popup: '+popupActive)
    if(popupActive){
	if (popup.contains(e.target)){
  	console.log("in Popup");
  } else{
  	console.log("outside Popup");
    console.log('counter: '+counter);
    popupWrapper.style.display = 'none'
    popupActive = false;
  }}})

  buttonX.addEventListener('click', function(e){
    popupWrapper.style.display = 'none'
    popupActive = false;
  })

  buttonReset.addEventListener('click',()=>{
    counter=0;
    popupBoldText.textContent = counter+ ' times';
    buttonReset.style.display = 'none';
  });