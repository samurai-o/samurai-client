import React from 'react';
import { useQuery } from '@apollo/client';
import { CoreLocationProps } from '@/common/interfaces/core.interface';
import {
  SettingsNavigationStyled,
  SettingsStyled,
  SettingsUserHeaderStyled,
} from './index.styled';
import { queryOrganization } from '@/common/graphql';

export default function Settings(props: CoreLocationProps) {
  const { loading, error, data } = useQuery(queryOrganization);
  console.log(loading, error, data);
  return (
    <SettingsStyled>
      <SettingsUserHeaderStyled></SettingsUserHeaderStyled>
      <SettingsNavigationStyled>1</SettingsNavigationStyled>
      {props.children}
    </SettingsStyled>
  );
}
