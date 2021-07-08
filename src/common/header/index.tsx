import React, { forwardRef, useEffect, useMemo, useState } from 'react';
import { HeaderContainer, NavigationContainer } from './container';
import { Menu, Link, Image, Dropdown, Text } from '@/components';
import avatar from '@/assets/defaultAvatar.jpeg';
import { authApi } from '@/common/apis';
import { history } from 'umi';
import { AdminBtn } from '../admin';
import { isFunc } from '@frade-sam/samtools';

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

/** 操作可以 */
export type MenuItem = 'loginout' | 'organizations';

export const Header = forwardRef((props: THeaderProps, ref: any) => {
  const [isScroll, setIsScroll] = useState(false);
  /** 用户选择项 */
  const handlers = new Map<MenuItem, any>([
    ['loginout', authApi.outlogin],
    ['organizations', () => history.push('/settings/organizations')],
  ]);

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
        <Image src={props.logo} type="small" width={80} />
      </Link>
    );
  }, [props.logo]);

  const onClick = async (key: MenuItem) => {
    const handler = handlers.get(key);
    if (isFunc(handler)) handler();
  };

  return (
    <HeaderContainer ref={ref} isScroll={isScroll}>
      {logo}
      <Navigation />
      <Dropdown
        trigger="hover"
        menus={
          <Menu<MenuItem> overall="vertical" onClick={onClick}>
            <Menu.Item tag="organizations">
              {/* <i
                className="iconfont iconpeople-network-full"
                style={{ marginRight: 5 }}
              ></i> */}
              <Text type="text" color="#505050" blod>
                组织
              </Text>
            </Menu.Item>
            <Menu.Item tag="loginout">
              {/* <i className="iconfont icontuichu" style={{ marginRight: 5 }}></i> */}
              <Text type="text" color="#505050" blod>
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
