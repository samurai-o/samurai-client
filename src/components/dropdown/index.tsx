import React, { useCallback, useMemo, useState } from 'react';
import { isEmpty, isFunc } from '@frade-sam/samtools';
import { DropdownBoxContainer, DropdownContainer } from './container';

export type Trigger = 'click' | 'hover';

export type Placements = 'left' | 'right' | 'center';

export type DropdownProps = {
  trigger?: Trigger;
  placements?: Placements;
  menus?: JSX.Element;
  onClick?: (key: string | number) => void;
  children?: JSX.Element;
};

export function Dropdown(props: DropdownProps) {
  const [status, setStatus] = useState(false);
  const {
    trigger = 'click',
    placements = 'right',
    onClick = () => {},
    menus,
    children,
  } = props;

  const onExtensionClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (trigger === 'click') setStatus(!status);
    },
    [trigger, status],
  );

  const onExtensionMouseOver = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (trigger === 'hover') setStatus(true);
    },
    [trigger, status],
  );

  const onExtensionMouseLeave = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (trigger === 'hover') setStatus(false);
    },
    [trigger, status],
  );

  // 扩展children处理事件
  const extension = useMemo(() => {
    if (isEmpty(children)) return null;
    const {
      onClick: onChildClick,
      onMouseOver,
      onMouseLeave,
      ..._props
    } = children?.props;
    return React.cloneElement(children as JSX.Element, {
      ..._props,
      onClick: (e: any) => {
        // 鼠标点击
        if (isFunc(onChildClick)) onChildClick(e);
        if (trigger === 'click') setStatus(!status);
      },
      onMouseOver: (e: any) => {
        // 鼠标移入
        if (isFunc(onMouseOver)) onMouseOver(e);
        if (trigger === 'hover') {
          setStatus(true);
        }
      },
      onMouseLeave: (e: any) => {
        if (isFunc(onMouseLeave)) onMouseLeave(e);
        if (trigger === 'hover') setStatus(false);
      },
    });
  }, [trigger, status, children]);

  const extensionMenus = useMemo(() => {
    if (isEmpty(menus)) return null;
    const { onClick: onChildClick, ..._props } = menus?.props;
    return React.cloneElement(menus as JSX.Element, {
      ..._props,
      onClick: (key: string | number) => {
        if (isFunc(onChildClick)) onChildClick(key);
        if (isFunc(onClick)) onClick(key);
      },
    });
  }, [menus]);
  return (
    <DropdownContainer>
      {extension}
      <DropdownBoxContainer
        placements={placements}
        show={status}
        onMouseLeave={onExtensionMouseLeave}
        onMouseOver={onExtensionMouseOver}
      >
        {extensionMenus}
      </DropdownBoxContainer>
    </DropdownContainer>
  );
}
