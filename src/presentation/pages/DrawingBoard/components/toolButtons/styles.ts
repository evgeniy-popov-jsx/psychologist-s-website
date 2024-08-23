import { ColorPicker as ANTColorPicker } from 'antd';
import styled from 'styled-components';
import Eraser from '../../icons/eraser.svg?react';
import Export from '../../icons/export.svg?react';
import Brush from '../../icons/brush.svg?react';

const ToolBtns = styled.div`
  position: absolute;
  top: 21px;
  left: 21px;
  z-index: 1;
  display: flex;
  gap: 15px;
  align-items: center;
`;

const EraserIcon = styled(Eraser)`
  width: 32px;
  height: 32px;
  fill: white;
  cursor: pointer;

  &:hover {
    fill: red;
  }
`;

const BrushIcon = styled(Brush)`
  width: 32px;
  height: 32px;
  fill: white;
  cursor: pointer;

  &:hover {
    fill: red;
  }
`;

const ExportIcon = styled(Export)`
  width: 32px;
  height: 32px;
  fill: white;
  cursor: pointer;

  &:hover {
    fill: red;
  }
`;

const Button = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  background: none;
`;

const ColorPicker = styled(ANTColorPicker)`
`;

const BtnColorPicker = styled.button.attrs<{ $color: string }>(props => ({
  style: {
    backgroundColor: props.$color,
  },
}))`
  width: 32px;
  height: 32px;
  border-radius: 6.5px;
  border: 1px solid #ededed;
  cursor: pointer;
`;

export const Styled = {
  ToolBtns,
  BtnColorPicker,
  ColorPicker,
  Button,
  EraserIcon,
  ExportIcon,
  BrushIcon
};