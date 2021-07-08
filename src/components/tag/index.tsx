import React, { useMemo } from 'react';
import { Text } from '../text';
import { TagContainer, TagContainerBackground } from './container';

export type TagProps = {
  children?: JSX.Element | string;
  color?: TagContainerBackground;
};
export function Tag(props: TagProps) {
  const { children, color } = props;
  const childs = useMemo(() => {
    if (typeof children === 'string')
      return (
        <Text type="text" color={color ? '#fff' : null}>
          {children}
        </Text>
      );
    return children;
  }, [children]);
  return <TagContainer background={color}>{childs}</TagContainer>;
}
