import styled from 'styled-components';
import { ButtonType, colors } from '.';

export type ButtonStyledContainer = {
  color: ButtonType;
};

export const ButtonContainer = styled.button<ButtonStyledContainer>`
  padding: 4px 10px;
  border-radius: 4px;
  border: transparent;
  outline: none;
  cursor: pointer;
  color: ${({ color }) => (color !== 'text' ? '#fff' : '#000')};
  background: ${({ color }) => colors[color]};
`;
