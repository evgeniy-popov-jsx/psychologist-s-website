import { Link as RLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const LineAnim = keyframes`
  0% {
    background: transparent;
  }
  50% {
    background: hsl(0 0% 49.4%);
} 
  100% {
      width: 100%;
      background: transparent;
  }
`;

const LineAnim2 = keyframes`
  0% {
    background: transparent;
  }
  50% {
    background: transparent;
} 
  100% {
      width: 100%;
      background: hsl(0 0% 17.9%);
  }
`;

const Link = styled(RLink)`
  position: relative;
  display: flex;
  align-items: center;
  height: 50px;
  padding: 12px;
  gap: 12px;
  text-decoration: none;
  color: black;
  font-size: 14px;
`;

const Span = styled.span<{ $type: 'education' | 'desc' | 'year'}>`
  display: inline-block;

 ${({ $type }) => {
    switch ($type) {
      case 'education':
        return `
          font-weight: 700;
          color: #1a73e8;
        `;
      case 'desc':
        return `
          color: #777;
        `;
      case 'year':
        return `
          color: #999;
        `;
      default:
        return '';
    }
  }}
`;

const Line = styled.div`
  position: relative;
  flex: 1 1 0%;

  &::before {
    content: "";
    position: absolute;
    bottom: -1px;
    height: 1px;
    width: 0px;
    animation: 1s ease 0.2s 1 normal forwards running ${LineAnim};
    z-index: 3
  }
  &::after {
    content: "";
    position: absolute;
    bottom: -1px;
    height: 1px;
    width: 0px;
    animation: 1s ease 0s 1 normal forwards running ${LineAnim2};
  }
`;

const PhotoBlock = styled.img`
  position: fixed;
  width: 150px;
  height: 200px;
  border-radius: 8px;
  pointer-events: none;
  opacity: 1;
  transform: translate(-50%, -50%);
  z-index: 999;
`;

export const Styled = {
  Link,
  Span,
  Line,
  PhotoBlock
};