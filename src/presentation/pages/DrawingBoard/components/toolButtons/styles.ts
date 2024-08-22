import { ColorPicker as ANTColorPicker } from 'antd';
import styled from 'styled-components';

const ToolBtns = styled.div`
  position: absolute;
  top: 21px;
  left: 21px;
  z-index: 1;
  display: flex;
  gap: 15px;
  align-items: center;
`;

const Button = styled.button`
  width: 32px;
  height: 32px;
  border: none;
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
};