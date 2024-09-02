import { Tooltip } from '../Tooltip/index.tsx';
import { useLocation } from 'react-router-dom';
import { Styled } from './styles.ts';

export const Menu = () => {
  const location = useLocation();

  return (
    <Styled.Container>
      <Tooltip title={'Рисовашка'}>
        <Styled.Link to={'/'}>
          <Styled.PaintIcon $active={location.pathname === '/'} />
        </Styled.Link>
      </Tooltip>
      <Tooltip title={'Фотографии'}>
        <Styled.Link to={'/photos'}>
          <Styled.PhotosIcon $active={location.pathname === '/photos'} />
        </Styled.Link>
      </Tooltip>
      <Tooltip title={'Образование'}>
        <Styled.Link to={'/educations'}>
          <Styled.EducationIcon $active={location.pathname === '/educations'} />
        </Styled.Link>
      </Tooltip>
      <Tooltip title={'Стоимость'}>
        <Styled.Link to={'/price'}>
          <Styled.PriceIcon $active={location.pathname === '/price'} />
        </Styled.Link>
      </Tooltip>
      <Tooltip title={'Телеграм'}>
        <Styled.Link to={'/telegram'}>
          <Styled.TelegramIcon $active={location.pathname === '/telegram'} />
        </Styled.Link>
      </Tooltip>
    </Styled.Container>
  );
};