"use client";
import { useEffect, useState, useRef } from 'react';
import ChatBox from './ChatBox';
import MessageInput from './MessageInput';
import { getAuthToken, getUsername } from '../public/js/auth';

export default function HomePage({ setLogin }) {
  const [messages, setMessages] = useState([]);
  const chatRef = useRef();

  useEffect(() => {
    if (!getAuthToken()) {
      setLogin(false);
    }
  }, []);

  const loadMessages = async () => {
    const res = await fetch('https://67d81af29d5e3a10152d6a97.mockapi.io/kol-msg/messages');
    const data = await res.json();
    if (data !== messages){
      setMessages(data.slice(-100)); // limit last 100 messages
      chatRef.current.scrollToBottom();
    }
  };

  useEffect(() => {
    loadMessages();
    const interval = setInterval(loadMessages, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container-fluid p-0 d-flex flex-column" style={{ height: '100vh' }}>
      <ChatBox messages={messages} ref={chatRef} />
      <MessageInput onMessageSent={loadMessages} />
    </div>
  );
}
