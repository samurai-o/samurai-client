import styled from 'styled-components';

export const ImageContainer = styled.div<any>`
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : '100px')};
  border-radius: 8px;
  overflow: hidden;
`;

export const ImageDom = styled.img`
  width: inherit;
  vertical-align: middle;
`;
