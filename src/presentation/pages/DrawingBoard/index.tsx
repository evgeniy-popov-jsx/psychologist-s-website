import { observer } from 'mobx-react-lite';
import { Styled } from './styles';
import { useEffect, useRef, useState } from 'react';
import { drawingStore } from 'application/stores/drawingStore';
import { ColorPicker, InputNumber } from 'antd';
import { Color, convertColorToString } from 'utils/convertColor';

export const DrawingBoard: React.FC = observer(() => {
  const drawingCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const backgroundCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const [color, setColor] = useState<Color>('#fffff');
  const [colorBg, setColorBg] = useState<Color>('#af3434');
  const [inputValue, setInputValue] = useState(1);

  useEffect(() => {
    if (backgroundCanvasRef.current && drawingCanvasRef.current) {
      drawingStore.setCanvases(backgroundCanvasRef.current, drawingCanvasRef.current);
    }
  }, []);

  const handleColorChangeBrush = (newColor: Color) => {
    setColor(newColor);
    drawingStore.setBrushColor(convertColorToString(newColor));
  };

  const handleColorChangeBg = (newColor: Color) => {
    setColorBg(newColor);
    drawingStore.setBackgroundColor(convertColorToString(newColor));
  };

  const handleLineWidth = (value: number | null) => {
    if (value !== null) {
      setInputValue(value);
      drawingStore.setLineWidth(value);
    }
  };

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

  const handleToggleEraser = () => {
    drawingStore.toggleEraser();
  };

  const handleTakeScreenshot = () => {
    drawingStore.takeScreenshot();
  };

  const handleResetCanvas = () => {
    drawingStore.resetCanvas();
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
      <Styled.ToolBtn>
        <ColorPicker value={color} onChange={handleColorChangeBrush} disabledAlpha />
        <ColorPicker value={colorBg} onChange={handleColorChangeBg} disabledAlpha />
        <Styled.Button onClick={handleToggleEraser}>
          {drawingStore.isErasing ? 'Рисовать' : 'Ластик'}
        </Styled.Button>
        <Styled.Button onClick={handleTakeScreenshot}>Сделать скриншот</Styled.Button>
        <Styled.Button onClick={handleResetCanvas}>Очистить</Styled.Button>
        <InputNumber
          min={1}
          max={18}
          defaultValue={1}
          onChange={handleLineWidth}
          value={inputValue}
          step={1}
          controls={false}
          width={20}
        />
      </Styled.ToolBtn>
    </Styled.Container>
  );
});
