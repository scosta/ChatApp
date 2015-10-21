var ChatServerActionCreators = require('../actions/ChatServerActionCreators');

// Simulate client-server communication and server-side processing with local storage
module.exports = {
    getAllMessages: function() {
        // Simulate retrieving data from database.
        var rawMessages = JSON.parse(localStorage.getItem('messages'));

        // Simulate a successful callback.
        ChatServerActionCreators.receiveAll(rawMessages);
    },

    createMessage: function(message, threadName) {
        // Simulate writing to db
        var rawMessages = JSON.parse(localStorage.getItem('messages'));
        var timestamp = Date.now();
        var id = 'm_' + timestamp;
        var threadID = message.threadID || ('t_' + Date.now());
        var createdMessage = {
            id: id,
            threadID: threadID,
            threadName: threadName,
            authorName: message.authorName,
            text: message.text,
            timestamp: timestamp
        };
        rawMessages.push(createdMessage);
        localStorage.setItem('messages', JSON.stringify(rawMessages));

        // Simulate successful callback
        setTimeout(function() {
            ChatServerActionCreators.receiveCreatedMessage(createdMessage);
        }, 0);
    }
};
