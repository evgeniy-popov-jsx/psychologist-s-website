import { Message } from 'presentation/components/Message/index.tsx';
import { Styled } from './styles.ts';

export const Price = () => {
  return (
    <Styled.Container>
      <Styled.Cards>
        <Styled.CardFirst>
          <Styled.Title>Пакет "Стабильность"</Styled.Title>
          <Styled.SubTitle>6 сессий для поддержания и укрепления психологического состояния</Styled.SubTitle>
          <Styled.Description>
            Этот пакет включает шесть встреч, в ходе которых мы будем систематически работать над вашими запросами. 
            Пакет "Стабильность" идеально подходит для тех, кто стремится сохранить и укрепить достигнутые результаты, 
            а также нуждается в постоянной поддержке на пути к внутреннему равновесию.
          </Styled.Description>
          <Styled.Price>16000 Р</Styled.Price>
        </Styled.CardFirst>
        <Styled.CardSecond>
          <Styled.Title>Пакет "Гармония"</Styled.Title>
          <Styled.SubTitle>10 сессий для глубокого анализа и трансформации</Styled.SubTitle>
          <Styled.Description>
            Пакет "Гармония" рассчитан на длительное взаимодействие и включает десять встреч. Этот пакет подойдет тем, 
            кто хочет глубже разобраться в своих проблемах и достичь устойчивых изменений в жизни. Мы будем работать над 
            глубокими вопросами, развивать ваше внутреннее понимание и создавать устойчивые изменения, которые помогут вам 
            достичь внутренней гармонии.
          </Styled.Description>
          <Styled.Price>32000 Р</Styled.Price>
        </Styled.CardSecond>
        <Styled.CardThird>
          <Styled.Title>Встреча по установлению контакта</Styled.Title>
          <Styled.SubTitle>Знакомство и первый шаг к пониманию</Styled.SubTitle>
          <Styled.Description>
            Первая встреча направлена на установление контакта и понимание ваших потребностей. В ходе этой встречи вы 
            сможете рассказать о своих проблемах и ожиданиях, а я, в свою очередь, помогу вам сформировать представление
            о возможных подходах к решению ваших запросов. Мы обсудим ваши цели и создадим план дальнейшего взаимодействия.
            Это первая и самая главная ступенька на пути к улучшению вашего эмоционального состояния.
          </Styled.Description>
          <Styled.Image src='src/assets/img.svg' />
          <Styled.Price>4000 Р</Styled.Price>
        </Styled.CardThird>
      </Styled.Cards>
      <Message>
        Здесь вы найдете информацию о стоимости моих услуг.
        Я предлагаю гибкий подход и доступные цены. Если у 
        вас есть вопросы, обращайтесь, я с радостью помогу!
      </Message>
    </Styled.Container>
  );
};