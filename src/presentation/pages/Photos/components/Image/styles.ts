import styled from 'styled-components';

const ListItem = styled.li`
  display: inline-block;
  position: relative;
  overflow: hidden;
  height: 700px;
  outline: 0px;
`;

const BlurredImage = styled.img<{ $isLoaded: boolean}>`
  filter: blur(20px);
  transform: scale(1.1);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.5s ease;
  opacity: ${({ $isLoaded }) => ($isLoaded ? 0 : 1)};
  inset: 0px;
  color: transparent;
`;

const MainImage = styled.img<{ $isLoaded: boolean}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.5s ease;
  opacity: ${({ $isLoaded }) => ($isLoaded ? 1 : 0)};
  inset: 0px;
  color: transparent;
  user-select: none;
  object-fit: cover;
`;

export const Styled = {
  ListItem,
  BlurredImage,
  MainImage,
};