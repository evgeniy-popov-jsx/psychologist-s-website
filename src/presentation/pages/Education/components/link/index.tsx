import { Styled } from './styles.ts';
import { CrypticTextAnimation } from '../crypticText/index.tsx';

export const Link: React.FC = ( )=> {

  return (
    <Styled.Link to={''}>
      <Styled.Span $type={'education'}><CrypticTextAnimation fullText='ОКПП: теория и практика'/></Styled.Span>
      <Styled.Span $type={'desc'}><CrypticTextAnimation fullText='Д.В. Ковпак - 20 часов'/></Styled.Span>
      <Styled.Line />
      <Styled.Span $type={'year'}><CrypticTextAnimation fullText='2024'/></Styled.Span>
    </Styled.Link>
  );
};
