import { useState } from 'react';
import { Styled } from './styles';

type Props = {
  src: string;
  blurredSrc: string;
}

export const Image: React.FC<Props> = ({ src, blurredSrc }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <Styled.ListItem>
      <Styled.BlurredImage
        src={blurredSrc}
        alt="Blurred"
        $isLoaded={isLoaded}
      />
      <Styled.MainImage
        src={src}
        alt="Main"
        onLoad={handleImageLoad}
        $isLoaded={isLoaded}
      />
    </Styled.ListItem>
  );
};
