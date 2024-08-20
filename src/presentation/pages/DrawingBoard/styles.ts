import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  margin: 0;
`;

const Button = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1;
`;

const Canvas = styled.canvas`
  display: block;
  width: 100%;
  height: 100%;
`;

export const Styled = {
  Container,
  Button,
  Canvas,
};