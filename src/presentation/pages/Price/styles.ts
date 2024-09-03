import styled from 'styled-components';

const Container = styled.div`
  max-width: 790px;
  margin: 0 auto;
  padding: 10px 100px;
  height: 100%;
`;
const Cards = styled.div`
  display: flex;
  flex: 1 1;
  height: 100%;
`;

const CardsBlock = styled.div`
  flex: 1;
  height: 100%;
`;

const CardFirst = styled.div`
  height: 100%;
  flex: 1;
  border: 1px solid black;
`;

export const Styled = {
  Container,
  Cards,
  CardsBlock,
  CardFirst
};