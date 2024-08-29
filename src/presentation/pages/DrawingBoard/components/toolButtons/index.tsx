import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { drawingStore } from 'application/stores/drawingStore';
import { Color, convertColorToString } from 'utils/convertColor';
import { Styled } from './styles';
import { Tooltip } from 'antd';

export const ToolButtons: React.FC = observer(() => {
  const [color, setColor] = useState<string>('#FFEDEB');
  const [colorBg, setColorBg] = useState<string>('#4E5A82');

  const handleColorChangeBrush = (newColor: Color) => {
    setColor(convertColorToString(newColor));
    drawingStore.setBrushColor(convertColorToString(newColor));
  };

  const handleColorChangeBg = (newColor: Color) => {
    setColorBg(convertColorToString(newColor));
    drawingStore.setBackgroundColor(convertColorToString(newColor));
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
    <Styled.ToolBtns>
      <Styled.ColorPicker value={color} onChange={handleColorChangeBrush} disabledAlpha>
        <Tooltip placement="bottom" title={'Цвет кисти'}>
          <Styled.BtnColorPicker $color={color} />
        </Tooltip>
      </Styled.ColorPicker>
      <Styled.ColorPicker value={colorBg} onChange={handleColorChangeBg} disabledAlpha>
        <Tooltip placement="bottom" title={'Цвет фона'}>
          <Styled.BtnColorPicker $color={colorBg} />
        </Tooltip>
      </Styled.ColorPicker>
      <Tooltip placement="bottom" title={drawingStore.isErasing ? 'Рисовать' : 'Ластик'}>
        <Styled.Button onClick={handleToggleEraser}>
          {drawingStore.isErasing ? <Styled.BrushIcon /> : <Styled.EraserIcon /> }
        </Styled.Button>
      </Tooltip>
      <Tooltip placement="bottom" title='Сохранить'>
        <Styled.Button onClick={handleTakeScreenshot}>
          <Styled.ExportIcon />
        </Styled.Button>
      </Tooltip>
      <Tooltip placement="bottom" title='Очистить'>
        <Styled.Button onClick={handleResetCanvas}>
          <Styled.EraserIcon />
        </Styled.Button>
      </Tooltip>
    </Styled.ToolBtns>
  );
});
