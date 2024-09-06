import styled from 'styled-components';

const Container = styled.div<{ $width: number, $height: number }>`
  position: relative;
  height: ${({$height})=> $height}px;
  width: ${({$width})=> $width}px;
  overflow: hidden;
  margin: 0;
  cursor: none;
`;

const Canvas = styled.canvas`
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  cursor: none;
`;

export const Styled = {
  Container,
  Canvas,
};