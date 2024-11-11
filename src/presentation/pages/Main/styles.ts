import { Link as RLink } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div<{ $width: number; $height: number }>`
  position: relative;
  width: ${(props) => `${props.$width}px`};
  height: ${(props) => `${props.$height}px`};
  overflow: hidden;
  @media (max-width: 380px) {
    overflow: clip;
  }
`;

const PreviewText = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  text-align: center;
  padding: 20px;
  font-size: 42px;
  color: var(--text-color);
  pointer-events: none;
  @media (max-width: 1186px) {
    z-index: 1;
    width: 80%;
  }
`;
const Text = styled.div`
  font-size: 42px;
  @media (max-width: 1260px) {
    font-size: 34px;
  }

  @media (max-width: 642px) {
    font-size: 24px;
  }
`;

const Link = styled(RLink)`
  width: 300px;
  text-align: center;
  padding: 15px 20px;
  font-size: 24px;
  color: var(--bg-color);
  background: var(--text-color);
  border-radius: 12.5px;
  text-decoration: none;
  z-index: 1;
  pointer-events: auto;
  @media (max-width: 1260px) {
    font-size: 18px;
    width: 150px;
  }
  @media (max-width: 642px) {
    font-size: 15px;
    padding: 5px 10px;
  }
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
    z-index: 1;
  }

  @media (max-width: 1111px) {
    font-size: 18px;
    top: ${(props) => `${props.$top - 5}%`};
    left: ${(props) => `${props.$left - 5}%`};
  }
  @media (max-width: 966px) {
    font-size: 15px;
    top: ${(props) => `${props.$top + 5}%`};
    left: ${(props) => `${props.$left - 5}%`};
  }
  @media (max-width: 955px) {
    font-size: 15px;
    top: ${(props) => `${props.$top + 5}%`};
    left: ${(props) => `${props.$left - 5}%`};
    width: ${(props) => `${props.$width - 80}px`};
  }
  @media (max-width: 760px) {
    font-size: 15px;
    top: ${(props) => `${props.$top}%`};
    left: ${(props) => `${props.$left - 10}%`};
    width: ${(props) => `${props.$width - 80}px`};
    filter: blur(2px);
    &:hover {
      filter: none;
    }
  }
  @media (max-width: 642px) {
    font-size: 15px;
    top: ${(props) => `${props.$top}%`};
    left: ${(props) => `${props.$left - 10}%`};
    width: ${(props) => `${props.$width - 130}px`};
    filter: blur(2px);
    &:hover {
      filter: none;
    }
  }
  @media (max-width: 642px) {
    font-size: 12px;
    top: ${(props) => `${props.$top}%`};
    left: ${(props) => `${props.$left - 15}%`};
    width: ${(props) => `${props.$width - 130}px`};
    filter: blur(2px);
    &:hover {
      filter: none;
    }
  }
  @media (max-width: 380px) {
    font-size: 12px;
    top: ${(props) => `${props.$top}%`};
    left: ${(props) => `${props.$left - 15}%`};
    width: ${(props) => `${props.$width - 130}px`};
    filter: blur(2px);
    &:hover {
      filter: none;
    }
  }
`;

export const Styled = {
  Container,
  PreviewText,
  Card,
  Link,
  Text,
};
