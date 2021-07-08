import React from 'react';
import { Size } from '../../common/interfaces';
import { ImageContainer, ImageDom } from './container';

export type ImageSize = Size;

export type ImageProps = {
  width?: number;
  type?: ImageSize;
  src?: string;
};

/**
 * 图片
 * @param props
 * @returns
 */
export function Image(props: ImageProps) {
  const { src, ..._props } = props;
  if (typeof src !== 'string') return null;
  return (
    <ImageContainer {..._props}>
      <ImageDom src={src} />
    </ImageContainer>
  );
}
