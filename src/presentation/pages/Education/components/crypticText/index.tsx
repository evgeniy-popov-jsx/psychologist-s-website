import { useState, useEffect, useRef } from 'react';

export const CrypticTextAnimation = ({ fullText }: { fullText: string }) => {
  const [text, setText] = useState('');
  const [attempts, setAttempts] = useState<number[]>([]);
  const requestRef = useRef<number>();
  const frameCount = useRef<number>(0);
  const framesPerUpdate = 2;
  const charsPerFrame = 1;
  
  useEffect(() => {
    const randomChar = () => {
      const chars = 'абвгдеёжзийклмнопрстуфхцчшщьъыэюя012589!>';
      return chars[Math.floor(Math.random() * chars.length)];
    };

    const updateText = () => {
      frameCount.current += 1;

      if (frameCount.current % framesPerUpdate === 0) {
        setText((prevText) => {
          let nextText = '';
          let nextAttempts = [...attempts];

          const nextLength = Math.min(prevText.length + charsPerFrame, fullText.length);

          for (let i = 0; i < nextLength; i++) {
            const currentChar = prevText[i]?.toLowerCase();
            const targetChar = fullText[i]?.toLowerCase();

            if (i < prevText.length && currentChar === targetChar) {
              nextText += fullText[i];
            } else {
              if (nextAttempts[i] >= 19) {
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
      }

      requestRef.current = requestAnimationFrame(updateText);
    };

    requestRef.current = requestAnimationFrame(updateText);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [fullText, attempts]);

  return <>{text}</>;
};