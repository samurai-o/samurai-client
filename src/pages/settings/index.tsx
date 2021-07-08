import React from 'react';
import { CoreLocationProps } from '@/common/interfaces/core.interface';
import { SettingsStyled } from './index.styled';

export default function Settings(props: CoreLocationProps) {
  return <SettingsStyled>{props.children}</SettingsStyled>;
}
