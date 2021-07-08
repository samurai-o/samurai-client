import React from 'react';
import { Size } from '../../common/interfaces';
import { Image } from '../image';
import { AvatarContainer } from './container';

export type AvatarSize = Size;

export type AvatarProps = {
  size?: AvatarSize;
  src?: string;
};

// TODO:头像组件
export function Avatar(props: AvatarProps) {
  const { size = 'middle', src = '' } = props;

  return (
    <AvatarContainer>
      <Image src={src} type={size} width={40} />
    </AvatarContainer>
  );
}
