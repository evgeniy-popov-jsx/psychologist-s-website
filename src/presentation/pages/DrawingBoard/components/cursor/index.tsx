import EraserIcon from '../../icons/eraserBrush.svg?react';
import BrushIcon from '../../icons/brush.svg?react';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { drawingStore } from 'application/stores/drawingStore';
import { Styled } from './styles';

export const CustomCursor: React.FC = observer(() => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handlePointerMove = (e: PointerEvent) => {
    setPosition({ x: e.pageX, y: e.pageY });
  };

  useEffect(() => {
    document.addEventListener('pointermove', handlePointerMove);

    return () => {
      document.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return (
    <>
      <Styled.GlobalStyle />
      <Styled.CursorCircle
        $isErasing={drawingStore.isErasing}
        $lineWidth={drawingStore.currentLineWidth}
        $brushColor={drawingStore.brushColor}
        $left={position.x}
        $top={position.y}
      >
        {drawingStore.isErasing ? <EraserIcon /> : <BrushIcon />}
      </Styled.CursorCircle>
    </>
  );
});
