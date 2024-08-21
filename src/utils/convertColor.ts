import type { ColorPickerProps, GetProp } from 'antd';

export type Color = GetProp<ColorPickerProps, 'value'>;

export const convertColorToString = (color: Color): string => {
  if (typeof color === 'string') {
    return color;
  } else if (Array.isArray(color)) {
    return color[0]?.color?.toString() || '#000000';
  } else if (typeof color === 'object' && 'toHexString' in color) {
    return color.toHexString();
  } else {
    return '#000000';
  }
};
