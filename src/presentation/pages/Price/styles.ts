import styled from 'styled-components';

const Container = styled.div`
  max-width: 780px;
  padding: 100px 8px 0px 8px;
  margin: 0 auto;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  width: 100%;
  border-radius: 5px;
  padding: 10px 10px;
  color: var(--text-color);
  border: 1px solid var(--accent-color);
  cursor: pointer;
  transition: 400ms;
`;

const CardFirst = styled(Card)`
  grid-area: 1 / 1 / 2 / 2;
  transform: scale(0.9, 0.9);
  filter: blur(10px);
    &:hover {
    filter: blur(0px);
    transform: scale(1, 1);
  }
`;

const CardSecond = styled(Card)`
  grid-area: 2 / 1 / 3 / 2;
  transform: scale(0.9, 0.9);
  filter: blur(10px);

  &:hover {
    filter: blur(0px);
    transform: scale(1, 1);
  }
`;

const CardThird = styled(Card)`
  grid-area: 1 / 2 / 3 / 3;
  -webkit-font-smoothing: antialiased 
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  height: 690px;

  &:hover > ${Card}:not(:hover){
    filter: blur(10px);
    transform: scale(0.9, 0.9);
  }

`;

const Title = styled.h1`
  margin: 0;
  text-transform: uppercase;
  font-size: 20px;
  line-height: 26px;
`;

const SubTitle = styled.h2`
  font-weight: normal;
  font-size: 16px;
  margin: 0;
`;

const Description = styled.div`
  font-size: 14px;
  color: var(--accent-color)
`;

const Price = styled.div`
  font-size: 64px;
  text-align: end;
`;

const Image = styled.img`
  width: 100%;
  height: 240px;
`;

export const Styled = {
  Container,
  Cards,
  Card,
  CardFirst,
  CardSecond,
  CardThird,
  Title,
  SubTitle,
  Description,
  Price,
  Image,
};