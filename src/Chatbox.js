import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Chatbox() {
  const [messages, setMessages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [messageContent, setMessageContent] = useState('');

  useEffect(() => {
    updateMessages();
    const interval = setInterval(updateMessages, 5000);
    return () => clearInterval(interval);  // Cleanup interval on component unmount
  }, [searchQuery]);

  const updateMessages = async () => {
    try {
      const response = await axios.get('/api/messages/');
      const filteredMessages = response.data.filter(message => {
        const messageContentLower = message.content.toLowerCase();
        const messageResponseLower = message.response ? message.response.toLowerCase() : '';
        return !searchQuery || messageContentLower.includes(searchQuery) || messageResponseLower.includes(searchQuery);
      });
      setMessages(filteredMessages);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const clearChat = async () => {
    try {
      await axios.post('/api/clear_chat/');
      updateMessages();
    } catch (error) {
      console.error('Error clearing chat:', error);
    }
  };

  const sendMessage = async () => {
    if (messageContent) {
      try {
        await axios.post('/api/messages/', { content: messageContent });
        setMessageContent('');
        updateMessages();
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  return (
    <div className="container">
      <header className="mb-4">
        <h1 className="text-center">Chatbox</h1>
        <input
          type="text"
          className="form-control"
          placeholder="Search messages"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value.toLowerCase())}
        />
      </header>
      <div id="messages" className="mb-3" style={{
        height: '300px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        overflowY: 'scroll',
        marginBottom: '10px',
        padding: '10px',
        backgroundColor: '#f9f9f9',
      }}>
        {messages.map((message, index) => (
          <div key={index}>
            <div className="user-message message" style={{
              marginBottom: '10px',
              padding: '5px',
              borderRadius: '5px',
              backgroundColor: '#e6f7ff',
              textAlign: 'right',
              marginRight: '20px',
            }}>
              {message.content}
            </div>
            {message.response && (
              <div className="bot-message message" style={{
                marginBottom: '10px',
                padding: '5px',
                borderRadius: '5px',
                backgroundColor: '#d9f7be',
              }}>
                {message.response}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Type a message"
          aria-label="Message"
          aria-describedby="button-addon2"
          value={messageContent}
          onChange={e => setMessageContent(e.target.value)}
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={sendMessage}>Send</button>
        </div>
      </div>
      <button className="btn btn-danger" onClick={clearChat}>Clear Chat</button>
    </div>
  );
}

export default Chatbox;
