import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  margin: 0;
`;

const Button = styled.button`

`;

const Canvas = styled.canvas`
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
`;

const ToolBtn = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1;
  display: flex;
`;

export const Styled = {
  Container,
  Button,
  Canvas,
  ToolBtn
};