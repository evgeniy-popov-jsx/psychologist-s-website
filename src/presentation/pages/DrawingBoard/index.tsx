import { observer } from 'mobx-react-lite';
import { useEffect, useRef } from 'react';
import { drawingStore } from 'application/stores/drawingStore';
import { Styled } from './styles';
import { ToolButtons } from './components/toolButtons';
import { ToolSizeButtons } from './components/toolSizeButtons';
import { Message } from 'presentation/components/Message';

export const DrawingBoard: React.FC = observer(() => {
  const drawingCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const backgroundCanvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (backgroundCanvasRef.current && drawingCanvasRef.current) {
      drawingStore.setCanvases(backgroundCanvasRef.current, drawingCanvasRef.current);
    }
  }, []);

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    drawingStore.startDrawing(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    drawingStore.draw(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLCanvasElement>) => {
    const x = e.touches[0].clientX - (drawingCanvasRef.current?.getBoundingClientRect().left ?? 0);
    const y = e.touches[0].clientY - (drawingCanvasRef.current?.getBoundingClientRect().top ?? 0);
    drawingStore.startDrawing(x, y);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    const x = e.touches[0].clientX - (drawingCanvasRef.current?.getBoundingClientRect().left ?? 0);
    const y = e.touches[0].clientY - (drawingCanvasRef.current?.getBoundingClientRect().top ?? 0);
    drawingStore.draw(x, y);
  };

  const handleFinishDrawing = () => {
    drawingStore.finishDrawing();
  };

  return (
    <Styled.Container>
      <Styled.Canvas 
        ref={backgroundCanvasRef} 
        style={{ zIndex: 0 }} 
      />
      <Styled.Canvas
        ref={drawingCanvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleFinishDrawing}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleFinishDrawing}
        style={{ zIndex: 1 }}
      />
      <ToolButtons />
      <ToolSizeButtons />
      <Message />
    </Styled.Container>
  );
});
