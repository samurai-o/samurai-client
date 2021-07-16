import React, { useEffect, useRef, useState } from 'react';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
  ApolloLink,
  concat,
} from '@apollo/client';
import { Header } from '@/common/header';
import logo from '@/assets/logo.png';
import { authApi } from '@/common/apis';
import { CoreLocationProps } from '@/common/interfaces/core.interface';
import { GlobalStyled, LayoutBase, LayoutContent } from './index.styled';

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: authApi.authorization,
    },
  }));
  console.log(operation.getContext());
  return forward(operation);
});

const httplink = new HttpLink({ uri: 'http://localhost:3001/graphql' });

const client = new ApolloClient({
  connectToDevTools: true,
  link: concat(authMiddleware, httplink),
  cache: new InMemoryCache(),
});

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
    <React.Fragment>
      <GlobalStyled />
      <ApolloProvider client={client}>
        <LayoutBase style={style}>
          <Header logo={logo} ref={header} />
          <LayoutContent height={style.paddingTop}>
            {props.children}
          </LayoutContent>
        </LayoutBase>
      </ApolloProvider>
    </React.Fragment>
  );
}
