import { observer } from 'mobx-react-lite';
import { useEffect, useRef, useState } from 'react';
import { drawingStore } from 'application/stores/drawingStore';
import { Styled } from './styles';
import { ToolButtons } from './components/toolButtons';
import { ToolSizeButtons } from './components/toolSizeButtons';
import { Message } from 'presentation/components/Message';
import { CustomCursor } from './components/cursor';

export const DrawingBoard: React.FC = observer(() => {
  const drawingCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const backgroundCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', updateWindowSize);

    return () => {
      window.removeEventListener('resize', updateWindowSize);
    };
  }, []);

  useEffect(() => {
    if (backgroundCanvasRef.current && drawingCanvasRef.current) {
      drawingStore.setCanvases(backgroundCanvasRef.current, drawingCanvasRef.current);
    }
  }, []);

  const handlePointerDown = (e: PointerEvent) => {
    e.preventDefault();
    const x = e.pageX - (drawingCanvasRef.current?.getBoundingClientRect().left ?? 0);
    const y = e.pageY - (drawingCanvasRef.current?.getBoundingClientRect().top ?? 0);
    drawingStore.startDrawing(x, y);
  };

  const handlePointerMove = (e: PointerEvent) => {
    if (drawingStore.isDrawing) {
      const x = e.pageX - (drawingCanvasRef.current?.getBoundingClientRect().left ?? 0);
      const y = e.pageY - (drawingCanvasRef.current?.getBoundingClientRect().top ?? 0);
      drawingStore.draw(x, y);
    }
  };

  const handlePointerUp = () => {
    drawingStore.finishDrawing();
  };

  useEffect(() => {
    const canvas = drawingCanvasRef.current;
    if (canvas) {
      canvas.addEventListener('pointerdown', handlePointerDown);
      canvas.addEventListener('pointermove', handlePointerMove);
      canvas.addEventListener('pointerup', handlePointerUp);
      canvas.addEventListener('pointerleave', handlePointerUp);
      canvas.addEventListener('touchstart', (e) => e.preventDefault(), { passive: false });
      canvas.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false });

      return () => {
        canvas.removeEventListener('pointerdown', handlePointerDown);
        canvas.removeEventListener('pointermove', handlePointerMove);
        canvas.removeEventListener('pointerup', handlePointerUp);
        canvas.removeEventListener('pointerleave', handlePointerUp);
        canvas.removeEventListener('touchstart', (e) => e.preventDefault());
        canvas.removeEventListener('touchmove', (e) => e.preventDefault());
      };
    }
  }, []);

  return (
    <Styled.Container $width={windowSize.width} $height={windowSize.height} >
      <Styled.Canvas ref={backgroundCanvasRef} style={{ zIndex: 0 }} />
      <Styled.Canvas ref={drawingCanvasRef} style={{ zIndex: 1 }} />
      <ToolButtons />
      <ToolSizeButtons />
      <Message id={'about'}>Привет! Я ваш психолог.</Message>
      <CustomCursor />
    </Styled.Container>
  );
});
