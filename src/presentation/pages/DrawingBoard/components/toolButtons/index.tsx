import { useEffect, useState } from 'react';
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

  const styles = {
    color: '#4E5A82 ',
    bgColor: '#FFEDEB',
  };

  const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
    };

  useEffect(() => {
    document.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <Styled.ToolBtns>
      <Styled.ColorPicker value={color} onChange={handleColorChangeBrush} disabledAlpha>
        <Tooltip
          title={'Цвет кисти'}
          placement="bottom"
          color={styles.bgColor}
          overlayInnerStyle={{color: styles.color}}
          destroyTooltipOnHide
        >
          <Styled.BtnColorPicker $color={color} />
        </Tooltip>
      </Styled.ColorPicker>
      <Styled.ColorPicker value={colorBg} onChange={handleColorChangeBg} disabledAlpha>
        <Tooltip
          title={'Цвет фона'}
          placement="bottom"
          color={styles.bgColor}
          overlayInnerStyle={{color: styles.color}}
          destroyTooltipOnHide
        >
          <Styled.BtnColorPicker $color={colorBg} />
        </Tooltip>
      </Styled.ColorPicker>
      <Tooltip
          title={drawingStore.isErasing ? 'Рисовать' : 'Ластик'}
          placement="bottom"
          color={styles.bgColor}
          overlayInnerStyle={{color: styles.color}}
          destroyTooltipOnHide
        >
        <Styled.Button onClick={handleToggleEraser}>
          {drawingStore.isErasing ? <Styled.BrushIcon /> : <Styled.EraserIcon /> }
        </Styled.Button>
      </Tooltip>
        <Tooltip
          title={'Сохранить'}
          placement="bottom"
          color={styles.bgColor}
          overlayInnerStyle={{color: styles.color}}
          destroyTooltipOnHide
        >
        <Styled.Button onClick={handleTakeScreenshot}>
          <Styled.ExportIcon />
        </Styled.Button>
      </Tooltip>
        <Tooltip
          title={'Очистить'}
          placement="bottom"
          color={styles.bgColor}
          overlayInnerStyle={{color: styles.color}}
          destroyTooltipOnHide
        >
        <Styled.Button onClick={handleResetCanvas}>
          <Styled.ClearIcon />
        </Styled.Button>
      </Tooltip>
    </Styled.ToolBtns>
  );
});
