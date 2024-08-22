import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { ColorPicker, InputNumber } from 'antd';
import { drawingStore } from 'application/stores/drawingStore';
import { Color, convertColorToString } from 'utils/convertColor';
import { Styled } from './styles';

export const ToolButtons: React.FC = observer(() => {
  const [inputValue, setInputValue] = useState(1);
  const [color, setColor] = useState<Color>('#fffff');
  const [colorBg, setColorBg] = useState<Color>('#af3434');

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
  );
});
