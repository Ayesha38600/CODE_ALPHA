function sendMessage() {
    var messageInput = document.getElementById("message-input");
    var messageText = messageInput.value.trim();

    if (messageText !== "") {
        var chatBox = document.getElementById("chat-box");
        var messageElement = document.createElement("div");
        messageElement.className = "message";
        messageElement.textContent = messageText;

        chatBox.appendChild(messageElement);
        messageInput.value = "";

        // Scroll to the bottom of the chat box
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}
