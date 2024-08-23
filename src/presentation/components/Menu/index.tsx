import { Styled } from './styles.ts';

export const Menu = () => {
  return (
    <Styled.Container>
      <Styled.Link to={'/'}>
        <Styled.ExportIcon></Styled.ExportIcon>
      </Styled.Link>
      <Styled.Link to={'/about'}>
        <Styled.ExportIcon></Styled.ExportIcon>
      </Styled.Link>
      <Styled.Link to={'/educations'}>
        <Styled.ExportIcon></Styled.ExportIcon>
      </Styled.Link>
      <Styled.Link to={'/price'}>
        <Styled.ExportIcon></Styled.ExportIcon>
      </Styled.Link>
      <Styled.Link to={'/telegram'}>
        <Styled.ExportIcon></Styled.ExportIcon>
      </Styled.Link>
    </Styled.Container>
  );
};