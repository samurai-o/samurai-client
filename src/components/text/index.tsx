import React, { useMemo } from 'react';
import { SubtitleContainer, TextContainer, TitleContainer } from './container';

// 文本类型
export type TextType = 'title' | 'body' | 'subtitle1' | 'subtitle2' | 'text';

export type TextProps = {
  type?: TextType;
  blod?: boolean;
  children?: any;
  color?: string;
};

/**
 * 文本展示组件
 * @param props {TextProps}
 * @returns
 */
export function Text(props: TextProps) {
  const { type = 'title', color, blod, children } = props;

  if (!children) return null;

  const render = (type: TextType, children?: any) => {
    if (type === 'title') {
      return <TitleContainer>{children}</TitleContainer>;
    } else if (type === 'subtitle1') {
      return <SubtitleContainer size={16}>{children}</SubtitleContainer>;
    } else if (type === 'subtitle2') {
      return <SubtitleContainer size={14}>{children}</SubtitleContainer>;
    } else if (type === 'text') {
      return (
        <TextContainer color={color} size={12} blod={!!blod}>
          {children}
        </TextContainer>
      );
    }
    return null;
  };

  return <React.Fragment>{render(type, children)}</React.Fragment>;
}
