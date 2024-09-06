import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    height: 100%;
    scrollbar-gutter: unset;
    cursor: none;
  }
`;

const CursorCircle = styled.div.attrs<
  {
    $isErasing: boolean,
    $lineWidth: number,
    $left: number,
    $top: number,
    $brushColor: string 
  }>(
    (props) => ({
      style: {
        left: `${props.$left}px`,
        top: `${props.$top}px`,
        width: `${props.$lineWidth}px`,
        height: `${props.$lineWidth}px`,
        borderRadius: `${props.$isErasing ? '10%' : '50%'}`,
        backgroundColor: `${props.$isErasing ? 'var(--text-color)' : props.$brushColor}`,
      },
    }))`
  position: absolute;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 1000;

  svg {
    width: 24px;
    height: 24px;
    transform: ${({ $lineWidth }) => `translate(calc(${$lineWidth/2}px), calc(-100% + ${$lineWidth/2}px))`};
  }
`;

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const Styled = {
  Canvas,
  CursorCircle,
  GlobalStyle
};