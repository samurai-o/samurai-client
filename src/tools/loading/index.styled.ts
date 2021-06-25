import styled, { keyframes } from 'styled-components';

export type LoadingStyledProps = {
  loading?: boolean;
};

export type LoadingTextStyledProps = {
  isMessage: boolean; //是否存在需要展示的文本
};

export const keyframe = keyframes`
  40% {
      stroke-dasharray: 40, 20;   /* 间距改为1/4 */
  }
  100% {
      stroke-dasharray: 44, 25;   /* 间距恢复为1/2 */
      transform: rotate(720deg);
  }
`;

export const LoadingStyled = styled.div<LoadingStyledProps>`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  transition: all 0.3s ease 0s;
  background: #fff;
  opacity: ${(props) => (props.loading ? '1' : '0')};
  pointer-events: ${(props) => (!!props.loading ? 'all' : 'none')};
`;

export const LoadingContentStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  transition: all 0.3s ease 0s;
`;

export const LoadingTextStyled = styled.span<LoadingTextStyledProps>`
  display: inline-block;
  margin-top: ${(props) => (props.isMessage ? '4px' : '0')};
  width: ${(props) => (props.isMessage ? 'auto' : '0px')};
  opacity: ${(props) => (props.isMessage ? '1' : '0')};
  transition: all 0.3s ease 0s;
`;

export const LoadingSvgStyled = styled.svg`
  transition: all 0.3s ease 0s;
`;
export const LoadingCircleStyled = styled.circle`
  fill: none;
  stroke: rgb(72 113 255);
  stroke-width: 4;
  stroke-linecap: round;
  stroke-dasharray: 44, 44;
  transform-origin: center;
  animation: ${keyframe} 2.3s ease-out infinite;
`;
