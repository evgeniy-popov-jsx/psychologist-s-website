import { motion } from 'framer-motion';
import Question from './icons/question.svg?react';
import styled from 'styled-components';

const Message = styled(motion.div)`
  position: fixed;
  top: 20px;
  right: 20px;
  max-width: 300px;
  margin-left: 20px;
  background: var(--accent-color);
  padding: 30px 25px; 
  border-radius: 8px;
  cursor: default;
  z-index: 4;

  &::before {
    content: "";
    position: absolute;
    top: -15px;
    right: 40px;
    width: 35px;
    height: 35px;
    background: var(--accent-color);
    border-radius: 1px;
    clip-path: polygon(100% -12%, 100% 100%, 0 100%);
  }

  &::after {
    content: "";
    position: absolute;
    top: -16px;
    right: 40px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--accent-color);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: var(--bg-color);
  padding: 0;
  
  &:hover {
    color: var(--text-color);
  }
`;

const Span = styled.span`
  color: var(--bg-color);
`;

const QuestionIcon = styled(Question)`
  position: fixed;
  top: 26px;
  right: 30px;
  width: 24px;
  height: 24px;
  path {
    fill: var(--text-color);
  }
  &:hover path {
    fill: var(--accent-color);
  }
  z-index: 10;
  cursor: pointer;
`;

export const Styled = {
  Message,
  CloseButton,
  Span,
  QuestionIcon
};
