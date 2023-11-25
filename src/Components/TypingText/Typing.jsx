import React, { useState, useEffect } from 'react';

const Typing = ({ phrases }) => {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    let interval;

    const type = () => {
      const currentPhrase = phrases[phraseIndex];
      if (currentPhrase.length > 0) {
        setText((prevText) => prevText + currentPhrase.charAt(0));
        currentPhrase = currentPhrase.substring(1);
      } else {
        clearInterval(interval);
        setTimeout(erase, 1000);
      }
    };

    const erase = () => {
      interval = setInterval(() => {
        if (text.length > 0) {
          setText((prevText) => prevText.slice(0, -1));
        } else {
          clearInterval(interval);
          setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
          setTimeout(type, 500);
        }
      }, 50);
    };

    interval = setInterval(type, 50);

    return () => clearInterval(interval);
  }, [text, phraseIndex, phrases]);

  return <div>{text}</div>;
};

export default Typing;
