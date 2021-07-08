import React, { useMemo } from 'react';
import { isArray, isEmpty, isFunc } from '@frade-sam/samtools';
import { MenuContainer, MenuItem, MenuList } from './container';

// 布局方式
export type Overall = 'horizontal' | 'vertical';

export type MenuProps = {
  overall?: Overall;
  onClick?: (key: string) => void;
  children?: JSX.Element | JSX.Element[];
};

/**
 * 菜单数据配置
 * @returns
 */
export function Menu(props: MenuProps) {
  const { overall = 'vertical', children = [], onClick } = props;

  // 选项节点
  const MenuNodes = useMemo(() => {
    if (isEmpty(children)) return [];
    const childs: JSX.Element[] = !Array.isArray(children)
      ? [children]
      : children;
    return (
      <MenuList overall={overall}>
        {React.Children.map(childs, (child) => {
          if (child.type !== MenuItem) return null;
          const { onClick: onChildClick, tag, ..._props } = child.props;
          return React.cloneElement(child, {
            ..._props,
            onClick: () => {
              if (isFunc(onChildClick)) onChildClick(tag);
              if (typeof onClick === 'function') onClick(tag);
            },
          });
        })}
      </MenuList>
    );
  }, [children, overall]);

  return <MenuContainer>{MenuNodes}</MenuContainer>;
}

Menu.Item = MenuItem;
