let messages = [];

let users = [
  {
    'user_img': 'img/female.jpg',
    'lastname': 'Kruse',
    'firstname': 'Maren',
    'birth': '20.04.1983',
    'mail': 'maren.kruse@gmail.com',
  }, {
    'user_img': 'img/female2.jpg',
    'lastname': 'Meier',
    'firstname': 'Kathrin',
    'birth': '09.10.1990',
    'mail': 'kathrin.meier@gmail.com',
  },
  {
    'user_img': 'img/male.jpg',
    'lastname': 'Cech',
    'firstname': 'Noah',
    'birth': '01.01.1982',
    'mail': 'noah.cech@gmail.com',
  },
  {
    'user_img': 'img/male2.jpg',
    'lastname': 'Marqiuis',
    'firstname': 'Pascal',
    'birth': '09.01.1980',
    'mail': 'pascal.marqius@gmail.com',
  },
  {
    'user_img': 'img/female3.jpg',
    'lastname': 'Parker',
    'firstname': 'Bethany',
    'birth': '15.12.1989',
    'mail': 'bethany.parker@gmail.com',
  },
  {
    'user_img': 'img/male3.jpg',
    'lastname': 'Ono',
    'firstname': 'Yuki',
    'birth': '06.06.1994',
    'mail': 'yuki.ono@gmail.com',
  },
];

setURL('http://thomas-tritscher.developerakademie.com/Mobile-Chat/backend');

/**
 * This function downloads data from server.
 */
async function loadData() {
  console.log('loadData() called');
  await downloadFromServer();
  console.log('Downloaded data from server');
  messages = JSON.parse(backend.getItem('message')) || [];
  // users = JSON.parse(backend.getItem('user_img')) || [];


}


function loadUser() {
  for (let i = 0; i < users.length; i++) {
    let user = users[i];
    document.getElementById('user-dashboard').innerHTML += `
    <div onclick="showUserProfile()" class="user"><img src="${user['user_img']}"class="user-img" alt=""></div>`
  }

}

async function loadChat() {
  await loadData();
  let chat = document.getElementById('dialog_section');
  chat.innerHTML = '';
  for (let i = 0; i < messages.length; i++) {
    chat.innerHTML +=
      `<div class="message-line">${messages[i]}</div>`
      ;
  };
}

function addMessage() {
  let message_text = document.getElementById
    ('message_input').value;
  messages.push(message_text);
  backend.setItem('message', JSON.stringify(messages));
  let message = document.getElementById('dialog_section');
  message.innerHTML = '';
  for (let i = 0; i < messages.length; i++) {
    message.innerHTML +=
      `<div class="message-line">${messages[i]}</div>`
      ;
    clearInputField();
  }

}
function clearInputField() {
  document.getElementById('message_input').value = '';
}

function showUserProfile() {

}
/**
 * This function generated Listelemnts for profile-dashboard.
 */
async function showProfileDashboard() {
  await loadData()
  for (let i = 0; i < users.length; i++) {
    let user = users[i];
    document.getElementById('profile-dashboard').innerHTML += `
    <li>
    <img src="../${user['user_img']}"class="user-img" alt="">
    <p>${user['lastname']}</p><p>${user['firstname']}</p>
     <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
     Chat
    </button>
    </li>`;
  }
}


// function saveArraytoLocalStorage(key, messages) {
//   localStorage.setItem(key, JSON.stringify(messages));
// }


// function getArray(key) {
//   return JSON.parse(localStorage.getItem(key));
// }

