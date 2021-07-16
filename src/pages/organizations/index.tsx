import React from 'react';
import {
  OrganizationAddButtonStyled,
  OrganizationHeaderStyled,
  OrganizationHeaderTitleStyled,
  OrganizationStyled,
} from './index.styled';

export default function Organizations() {
  return (
    <OrganizationStyled>
      {/** 组织信息头部 */}
      <OrganizationHeaderStyled>
        <OrganizationHeaderTitleStyled>组织</OrganizationHeaderTitleStyled>
        <OrganizationAddButtonStyled>新增组织</OrganizationAddButtonStyled>
      </OrganizationHeaderStyled>
    </OrganizationStyled>
  );
}
