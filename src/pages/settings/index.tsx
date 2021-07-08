import React from 'react';
import { CoreLocationProps } from '@/common/interfaces/core.interface';
import { SettingsNavigationStyled, SettingsStyled } from './index.styled';

export default function Settings(props: CoreLocationProps) {
  return (
    <SettingsStyled>
      <SettingsNavigationStyled>1</SettingsNavigationStyled>
      {props.children}
    </SettingsStyled>
  );
}
