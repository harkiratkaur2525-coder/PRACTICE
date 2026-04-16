import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! I am the AGC AI Assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { sender: 'user', text: input }]);
    const currentInput = input;
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      let botReply = 'I am currently a demo bot. Please contact admin for more info!';
      if (currentInput.toLowerCase().includes('admission')) {
        botReply = 'Admissions are open for 2026! Please visit the admissions tab or contact +91-0183-5069527.';
      } else if (currentInput.toLowerCase().includes('placement')) {
        botReply = 'AGC holds a record of 850+ offers with the highest package being 28 LPA recently!';
      }
      setMessages(prev => [...prev, { sender: 'bot', text: botReply }]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(true)}
        style={{
          position: 'fixed', bottom: '20px', right: '20px',
          background: 'var(--secondary)', color: 'var(--white)',
          border: 'none', borderRadius: '50%', width: '60px', height: '60px',
          display: isOpen ? 'none' : 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: 'var(--shadow-lg)', cursor: 'pointer', zIndex: 1000
        }}
      >
        <MessageCircle size={30} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div style={{
          position: 'fixed', bottom: '20px', right: '20px',
          width: '350px', height: '500px', background: 'var(--white)',
          borderRadius: '12px', boxShadow: 'var(--shadow-lg)',
          display: 'flex', flexDirection: 'column', overflow: 'hidden', zIndex: 1000
        }}>
          {/* Header */}
          <div style={{ background: 'var(--primary)', color: 'var(--white)', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ margin: 0, color: 'var(--white)' }}>AGC AI Assistant</h3>
            <button onClick={() => setIsOpen(false)} style={{ background: 'transparent', color: 'var(--white)', border: 'none', cursor: 'pointer' }}>
              <X size={24} />
            </button>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, padding: '1rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem', background: '#f8fafc' }}>
            {messages.map((msg, i) => (
              <div key={i} style={{
                alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                background: msg.sender === 'user' ? 'var(--primary)' : '#e2e8f0',
                color: msg.sender === 'user' ? 'var(--white)' : 'var(--text-dark)',
                padding: '0.75rem 1rem', borderRadius: '12px', maxWidth: '80%'
              }}>
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleSend} style={{ display: 'flex', borderTop: '1px solid #eee', padding: '0.5rem' }}>
            <input 
              type="text" value={input} onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              style={{ flex: 1, border: 'none', outline: 'none', padding: '0.5rem' }}
            />
            <button type="submit" style={{ background: 'var(--secondary)', color: 'var(--white)', border: 'none', borderRadius: '8px', padding: '0.5rem 1rem', cursor: 'pointer' }}>
              <Send size={20} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default Chatbot;
