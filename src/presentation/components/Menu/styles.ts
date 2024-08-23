import styled from 'styled-components';
import Export from 'presentation/pages/DrawingBoard/icons/export.svg?react';
import { Link as RLink} from 'react-router-dom';

const Container = styled.div`
  position: absolute;
  bottom: 13px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  background: white;
  padding: 9.5px;
  border-radius: 12.5px;
  z-index: 3;

  -webkit-box-shadow: 6px 5px 9px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 6px 5px 9px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 6px 5px 9px 0px rgba(0, 0, 0, 0.5);
`;

const ExportIcon = styled(Export)`
  width: 32px;
  height: 32px;
  fill: grey;
  cursor: pointer;
  padding: 2px;
  &:hover {
    fill: red;
  }
`;

const Link = styled(RLink)`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Styled = {
  Container,
  ExportIcon,
  Link
};