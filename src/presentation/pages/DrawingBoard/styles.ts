import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
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