import React from 'react';
import { LinkButton } from './container';

export type LinkType = 'button';

export type LinkProps = {
  children: JSX.Element;
  href?: string;
  type?: LinkType;
};

export function Link(props: LinkProps) {
  const { href, type = 'button' } = props;
  if (type === 'button') {
    return <LinkButton href={href}>{props.children}</LinkButton>;
  }
  return null;
}
