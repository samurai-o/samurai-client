import styled from 'styled-components';

export type LayoutContentProps = {
  height: number;
};

/** layout骨架 */
export const LayoutBase = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const LayoutContent = styled.div<LayoutContentProps>`
  min-height: calc(100vh - ${(props) => props.height || 0}px);
  width: 100vw;
`;
