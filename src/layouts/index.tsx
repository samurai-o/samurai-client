import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Header } from '@/common/header';
import logo from '@/assets/logtext.png';

const LayoutBase = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
`;

export type BaseProps = {
  children?: JSX.Element | JSX.Element[];
  [key: string]: any;
};

export default function Base(props: BaseProps) {
  const header = useRef<HTMLElement>(null);
  const [style, setStyle] = useState({
    paddingTop: 0,
    minHeight: '100vh',
  });
  useEffect(() => {
    if (header.current) {
      setStyle({
        paddingTop: header.current.clientHeight,
        minHeight: `calc(100vh - ${header.current.clientHeight}px)`,
      });
    }
  }, [header.current]);

  return (
    <LayoutBase style={style}>
      <Header logo={logo} ref={header} />
      <div>{props.children}</div>
    </LayoutBase>
  );
}
