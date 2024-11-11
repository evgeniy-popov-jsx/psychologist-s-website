import { useEffect, useState } from 'react';
import { Styled } from './styles.ts';
import { inquiries } from 'application/mock/inquiries.ts';

export const Main = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      setMouseX(e.clientX - viewportWidth / 2);
      setMouseY(e.clientY - viewportHeight / 2);
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      setMouseX(touch.clientX - viewportWidth / 2);
      setMouseY(touch.clientY - viewportHeight / 2);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [viewportWidth]);

  const renderTextWithBreaks = (text: string): JSX.Element[] => {
    return text.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  return (
    <Styled.Container $width={viewportWidth} $height={viewportHeight}>
      <Styled.PreviewText>
        <Styled.Text>
          Меня зовут Ирина Гречушенко я психолог-коснультант, и я работаю со
          всеми этими запросами.
        </Styled.Text>
        <Styled.Link to={'/draw'}>О чём думаешь ты?</Styled.Link>
      </Styled.PreviewText>
      <Styled.Card
        $rotate={-15}
        $mouseX={mouseX}
        $mouseY={mouseY}
        $top={10}
        $left={10}
        $width={300}
      >
        {renderTextWithBreaks(inquiries.card1)}
      </Styled.Card>
      <Styled.Card
        $rotate={-10}
        $mouseX={mouseX}
        $mouseY={mouseY}
        $top={25}
        $left={48}
        $width={300}
        $blur
      >
        {renderTextWithBreaks(inquiries.card2)}
      </Styled.Card>
      <Styled.Card
        $rotate={20}
        $mouseX={mouseX}
        $mouseY={mouseY}
        $top={15}
        $left={70}
        $width={300}
      >
        {renderTextWithBreaks(inquiries.card3)}
      </Styled.Card>
      <Styled.Card
        $rotate={-10}
        $mouseX={mouseX}
        $mouseY={mouseY}
        $top={70}
        $left={15}
        $width={300}
        $blur
      >
        {renderTextWithBreaks(inquiries.card4)}
      </Styled.Card>
      <Styled.Card
        $rotate={20}
        $mouseX={mouseX}
        $mouseY={mouseY}
        $top={82}
        $left={35}
        $width={300}
      >
        {renderTextWithBreaks(inquiries.card5)}
      </Styled.Card>
      <Styled.Card
        $rotate={20}
        $mouseX={mouseX}
        $mouseY={mouseY}
        $top={55}
        $left={68}
        $width={300}
      >
        {renderTextWithBreaks(inquiries.card6)}
      </Styled.Card>
    </Styled.Container>
  );
};
