import styled from 'styled-components';

export const HeaderContainer = styled.div<any>`
  position: fixed;
  top: 0;
  padding: 8px;
  width: 100vw;
  box-sizing: border-box;
  display: flex;
  border-radius: 10px;
  color: #000;
  flex-direction: row;
  align-items: center;
  transition: all 500ms ease 0s;
  box-shadow: ${({ isScroll }) =>
    !isScroll
      ? 'rgb(0 0 0 / 30%) 6px 0px 16px -8px, rgb(0 0 0 / 12%) 9px 0px 28px 0px'
      : 'none'};
  background-color: ${({ isScroll }) => (!isScroll ? '#fff' : 'transparent')};
`;

export const NavigationContainer = styled.div`
  flex: 1;
`;
