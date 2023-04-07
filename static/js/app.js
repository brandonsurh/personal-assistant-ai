document.getElementById('user-input-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const userInput = document.getElementById('user-input');

    const userMessage = userInput.value.trim();
    if (!userMessage) return;

    displayMessage('user-message', userMessage);
    userInput.value = '';

    toggleTypingIndicator(true);

    try {
        const chatbotResponse = await fetch('/get_response', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `user_input=${encodeURIComponent(userMessage)}`
        });
        toggleTypingIndicator(false);
        
        if (chatbotResponse.ok) {
            const chatbotText = await chatbotResponse.text();
            displayMessage('chatbot-message', chatbotText);
        } else {
            displayMessage('chatbot-message', 'Error: Could not get a response from the server.');
        }
    } catch (error) {
        toggleTypingIndicator(false);
        console.error(error);
    }
});

// displays the message received back from the API
function displayMessage(messageClass, messageText) {
    const chatDisplay = document.getElementById('chat-display');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', messageClass);
    messageElement.textContent = messageText;
    chatDisplay.appendChild(messageElement);
    scrollToBottom();
}

// takes a boolean value to control the visibility of the typing indicator
// a typing indicator is shown before the API finishes its call and posts it
function toggleTypingIndicator(visible) {
    const typingIndicator = document.querySelector('.typing-indicator');
    typingIndicator.style.display = visible ? 'block' : 'none';
}

// scrolls the window to the bottom
function scrollToBottom() {
    const chatDisplay = document.getElementById('chat-display');
    chatDisplay.scrollTop = chatDisplay.scrollHeight;
}