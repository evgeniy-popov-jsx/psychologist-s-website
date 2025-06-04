import { Message } from 'presentation/components/Message/index.tsx';
import { Image } from './components/Image/index.tsx';
import { Styled } from './styles.ts';

export const Photos = () => {
  const images = [
    {
      id: 1,
      url: '/1.jpg',
    },
    {
      id: 2,
      url: '/2.jpg',
    },
    {
      id: 3,
      url: '/3.jpg',
    },
    {
      id: 4,
      url: '/4.jpg',
    },
    {
      id: 5,
      url: '/5.jpg',
    },
    {
      id: 6,
      url: '/1.jpg',
    },
    {
      id: 7,
      url: '/2.jpg',
    },
    {
      id: 8,
      url: '/3.jpg',
    },
    {
      id: 9,
      url: '/4.jpg',
    },
    {
      id: 10,
      url: '/5.jpg',
    },
  ];

  return (
    <Styled.Container>
      <Styled.Ul>
        {images.map((el) => {
          return <Image key={el.id} src={el.url} blurredSrc={el.url} />;
        })}
      </Styled.Ul>
      <Message id={'photos'}>
        Терапия — это не только про техники, но и про человеческую встречу. Мы работаем не
        с теорией, а с живым опытом. Здесь ты можешь увидеть мою жизнь за рамками кабинета
        — чтобы понять, какой я человек.
        <br />
        <br />
        Потому что доверие начинается с ощущения «своего» человека. <br />
        <br />
        <span>
          А если бы ты выбрал одну фотографию, которая отражает тебя прямо сейчас, какая
          бы это была? Что на ней?
        </span>
      </Message>
      <Styled.BlurFooter />
    </Styled.Container>
  );
};
