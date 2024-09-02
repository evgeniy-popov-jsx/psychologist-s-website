import React, { useEffect, useState } from 'react';
import { Styled } from './styles';

export const Message: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <Styled.Message>
      <span>Привет, меня зовут Ира! Я психолог и просто хороший человечке. Живу не тужу, напиши свой запрос</span>
      <Styled.CloseButton onClick={handleClose}>✖</Styled.CloseButton>
    </Styled.Message>
  );
};