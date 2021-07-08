import React from 'react';
import { ButtonContainer } from './container';

export type ButtonType = 'disabled' | 'text' | 'link' | 'primary' | 'default';

export type ButtonProps = {
  type?: ButtonType;
  children?: JSX.Element | string;
};

export type ButtonColor = {
  [key in ButtonType]: string;
};

// 按钮颜色
export const colors: ButtonColor = {
  disabled: '#fff',
  text: '#fff',
  link: '#fff',
  primary: '#3556E3',
  default: '#fff',
};

/**
 * 按钮
 * @param props
 * @returns
 */
export function Button(props: ButtonProps) {
  const { type = 'primary', children } = props;
  return <ButtonContainer color={type}>{children}</ButtonContainer>;
}
