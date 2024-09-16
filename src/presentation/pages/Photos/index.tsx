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
    }
  ];
  
  return (
    <Styled.Container>
      <Styled.Ul>
        {images.map((el)=>{
          return (
            <Image 
              key={el.id} 
              src={el.url} 
              blurredSrc={el.url} 
            />
          );
        })}
      </Styled.Ul>
      <Message id={'photos'}>
        Жизнь порой подкидывает нас на волнах, и каждый день 
        приносит свои испытания и радости. Важно находить время 
        для того, чтобы наслаждаться моментами, чувствовать вкус жизни 
        и черпать силы в приятных моментах. На этой странице я хочу 
        поделиться с вами яркими фотографиями из своей жизни, чтобы 
        показать, как важно находить радость в каждом дне.
      </Message>
      <Styled.BlurFooter />
    </Styled.Container>
  );
};