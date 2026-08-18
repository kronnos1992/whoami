import { useEffect, useState } from 'react';

export function TerminalAnimation() {
  const [text, setText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  
  const fullText = '> SYSTEM_BOOT_SEQUENCE_INITIALIZED...';
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);
  
  return (
    <div className="terminal-animation">
      <div className="terminal-screen">
        <div className="terminal-line">
          <span className="terminal-prompt">$</span>
          <span className="terminal-command">{text}</span>
          <span className={`terminal-cursor ${cursorVisible ? 'visible' : ''}`}>
            █
          </span>
        </div>
        <div className="terminal-ascii">
      <pre>
{`
   ▄▄▄·  ▄▄▄· ▄▄▄▄▄ ▄ .▄
  ▐█ ▀█ ▐█ ▄█ •██  ██▪▐█
  ▄█▀▀█  ██▀·  ▐█.▪██▀▐█
  ▐█ ▪▐▌▐█▪·•  ▐█▌·██▌▐▀
   ▀  ▀ .▀     ▀▀▀ ▀▀▀ ·
`}
          </pre>
        </div>
      </div>
      
      <style>{`
        .terminal-animation {
          font-family: 'Fira Code', 'Courier New', monospace;
          color: var(--color-primary);
        }
        
        .terminal-screen {
          background: rgba(0, 0, 0, 0.8);
          padding: 1.5rem;
          border-radius: 8px;
          border: 1px solid var(--color-primary);
          box-shadow: 0 0 20px rgba(0, 255, 0, 0.2);
          min-width: 500px;
        }
        
        .terminal-line {
          font-size: 1.1rem;
          margin-bottom: 1rem;
        }
        
        .terminal-prompt {
          color: var(--color-primary);
          font-weight: bold;
          margin-right: 0.5rem;
        }
        
        .terminal-command {
          color: var(--color-text);
          letter-spacing: 1px;
        }
        
        .terminal-cursor {
          display: inline-block;
          opacity: 0;
          margin-left: 2px;
        }
        
        .terminal-cursor.visible {
          opacity: 1;
        }
        
        .terminal-ascii pre {
          color: var(--color-primary);
          font-size: 0.7rem;
          margin: 0;
          opacity: 0.7;
          text-align: center;
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}