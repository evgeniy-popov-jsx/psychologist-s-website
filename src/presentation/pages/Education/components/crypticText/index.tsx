import { useState, useEffect } from 'react';

export const CrypticTextAnimation = ({ fullText }: { fullText: string }) => {
  const [text, setText] = useState('');
  const [attempts, setAttempts] = useState<number[]>([]);

  useEffect(() => {
    const randomChar = () => {
      const chars = 'абвгдежзиклмноп?#рстуф%хць&юя012589!>';
      return chars[Math.floor(Math.random() * chars.length)];
    };

    const updateText = () => {
      setText((prevText) => {
        let nextText = '';
        let nextAttempts = [...attempts];

        // Увеличиваем длину текста на 3 символа
        const nextLength = Math.min(prevText.length + 1, fullText.length);

        for (let i = 0; i < nextLength; i++) {
          const currentChar = prevText[i]?.toLowerCase();
          const targetChar = fullText[i]?.toLowerCase();

          if (i < prevText.length && currentChar === targetChar) {
            nextText += fullText[i];
          } else {
            if (nextAttempts[i] >= 2) {
              nextText += fullText[i];
            } else {
              nextText += randomChar();
              nextAttempts[i] = (nextAttempts[i] || 0) + 1;
            }
          }
        }

        setAttempts(nextAttempts);
        return nextText;
      });
    };

    const interval = setInterval(updateText, 60);

    return () => clearInterval(interval);
  }, [fullText, attempts]);

  return <>{text}</>;
};
