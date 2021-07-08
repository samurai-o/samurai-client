import React from 'react';
import { create } from 'react-test-renderer';
import { shallow } from 'enzyme';
import { Menu } from '..';
import { MenuContainer, MenuList } from '../container';

describe('Image 组件', () => {
  it('快照测试', () => {
    const node = create(
      <Menu overall="horizontal">
        <Menu.Item>文档</Menu.Item>
        <Menu.Item>组件</Menu.Item>
      </Menu>,
    );
    expect(node).toMatchSnapshot();
  });
  it('child Empty', () => {
    const node = shallow(<Menu overall="horizontal"></Menu>);
    expect(node.find(MenuContainer).prop('children')).toEqual([]);
  });
  it('child not MenuItem', () => {
    const node = shallow(
      <Menu overall="horizontal">
        <div>1</div>
      </Menu>,
    );
    expect(node.find(MenuList).prop('children')).toEqual([]);
  });

  it('child remove MenuItem', () => {
    const node = shallow(
      <Menu overall="horizontal">
        <div>1</div>
        <Menu.Item>组件</Menu.Item>
      </Menu>,
    );
    expect(node.find(MenuList).prop('children').length).toEqual(1);
  });
});
