import { observer } from 'mobx-react-lite';
import { Styled } from './styles';
import { useEffect, useRef } from 'react';
import { drawingStore } from 'application/stores/drawingStore';

export const DrawingBoard: React.FC = observer(() => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      drawingStore.setCanvas(canvasRef.current);
    }
  }, []);

  return (
    <Styled.Container>
      <Styled.Canvas
        ref={canvasRef}
        onMouseDown={(e) => drawingStore.startDrawing(e.nativeEvent.offsetX, e.nativeEvent.offsetY)}
        onMouseMove={(e) => drawingStore.draw(e.nativeEvent.offsetX, e.nativeEvent.offsetY)}
        onMouseUp={() => drawingStore.finishDrawing()}
        onTouchStart={(e) => drawingStore.startDrawing(
          e.touches[0].clientX - (canvasRef.current?.getBoundingClientRect().left ?? 0),
          e.touches[0].clientY - (canvasRef.current?.getBoundingClientRect().top ?? 0)
        )}
        onTouchMove={(e) => drawingStore.draw(
          e.touches[0].clientX - (canvasRef.current?.getBoundingClientRect().left ?? 0),
          e.touches[0].clientY - (canvasRef.current?.getBoundingClientRect().top ?? 0)
        )}
        onTouchEnd={() => drawingStore.finishDrawing()}
      />
      <Styled.Button onClick={() => drawingStore.takeScreenshot()}>Сделать скриншот</Styled.Button>
    </Styled.Container>
  );
});
