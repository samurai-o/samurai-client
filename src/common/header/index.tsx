import React, { forwardRef, useEffect, useMemo, useState } from 'react';
import { HeaderContainer, NavigationContainer } from './container';
import { Menu, Link, Image, Dropdown, Text } from '@/components';
import { AdminBtn } from '../admin';
import avatar from '@/assets/defaultAvatar.jpeg';
import { authApi } from '@/common/apis';

export function Navigation() {
  return (
    <NavigationContainer>
      <Menu overall="horizontal">
        <Menu.Item>文档</Menu.Item>
        <Menu.Item>组件</Menu.Item>
      </Menu>
    </NavigationContainer>
  );
}

export type THeaderProps = {
  logo?: string;
  ref?: any;
  scrollHeight?: number;
};

export type HeaderContainerProps = {
  id: number;
};

export const Header = forwardRef((props: THeaderProps, ref: any) => {
  const [isScroll, setIsScroll] = useState(false);

  const { scrollHeight = 10 } = props;

  const headerColorChange = () => {
    if (window.pageYOffset > scrollHeight) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', headerColorChange);
    return () => {
      window.removeEventListener('scroll', headerColorChange);
    };
  }, []);

  // 应用logo
  const logo = useMemo(() => {
    if (typeof props.logo !== 'string' || !props.logo) return null;
    return (
      <Link href="http://www.baidu.com">
        <Image src={props.logo} type="small" width={135} />
      </Link>
    );
  }, [props.logo]);

  const onClick = async (key: string) => {
    console.log(key);
    if (key === 'loginout') {
      authApi.outlogin();
    }
  };

  return (
    <HeaderContainer ref={ref} isScroll={isScroll}>
      {logo}
      <Navigation />
      <Dropdown
        trigger="hover"
        menus={
          <Menu overall="vertical" onClick={onClick}>
            <Menu.Item tag="docs">
              <i
                className="iconfont iconpeople-network-full"
                style={{ marginRight: 5 }}
              ></i>
              <Text type="text" blod>
                组织
              </Text>
            </Menu.Item>
            <Menu.Item tag="loginout">
              <i className="iconfont icontuichu" style={{ marginRight: 5 }}></i>
              <Text type="text" blod>
                退出
              </Text>
            </Menu.Item>
          </Menu>
        }
      >
        <AdminBtn
          info={{
            name: '刘伟',
            account: 'lemonpaimc@163.com',
            avatar: avatar,
          }}
        />
      </Dropdown>
    </HeaderContainer>
  );
});