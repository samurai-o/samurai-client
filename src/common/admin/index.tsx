import React from 'react';
import { Avatar, Text, Button } from '@/components';
import { AdminBtnContainer, AdminBtnTextContainer } from './container';

export type AdminBtnProps = {
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onMouseOver?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onMouseLeave?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  info?: AdminInfo;
  action?: AdminAction;
};

export type AdminAction = {
  login: () => Promise<boolean>;
  register: () => Promise<boolean>;
};

export type AdminInfo = {
  name: string;
  account: string;
  avatar: string;
};

/**
 * 用户模块
 * @param props
 * @returns
 */
export function AdminBtn(props: AdminBtnProps) {
  const { onClick, onMouseOver, onMouseLeave, info, action } = props;
  if (!info) {
    return (
      <AdminBtnContainer>
        <Button type="text">
          <Text type="subtitle2">登录</Text>
        </Button>
        <Button>
          <Text type="subtitle2">注册</Text>
        </Button>
      </AdminBtnContainer>
    );
  }
  const { name, account, avatar } = info;
  return (
    <AdminBtnContainer
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      <AdminBtnTextContainer>
        <Text type="subtitle2">{name}</Text>
        <Text type="text">{account}</Text>
      </AdminBtnTextContainer>
      <Avatar src={avatar} />
    </AdminBtnContainer>
  );
}
