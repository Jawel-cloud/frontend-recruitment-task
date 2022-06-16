const button = document.querySelector('button');
const popupWrapper = document.querySelector('.popupWrapper')
const popup = document.querySelector('.popup');
const popupBoldText = document.querySelector('.popupBoldText');
const buttonX = document.querySelector('.buttonX');
const buttonReset = document.querySelector('.buttonReset');

let counterInStorage = localStorage.getItem("counterInStorage") !== null ? JSON.parse(localStorage.getItem('counterInStorage')) : 0;
let counter = parseInt(counterInStorage);
let popupActive = false;

const table = document.querySelector('table')
const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const loader = document.querySelector('.loader')
let timer;


const showTable = () => {
  loader.style.display = "none";
  table.style.display = "table";
}

const loading = () => {
  setTimeout(showTable, 1000);
}
const fetchFunction = () => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      for (let i = 0; i < data.length; i++) {
        const tr = document.createElement('tr')
        tr.innerHTML = `<td>${data[i].name} </td><td>${data[i].email} </td><td class="nomobile">${data[i].address.city}, ${data[i].address.street}, ${data[i].address.suite}</td><td class="nomobile">${data[i].phone}</td><td class="nomobile">${data[i].company.name}</td>`
        tbody.appendChild(tr)
      }
      thead.innerHTML = '<tr><th>Name </th><th>Email </th><th class="nomobile">Address</th><th class="nomobile">Phone</th><th class="nomobile">Company</th></tr>';
    })
}

const fetchFunctionMobile = () => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      for (let i = 0; i < data.length; i++) {
        const tr = document.createElement('tr')
        tr.innerHTML = `<td>${data[i].name}, ${data[i].email}, ${data[i].address.city}, ${data[i].address.street}, ${data[i].address.suite}, ${data[i].phone}, ${data[i].company.name}</td>`
        tbody.appendChild(tr)
      }
      thead.innerHTML = '<tr><th>Name, Email, Address, Phone, Company</th></tr>'
    })
}

button.addEventListener('click', () => {
  if (counter >= 4) {
    buttonReset.style.display = 'block';
  }
  if (!popupActive) {
    popupWrapper.style.display = 'block'
    window.localStorage.clear();
    window.localStorage.setItem('counterInStorage', JSON.stringify(counter + 1));
    counter++;
    popupBoldText.textContent = counter + ' times';
    popupActive = true;
  }
  tbody.innerHTML = '';
  loading();
  window.innerWidth >= 500 ? fetchFunction() : fetchFunctionMobile();
  console.log(window.innerWidth);
})

const closePopup = () => {
  popupWrapper.style.display = 'none'
  loader.style.display = "block";
  table.style.display = "none";
  popupActive = false;
}

popupWrapper.addEventListener('click', function (e) {
  if (popupActive) {
    if (popup.contains(e.target)) {} else {
      closePopup();
    }
  }
})

buttonX.addEventListener('click', function (e) {
  closePopup();
})

buttonReset.addEventListener('click', () => {
  window.localStorage.clear();
  counter = 0;
  popupBoldText.textContent = counter + ' times';
  buttonReset.style.display = 'none';
});