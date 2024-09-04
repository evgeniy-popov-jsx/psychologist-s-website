import { Message } from 'presentation/components/Message/index.tsx';
import { Image } from './components/Image/index.tsx';
import { Styled } from './styles.ts';

export const Photos = () => {
  const images = [
    {
      id: 1,
      url: 'src/assets/1.jpg',
    },
    {
      id: 2,
      url: 'src/assets/2.jpg',
    },
    {
      id: 3,
      url: 'src/assets/3.jpg',
    },
    {
      id: 4,
      url: 'src/assets/4.jpg',
    },
    {
      id: 5,
      url: 'src/assets/5.jpg',
    },
    {
      id: 6,
      url: 'src/assets/1.jpg',
    },
    {
      id: 7,
      url: 'src/assets/2.jpg',
    },
    {
      id: 8,
      url: 'src/assets/3.jpg',
    },
    {
      id: 9,
      url: 'src/assets/4.jpg',
    },
    {
      id: 10,
      url: 'src/assets/5.jpg',
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
      <Message>
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