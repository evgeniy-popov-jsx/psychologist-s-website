import styled, { keyframes } from 'styled-components';
import Paint from 'presentation/components/Menu/icons/paint.svg?react';
import Photos from 'presentation/components/Menu/icons/photos.svg?react';
import Education from 'presentation/components/Menu/icons/education.svg?react';
import Price from 'presentation/components/Menu/icons/price.svg?react';
import Telegram from 'presentation/components/Menu/icons/telegram.svg?react';
import { Link as RLink} from 'react-router-dom';

const Open = keyframes`
  0% {
    transform: translate(-50%, 150%);
  }
  100% {
    transform: translate(-50%, 0%);
  }
`;

const Container = styled.div`
  position: fixed;
  bottom: 13px;
  left: 50vw;
  transform: translateX(-50%);
  display: flex;
  gap: 18px;
  align-items: center;
  background: var(--bg-color);
  padding: 9.5px;
  border: 1px solid var(--accent-color);
  border-radius: 12.5px;
  z-index: 3;
  animation: ease 0.8s forwards ${Open};
`;

const PaintIcon = styled(Paint)<{ $active: boolean }>`
  width: 27.67px;
  height: 25.64px;
  padding: 2px;
  cursor: pointer;

  path {
    fill: ${({ $active }) => ($active ? 'var(--text-color)' : 'var(--accent-color)')};
  }

  &:hover path {
    fill: var(--text-color);
  }
`;

const PhotosIcon = styled(Photos)<{ $active: boolean }>`
  width: 32.35px;
  height: 25.26px;
  padding: 2px;
  cursor: pointer;

  path {
    fill: ${({ $active }) => ($active ? 'var(--text-color)' : 'var(--accent-color)')};
  }

  &:hover path {
    fill: var(--text-color);
  }
`;

const EducationIcon = styled(Education)<{ $active: boolean }>`
  width: 23.04px;
  height: 25.44px;
  padding: 2px;
  cursor: pointer;

  path {
    fill: ${({ $active }) => ($active ? 'var(--text-color)' : 'var(--accent-color)')};
  }

  &:hover path {
    fill: var(--text-color);
  }
`;

const PriceIcon = styled(Price)<{ $active: boolean }>`
  width: 27.96px;
  height: 26.51px;
  padding: 2px;
  cursor: pointer;

  path {
    fill: ${({ $active }) => ($active ? 'var(--text-color)' : 'var(--accent-color)')};
  }

  &:hover path {
    fill: var(--text-color);
  }
`;

const TelegramIcon = styled(Telegram)<{ $active: boolean }>`
  width: 28.93px;
  height: 25.97px;
  padding: 2px;
  cursor: pointer;

  path {
    fill: ${({ $active }) => ($active ? 'var(--text-color)' : 'var(--accent-color)')};
  }

  &:hover path {
    fill: var(--text-color);
  }
`;

const Link = styled(RLink)`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Styled = {
  Container,
  PaintIcon,
  PhotosIcon,
  EducationIcon,
  PriceIcon,
  TelegramIcon,
  Link
};