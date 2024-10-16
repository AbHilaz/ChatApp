const socket = io();

document.getElementById('send-button').addEventListener('click', () => {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value;
    if (message) {
        socket.emit('chatMessage', message);
        messageInput.value = '';
    }
});

socket.on('chatMessage', (msg) => {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('p');
    messageElement.textContent = msg;
    chatBox.appendChild(messageElement);
});
