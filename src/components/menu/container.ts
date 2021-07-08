import styled from 'styled-components';
import { Overall } from '.';

export const MenuContainer = styled.div``;

export type MenuListStyleProps = {
  noEvent?: boolean;
  overall: Overall;
};

export const MenuList = styled.ul<MenuListStyleProps>`
  list-style: none;
  margin: unset;
  padding: unset;
  display: flex;
  flex-direction: ${({ overall }) =>
    overall === 'vertical' ? 'column' : 'row'};
`;

export type MenuItemStyleProps = {
  noEvent?: boolean;
  tag?: string | number;
};

export const MenuItem = styled.li<MenuItemStyleProps>`
  list-style: none;
  margin: unset;
  padding: 6px 12px;
  cursor: pointer;
  border-radius: 4px;
  overflow: hidden;
  margin: 0 4px;
  transition: all 250ms ease;
  &:hover {
    background: #e0dede47;
  }
  &:active {
    background: #ddd;
  }
`;
