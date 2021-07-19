import { Button } from '@/components';
import React from 'react';
import {
  OrganizationAddButtonStyled,
  OrganizationHeaderStyled,
  OrganizationHeaderTitleStyled,
  OrganizationListStyled,
  OrganizationStyled,
} from './index.styled';

export default function Organizations() {
  return (
    <OrganizationStyled>
      {/** 组织信息头部 */}
      <OrganizationHeaderStyled>
        <OrganizationHeaderTitleStyled>组织</OrganizationHeaderTitleStyled>
        <Button>新增组织</Button>
      </OrganizationHeaderStyled>
      {/** 组织列表 */}
      <OrganizationListStyled>1</OrganizationListStyled>
    </OrganizationStyled>
  );
}
