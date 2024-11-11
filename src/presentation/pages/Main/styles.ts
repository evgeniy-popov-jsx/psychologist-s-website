import { Link as RLink } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div``;

const PreviewText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  text-align: center;
  padding: 20px;
  font-size: 42px;
  color: var(--text-color);
`;
const Link = styled(RLink)`
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  padding: 15px 20px;
  font-size: 24px;
  color: var(--bg-color);
  background: var(--text-color);
  border-radius: 12.5px;
  text-decoration: none;
  z-index: 1;
`;

const Card = styled.div.attrs<{
  $top: number;
  $left: number;
  $width: number;
  $mouseX: number;
  $mouseY: number;
  $rotate: number;
  $blur?: boolean;
}>((props) => ({
  style: {
    transform: `
      perspective(1000px) 
      translate(${props.$mouseX * -0.01}px, ${props.$mouseY * -0.01}px) 
      rotate(${props.$rotate}deg) 
      rotateY(${props.$mouseX * 0.01}deg) 
      rotateX(${props.$mouseY * -0.01}deg)`,
  },
}))`
  position: absolute;
  top: ${(props) => `${props.$top}%`};
  left: ${(props) => `${props.$left}%`};
  width: ${(props) => `${props.$width}px`};
  background-color: var(--accent-color);
  padding: 10px;
  border-radius: 4px;
  color: var(--bg-color);
  user-select: none;
  transform-origin: center;
  transition: transform 0.1s ease-out, filter 0.3s ease;

  filter: ${(props) => (props.$blur ? 'blur(1.5px)' : 'none')};

  &:hover {
    filter: none;
  }
`;

export const Styled = {
  Container,
  PreviewText,
  Card,
  Link,
};
