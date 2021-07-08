import styled from 'styled-components';

export type TextStyleContainer = {
  size?: number;
  blod?: boolean;
  color?: string;
};

export const TitleContainer = styled.h6`
  margin: unset;
`;

export const SubtitleContainer = styled.p<TextStyleContainer>`
  font-size: ${({ size }) => (typeof size === 'number' ? `${size}px` : '12px')};
  font-weight: ${({ blod }) => (!!blod ? '500' : 'unset')};
  color: ${(props) => (!!props.color ? props.color : 'inherit')};
  font-weight: 500;
  margin: unset;
  padding: unset;
`;

export const TextContainer = styled.span<TextStyleContainer>`
  font-size: ${({ size }) => `${size}px`};
  font-weight: ${({ blod }) => (!!blod ? '500' : 'unset')};
  color: ${(props) => (!!props.color ? props.color : 'inherit')};
  margin: unset;
  padding: unset;
`;
