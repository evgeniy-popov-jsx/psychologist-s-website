import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% {
    opacity: 1;
  }
  25% {
    width: 20px;
    height: 20px;
  }
  50% {
    opacity: 0.7;
    width: 24px;
    height: 24px;
  }
  70% {
    opacity: 0.2;
    width: 35px;
    height: 35px;
  }
  80% {
    opacity: 0.2;
    border-radius: 50%;
    width: 27px;
    height: 27px;
  }
  100% {
    opacity: 1;
    border-radius: 20%;
    height: 20px;
  }
`;

const borderAnim = keyframes`
  0%{
    border: 1px solid var(--text-color);
  }
  50%{
    border: none;
  }
  100%{
    border: 1px solid var(--text-color);
  }
`;

const ToolBtns = styled.div`
  position: absolute;
  top: 50%;
  left: 21px;
  transform: translateY(-50%);
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;
  cursor: none;
`;

const Circle = styled.div<{ $size: number, $active: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${props => props.$size}px;
  height: ${props => (props.$active ? '100%' : `${props.$size}px`)};
  border-radius: ${props => (props.$active ? '20%' : '50%')};
  background-color: var(--text-color);
  cursor: none;
`;

const Button = styled.button`
  position: relative;
  width: 22px;
  height: 22px;
  background: none;
  border: 1px solid var(--text-color);
  border-radius: 50%;
  cursor: none;

  &:hover ${Circle} {
    animation: ${pulse} 0.32s ease-out forwards;
  }

  &:hover {
    animation: ${borderAnim} 0.2s ease-out forwards;
  }
`;


export const Styled = {
  ToolBtns,
  Button,
  Circle,
};