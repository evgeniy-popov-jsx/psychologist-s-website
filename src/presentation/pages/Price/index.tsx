  import { Message } from 'presentation/components/Message';
import styled from 'styled-components';

  const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 900px; 
    padding: 60px 10px 0 10px;
    border-radius: 10px;
  `;

  const CardsFlexBox = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 50%;
  `;

  const Card1 = styled.div`
    border: 1px solid var(--accent-color);
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
    margin-right: 20px;
    flex-grow: 1;
  `;
  const Card2 = styled.div`
    border: 1px solid var(--accent-color);
    padding: 20px;
    border-radius: 10px;
    margin-right: 20px;
    flex-grow: 1;
  `;
  const Card3 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid var(--accent-color);
    padding: 20px;
    border-radius: 10px;
    flex-grow: 1;
  `;

  const CardTitle = styled.h2`
    margin: 0;
    color: var(--text-color);
    font-size: 1.2rem;
    margin-bottom: 20px;
  `;

  const CardSubTitle = styled.h2`
    margin: 0;
    font-weight: 300;
    color: var(--text-color);
    font-size: 1.2rem;
    width: 300px;
    margin-bottom: 5px;
  `;

  const CardText = styled.p`
    font-size: 1rem;
    max-width: 350px;
    line-height: 1.2;
    margin-bottom: 20px;
    color: var(--accent-color);
  `;
  const Content = styled.div``;

  const PriceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
  `;

  const Image = styled.img`
    width: 100%;
    height: 300px;
  `;

  const OldPrice = styled.span`
    font-size: 1.5rem;
    color: var(--accent-color);
    text-decoration: line-through;
  `;

  const NewPrice = styled.span`
    font-weight: bold;
    font-size: 2rem;
    color: var(--text-color);
  `;

  const Info = styled.div`
    margin-left: 140px;
    font-size: 0.8rem;
    text-align: end;
    color: var(--accent-color);
  `;

  export const Price = () => (
    <CardsContainer>
      <CardsFlexBox>
        <Card1>
          <CardTitle>ПАКЕТ «СТАБИЛЬНОСТЬ»</CardTitle>
          <CardSubTitle>4 сессии для поддержания и укрепления психологического состояния.</CardSubTitle>
          <CardText>
            Этот пакет включает четыре встречи, в ходе которых мы будем систематически работать над вашим состоянием.
            Пакет «СТАБИЛЬНОСТЬ» создан для того, чтобы вы смогли закрепить достигнутый результат, выработать устойчивость и вернуться на путь к внутреннему равновесию.
          </CardText>
          <PriceContainer>
            <OldPrice>16000 ₽</OldPrice>
            <NewPrice>14000 ₽</NewPrice>
          </PriceContainer>
        </Card1>
        <Card2>
          <CardTitle>ПАКЕТ «ГАРМОНИЯ»</CardTitle>
          <CardSubTitle>10 сессий для глубокого анализа и трансформации.</CardSubTitle>
          <CardText>
            Пакет «Гармония» включает 10 встреч, в ходе которых мы будем глубоко анализировать ваше состояние,
            исследовать причины ваших трудностей и работать над их устранением.
            Эти сессии помогут вам найти новые пути для развития и достижения внутренней гармонии.
          </CardText>
          <PriceContainer>
            <OldPrice>40000 ₽</OldPrice>
            <NewPrice>32000 ₽</NewPrice>
          </PriceContainer>
        </Card2>
      </CardsFlexBox>
      <CardsFlexBox>
        <Card3>
          <Content>
            <CardTitle>ИНДИВИДУАЛЬНАЯ КОНСУЛЬТАЦИЯ</CardTitle>
            <CardSubTitle>Знакомство и первый шаг к пониманию.</CardSubTitle>
            <CardText>
              Первая встреча направлена на установление контакта и первичное исследование запроса.
              В ходе консультации мы обсудим основные темы, которые волнуют вас, и определим возможные пути работы.
              Если вы готовы начать работу над собой, это идеальный первый шаг.
              Консультация также может включать рекомендации по пути и укреплению вашего эмоционального состояния.
            </CardText>
            <Image src={'src/assets/image.svg'}></Image>
          </Content>
          <PriceContainer>
            <NewPrice>4000 ₽</NewPrice>
            <Info>* Для всех, кто приходит в терапию, стоимость фиксируется на полгода с момента первой встречи.</Info>
          </PriceContainer>
        </Card3>
      </CardsFlexBox>
      <Message>
        Я понимаю, что выбор психолога — это важное решение. Поэтому хочу, чтобы у вас была 
        полная информация о моих услугах и ценах. В зависимости от типа консультации и длительности, 
        стоимость может варьироваться. Я предлагаю гибкий подход и стремлюсь сделать свои услуги 
        доступными для всех. Если у вас возникли вопросы или вам нужна помощь в выборе, 
        не стесняйтесь обращаться ко мне. Я здесь, чтобы помочь вам на пути к лучшему
        пониманию себя! Присоединяйся к телеграм!
      </Message>
    </CardsContainer>
  );
