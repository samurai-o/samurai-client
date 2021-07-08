import React, { useEffect, useRef, useState } from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Header } from '@/common/header';
import logo from '@/assets/logo.png';
import { CoreLocationProps } from '@/common/interfaces/core.interface';
import { LayoutBase, LayoutContent } from './index.styled';

const client = new ApolloClient({ uri: '', cache: new InMemoryCache() });

export default function Base(props: CoreLocationProps) {
  const header = useRef<HTMLElement>(null);
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
    <ApolloProvider client={client}>
      <LayoutBase style={style}>
        <Header logo={logo} ref={header} />
        <LayoutContent height={style.paddingTop}>
          {props.children}
        </LayoutContent>
      </LayoutBase>
    </ApolloProvider>
  );
}
