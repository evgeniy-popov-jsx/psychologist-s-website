import styled from 'styled-components';

const Container = styled.main`
  padding: 8px;
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 100vh;
  margin: 0px auto;
`;

const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(430px, 1fr));
  gap: 8px;
  margin: 0;
  padding: 0;

  @media (max-width: 462px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

const Li = styled.li`
  display: inline-block;
  position: relative;
  overflow: hidden;
  height: 700px;
  outline: 0px;
`;

const Img = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  inset: 0px;
  color: transparent;
`;

const BlurredImg = styled.img`
  filter: blur(32px);
  transform: scale(1.2) translateZ(0px);
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
  Ul,
  Li,
  Img,
  BlurredImg,
  BlurFooter
};