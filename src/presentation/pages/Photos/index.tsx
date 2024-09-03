import { Message } from 'presentation/components/Message/index.tsx';
import { Image } from './components/Image/index.tsx';
import { Styled } from './styles.ts';

export const Photos = () => {

  const createImg = () => {
    const images = [];
    for (let i = 0; i < 16; i++) {
      images.push(
        <Image 
          key={i} 
          src='src/assets/photo.webp' 
          blurredSrc='src/assets/photoBlur.webp'
        />
      );
    }
    return images;
  };

  return (
    <Styled.Container>
      <Styled.Ul>
        {createImg()}
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