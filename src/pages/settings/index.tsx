import React from 'react';
import { useQuery } from '@apollo/client';
import { CoreLocationProps } from '@/common/interfaces/core.interface';
import {
  SettingsContentGroupStyled,
  SettingsContentStyled,
  SettingsNavigationStyled,
  SettingsStyled,
  SettingsUserHeaderStyled,
} from './index.styled';
import { queryOrganization } from '@/common/graphql';
import { SettingsNavs } from './settingsNavs';

export default function Settings(props: CoreLocationProps) {
  const { loading, error, data } = useQuery(queryOrganization);
  return (
    <SettingsStyled>
      <SettingsUserHeaderStyled>2</SettingsUserHeaderStyled>
      <SettingsContentGroupStyled>
        <SettingsNavigationStyled>
          <SettingsNavs title="设置">
            <SettingsNavs.Item>1</SettingsNavs.Item>
            <SettingsNavs.Item>1</SettingsNavs.Item>
          </SettingsNavs>
        </SettingsNavigationStyled>
        <SettingsContentStyled>{props.children}</SettingsContentStyled>
      </SettingsContentGroupStyled>
    </SettingsStyled>
  );
}
