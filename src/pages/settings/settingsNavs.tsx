import { isEmpty } from '@frade-sam/samtools';
import React, { useMemo } from 'react';
import {
  SettingsNavsItemStyled,
  SettingsNavsListStyled,
  SettingsNavsStyled,
  SettingsNavsTitleStyled,
} from './settingsNavs.styled';

function SettingsNavsItem(props: any) {
  return <SettingsNavsItemStyled>1</SettingsNavsItemStyled>;
}

export type SettingsNavsProps = {
  title: string;
  children: JSX.Element[] | JSX.Element;
};
export function SettingsNavs(props: SettingsNavsProps) {
  const nodes = useMemo(() => {
    if (isEmpty(props.children)) return null;
    return <SettingsNavsListStyled>{props.children}</SettingsNavsListStyled>;
  }, [props.children]);

  return (
    <SettingsNavsStyled>
      <SettingsNavsTitleStyled>{props.title}</SettingsNavsTitleStyled>
      {nodes}
    </SettingsNavsStyled>
  );
}

SettingsNavs.Item = SettingsNavsItem;
