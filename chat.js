let messages = [];


// setURL('http://f013581c@thomas-tritscher.developerakademie.com/Mobile-Chat/backend');

 function loadChat() {
  messages = getArray('messages') || [];
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
  saveArraytoLocalStorage('messages', messages);
  let message = document.getElementById('dialog_section');
  message.innerHTML = '';
  for (let i = 0; i < messages.length; i++) {
    message.innerHTML +=
      `<div class="message-line">${messages[i]}</div>`
      ;
    clearInputField();
  }
}
function addMessageUserTwo() {
  let message_text = document.getElementById
    ('message_input').value;
  messages.push(message_text);
  saveArraytoLocalStorage('messages', messages);
  let message = document.getElementById('dialog_section');
  message.innerHTML = '';
  for (let i = 0; i < messages.length; i++) {
    message.innerHTML +=
      `<div class="message-line-user-two">${messages[i]}</div>`
      ;
    clearInputField();
  }
}

function clearInputField() {
  document.getElementById('message_input').value = '';
}

//set Array ('messages')
function saveArraytoLocalStorage(key, messages) {
  localStorage.setItem(key, JSON.stringify(messages));
}

//get Array ('messages')
function getArray(key) {
  return JSON.parse(localStorage.getItem(key));
}
