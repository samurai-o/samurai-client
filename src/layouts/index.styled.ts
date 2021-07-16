import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
  & ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  & li {
    list-style: none;
  }
`;

export type LayoutContentProps = {
  height: number;
};

/** layout骨架 */
export const LayoutBase = styled.div`
  background: #f2f5f7;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const LayoutContent = styled.div<LayoutContentProps>`
  min-height: calc(100vh - ${(props) => props.height || 0}px);
  width: 100vw;
`;
