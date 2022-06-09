const button = document.querySelector('button');
const popupWrapper = document.querySelector('.popupWrapper')
const popup = document.querySelector('.popup');

let counter = 0;
let popupActive =false;

button.addEventListener('click',()=>{
    if(!popupActive){
    popupWrapper.style.display = 'block'
    counter++;
    console.log('counter: '+counter)
    console.log('popup: '+popupActive)
    popupActive=true;}})


    popupWrapper.addEventListener('click', function(e){
    console.log('popup: '+popupActive)
    if(popupActive){
	if (popup.contains(e.target)){
  	console.log("Clicked in Box");

  } else{
  	console.log("Clicked outside Box");
    console.log('counter: '+counter);
    popupWrapper.style.display = 'none'
    popupActive = false;
  }}})
