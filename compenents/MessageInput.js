import { useState } from 'react';
import { getUsername } from '../public/js/auth';

export default function MessageInput({ onMessageSent }) {
  const [text, setText] = useState('');
  const API_URL = 'https://67d81af29d5e3a10152d6a97.mockapi.io/kol-msg/messages';

  const sendMessage = async () => {
    if (!text.trim()) return;

    const now = new Date();
    const hours = now.getHours() % 12 || 12;
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = now.getHours() >= 12 ? 'PM' : 'AM';

    const newMessage = {
      user: getUsername(),
      text,
      time: `${hours}:${minutes} ${ampm}`
    };

    await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newMessage)
    });

    setText('');
    onMessageSent();
  };

  return (
    <nav className="navbar bg-light p-3 fixed-bottom">
      <div className="container">
        <div className="input-group">
          <input
            className="form-control"
            placeholder="Type your message..."
            value={text}
            onChange={e => setText(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && sendMessage()}
          />
          <button className="btn btn-success" onClick={sendMessage}>Send</button>
        </div>
      </div>
    </nav>
  );
}
