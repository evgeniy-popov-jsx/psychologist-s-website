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
        Эти фотографии отражают мою работу и подход к психологии. 
        Надеюсь, они помогут вам лучше понять мою практику и то, 
        что я могу предложить.
      </Message>
      <Styled.BlurFooter />
    </Styled.Container>
  );
};