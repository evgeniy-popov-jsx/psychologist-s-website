import React, { useEffect, useState } from 'react';
import { Styled } from './styles';
import { messageManagerStore } from 'application/stores/messageStore';

export const Message: React.FC<{ id: string, children: string }> = ({ id, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (messageManagerStore.isMessageShown(id)) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => {
        messageManagerStore.setIsMessageShown(id);
      }, 1300);

      return () => clearTimeout(timer);
    }
  }, [id]);

  const handleToggle = () => {
    setIsVisible(prev => !prev);
  };

  if (isVisible) {
    return (
        <Styled.QuestionIcon onClick={handleToggle} />
    );
  }

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
      <Styled.CloseButton onClick={handleToggle}>✖</Styled.CloseButton>
    </Styled.Message>
  );
};