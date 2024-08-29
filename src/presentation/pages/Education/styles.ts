import styled from 'styled-components';

const Container = styled.div`
  max-width: 740px;
  margin: 0 auto;
  padding: 200px 5px 100px 5px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  `;

const BlurFooter = styled.div`
  mask-image: linear-gradient(to top, rgb(0, 0, 0) 25%, transparent);
  backdrop-filter: blur(5px);
  width: 100%;
  height: clamp(80px, 10vh, 200px);
  bottom: 0px;
  pointer-events: none;
  position: fixed;
`;

export const Styled = {
  Container,
  BlurFooter,
};