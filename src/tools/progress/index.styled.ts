import styled from 'styled-components';

export const ProgressStyled = styled.progress`
  width: 100%;
  height: 5px;
  vertical-align: top;
  position: relative;
  top: 0;
  &::-webkit-progress-bar {
    background-color: #d7d7d7;
  }
  &::-webkit-progress-value {
    background-color: orange;
  }
`;
