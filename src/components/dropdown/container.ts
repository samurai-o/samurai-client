import styled from 'styled-components';
import { Placements } from '.';

export const DropdownContainer = styled.div`
  position: relative;
`;

export type DropdownBoxStyleProps = {
  show?: boolean;
  placements: Placements;
};
export const DropdownBoxContainer = styled.div<DropdownBoxStyleProps>`
  min-width: 100px;
  position: absolute;
  top: calc(100% + 2px);
  padding-top: 4px;
  padding-bottom: 4px;
  background: #fff;
  left: ${({ placements }) =>
    placements === 'left'
      ? '0px'
      : placements === 'center'
      ? 'calc(50% - 4px)'
      : 'unset'};
  right: ${({ placements }) => (placements === 'right' ? '0px' : 'unset')};
  transition: opacity 250ms ease, transform 250ms ease;
  box-shadow: 0px 4px 8px rgb(0 0 0 / 10%);
  backface-visibility: hidden;
  border-radius: 4px;
  border: 1px solid #d0d7de;
  pointer-events: ${({ show }) => (!!show ? 'all' : 'none')};
  opacity: ${({ show }) => Number(!!show)};
  transform: ${({ show }) =>
    !!show
      ? 'translate3d(0, 0, 0)'
      : 'translate3d(0, 32px, 0) rotateX(-16deg) rotateY(14deg)'};
  &::after {
    position: absolute;
    bottom: 100%;
    left: ${({ placements }) =>
      placements === 'left'
        ? '8px'
        : placements === 'center'
        ? 'calc(50% - 4px)'
        : 'unset'};
    right: ${({ placements }) => (placements === 'right' ? '8px' : 'unset')};
    content: '';
    transform: translateY(4px) rotate(45deg);
    width: 8px;
    height: 8px;
    border: 1px solid #d0d7de;
    border-right: none;
    border-bottom: none;
    background-color: #fff;
  }
`;
