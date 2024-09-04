import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  margin: 0;
`;

const Canvas = styled.canvas`
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
`;

export const Styled = {
  Container,
  Canvas,
};