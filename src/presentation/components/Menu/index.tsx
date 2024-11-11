import { useLocation } from 'react-router-dom';
import { Styled } from './styles.ts';
import { Tooltip } from 'antd';

export const Menu = () => {
  const location = useLocation();

  const styles = {
    color: '#4E5A82 ',
    bgColor: '#FFEDEB',
  };

  if (location.pathname === '/') {
    return null;
  }

  return (
    <Styled.Container>
      <Tooltip
        title={'Главная'}
        placement='bottom'
        color={styles.bgColor}
        overlayInnerStyle={{ color: styles.color }}
        destroyTooltipOnHide
      >
        <Styled.Link to={'/'}>
          <Styled.HomeIcon $active={location.pathname === '/'} />
        </Styled.Link>
      </Tooltip>
      <Tooltip
        title={'Рисовашка'}
        placement='bottom'
        color={styles.bgColor}
        overlayInnerStyle={{ color: styles.color }}
        destroyTooltipOnHide
      >
        <Styled.Link to={'/draw'}>
          <Styled.PaintIcon $active={location.pathname === '/draw'} />
        </Styled.Link>
      </Tooltip>
      <Tooltip
        title={'Фотографии'}
        placement='bottom'
        color={styles.bgColor}
        overlayInnerStyle={{ color: styles.color }}
        destroyTooltipOnHide
      >
        <Styled.Link to={'/photos'}>
          <Styled.PhotosIcon $active={location.pathname === '/photos'} />
        </Styled.Link>
      </Tooltip>
      <Tooltip
        title={'Образование'}
        placement='bottom'
        color={styles.bgColor}
        overlayInnerStyle={{ color: styles.color }}
        destroyTooltipOnHide
      >
        <Styled.Link to={'/educations'}>
          <Styled.EducationIcon $active={location.pathname === '/educations'} />
        </Styled.Link>
      </Tooltip>
      <Tooltip
        title={'Стоимость'}
        placement='bottom'
        color={styles.bgColor}
        overlayInnerStyle={{ color: styles.color }}
        destroyTooltipOnHide
      >
        <Styled.Link to={'/price'}>
          <Styled.PriceIcon $active={location.pathname === '/price'} />
        </Styled.Link>
      </Tooltip>
      <Tooltip
        title={'Телеграм'}
        placement='bottom'
        color={styles.bgColor}
        overlayInnerStyle={{ color: styles.color }}
        destroyTooltipOnHide
      >
        <Styled.Link
          to={'https://t.me/Greirinka'}
          target='_blank'
          rel='noopener noreferrer'
        >
          <Styled.TelegramIcon $active={location.pathname === '/telegram'} />
        </Styled.Link>
      </Tooltip>
    </Styled.Container>
  );
};
