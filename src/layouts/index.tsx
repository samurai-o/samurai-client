import React, { useEffect, useRef, useState } from 'react';
import { Header } from '@/common/header';
import logo from '@/assets/logo.png';
import { CoreLocationProps } from '@/common/interfaces/core.interface';
import { LayoutBase, LayoutContent } from './index.styled';

export default function Base(props: CoreLocationProps) {
  const header = useRef<HTMLElement>(null);
  console.log(props);
  const [style, setStyle] = useState({
    paddingTop: 0,
    minHeight: '100vh',
  });
  useEffect(() => {
    if (header.current) {
      setStyle({ ...style, paddingTop: header.current.clientHeight });
    }
  }, [header.current]);

  return (
    <LayoutBase style={style}>
      <Header logo={logo} ref={header} />
      <LayoutContent height={style.paddingTop}>{props.children}</LayoutContent>
    </LayoutBase>
  );
}
