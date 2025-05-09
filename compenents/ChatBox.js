import { useImperativeHandle, useRef, forwardRef } from 'react';
import styles from '../public/css/chat.module.css';
import { getUsername } from '../public/js/auth';

const ChatBox = forwardRef(({ messages }, ref) => {
  const username = getUsername();
  const scrollRef = useRef(null);

  const scrollToBottom = () => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useImperativeHandle(ref, () => ({
    scrollToBottom
  }));

  return (
    <div className={`flex-grow-1 overflow-auto p-3 ${styles.chatBox}`}>
      {messages.map(msg => (
        <div
          key={msg.id}
          className={`${styles.message} ${msg.user === username ? styles.user : styles.other} text-wrap`}
        >
          <strong>{msg.user}</strong>
          <div>{msg.text}</div>
          <div className="text-muted small">{msg.time}</div>
        </div>
      ))}
      <div ref={scrollRef}></div>
    </div>
  );
});

export default ChatBox;