import React, { useEffect, useState } from 'react';
import { Styled } from './styles';

export const Message: React.FC<{ children: string }> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1300);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <Styled.Message
      initial={{ opacity: 0, y: -20, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.8 }}
      transition={{ 
        duration: 0.5, 
        type: "spring",
        stiffness: 110,
        damping: 10
      }} 
    >
      <Styled.Span>{children}</Styled.Span>
      <Styled.CloseButton onClick={handleClose}>✖</Styled.CloseButton>
    </Styled.Message>
  );
};