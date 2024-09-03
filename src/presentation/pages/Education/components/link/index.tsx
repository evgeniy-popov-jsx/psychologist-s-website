import { Styled } from './styles.ts';
import { CrypticTextAnimation } from '../crypticText/index.tsx';

interface Props {
  props: {
    name: string,
    subName: string,
    date: string,
  }
}

export const Link: React.FC<Props> = ({ props })=> {
  const { name, subName, date } = props;
  return (
    <Styled.Link to={''}>
      <Styled.Span $type={'education'}>
        <CrypticTextAnimation fullText={name}/>
      </Styled.Span>
      <Styled.Span $type={'desc'}>
        <CrypticTextAnimation fullText={subName}/>
      </Styled.Span>
      <Styled.Line />
      <Styled.Span $type={'year'}>
        <CrypticTextAnimation fullText={date}/>
      </Styled.Span>
    </Styled.Link>
  );
};
