import { ColorPicker as ANTColorPicker } from 'antd';
import styled from 'styled-components';
import Eraser from '../../icons/eraser.svg?react';
import Export from '../../icons/export.svg?react';
import Brush from '../../icons/brush.svg?react';
import Clear from '../../icons/clear.svg?react';

const ToolBtns = styled.div`
  position: absolute;
  top: 21px;
  left: 21px;
  z-index: 1;
  display: flex;
  gap: 15px;
  align-items: center;
  cursor: none;
`;

const EraserIcon = styled(Eraser)`
  width: 32px;
  height: 32px;
  fill: var(--text-color);
  cursor: none;

  &:hover {
    fill: var(--accent-color);
  }
`;

const BrushIcon = styled(Brush)`
  width: 30px;
  height: 29px;
  fill: var(--text-color);
  cursor: none;

  &:hover path {
    fill: var(--accent-color);
  }
`;

const ExportIcon = styled(Export)`
  width: 32px;
  height: 32px;
  fill: var(--text-color);
  cursor: none;

  &:hover {
    fill: var(--accent-color);
  }
`;
const ClearIcon = styled(Clear)`
  width: 32px;
  height: 32px;
  cursor: none;
  
  path {
    fill: var(--text-color);
  }

  &:hover path{
    fill: var(--accent-color);
  }
`;

const Button = styled.button`
  width: 32px;
  height: 32px;
  font-size: 24px;
  color: var(--text-color);
  border: none;
  background: none;
  cursor: none;
`;

const ColorPicker = styled(ANTColorPicker)`
  cursor: none;
`;

const BtnColorPicker = styled.button.attrs<{ $color: string }>(props => ({
  style: {
    backgroundColor: props.$color,
  },
}))`
  width: 32px;
  height: 32px;
  border-radius: 6.5px;
  border: 1px solid var(--text-color);
  cursor: none;
`;

export const Styled = {
  ToolBtns,
  BtnColorPicker,
  ColorPicker,
  Button,
  EraserIcon,
  ExportIcon,
  BrushIcon,
  ClearIcon
};