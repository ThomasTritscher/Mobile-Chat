let messages = [];







function addMessage() {
let message_text = document.getElementById
('message_input').value;
messages.push(message_text)
let message = document.getElementById('dialog_section');
let me
for (let i = 0; i < messages.length; i++) {
  message.innerHTML += 
  `<div class="message-line">${messages[i]}</div>`
  ;
}
}