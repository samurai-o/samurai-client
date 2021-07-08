import React from 'react';
import { create } from 'react-test-renderer';
import { shallow } from 'enzyme';
import { Dropdown } from '..';
import { Image } from '../../image';
import { Menu } from '../../menu';
import { AdminBtn } from '../../../common/modules/admin';
import { Text } from '../../text';
import { DropdownBoxContainer, DropdownContainer } from '../container';

describe('avatar 组件', () => {
  it('快照测试', () => {
    const node = create(
      <Dropdown
        trigger="hover"
        menus={
          <Menu>
            <Menu.Item>文档</Menu.Item>
            <Menu.Item>文档2</Menu.Item>
          </Menu>
        }
      >
        <div>1</div>
      </Dropdown>,
    );
    expect(node).toMatchSnapshot();
  });

  it('trigger', () => {
    const node = shallow(
      <Dropdown
        trigger="hover"
        menus={
          <Menu overall="vertical">
            <Menu.Item tag="docs">
              <Text type="text">文档</Text>
            </Menu.Item>
            <Menu.Item tag="num">
              <Text type="text">文档</Text>
            </Menu.Item>
          </Menu>
        }
      >
        <AdminBtn />
      </Dropdown>,
    );
    expect(node.children().length).toEqual(2);
    node.find(AdminBtn).simulate('click');
    expect(node.find(DropdownBoxContainer).prop('show')).toEqual(false);
    node.find(AdminBtn).simulate('mouseover');
    expect(node.find(DropdownBoxContainer).prop('show')).toEqual(true);
    node.find(AdminBtn).simulate('mouseleave');
    expect(node.find(DropdownBoxContainer).prop('show')).toEqual(false);
  });

  it('empty children', () => {
    const node = shallow(
      <Dropdown
        trigger="hover"
        menus={
          <Menu overall="vertical">
            <Menu.Item tag="docs">
              <Text type="text">文档</Text>
            </Menu.Item>
            <Menu.Item tag="num">
              <Text type="text">文档</Text>
            </Menu.Item>
          </Menu>
        }
      />,
    );
    expect(node.children().length).toEqual(1);
  });

  it('empty menus', () => {
    const node = shallow(
      <Dropdown trigger="hover">
        <AdminBtn />
      </Dropdown>,
    );
    expect(node.find(DropdownBoxContainer).children().isEmptyRender()).toEqual(
      true,
    );
  });

  it('children click', () => {
    const node = shallow(
      <Dropdown trigger="click">
        <AdminBtn />
      </Dropdown>,
    );
    expect(
      !!node.find(DropdownContainer).children().first().prop('onClick'),
    ).toEqual(true);
    node.find(DropdownContainer).children().first().simulate('click');
    expect(node.find(DropdownBoxContainer).prop('show')).toEqual(true);
  });

  it('children mouse', () => {
    const node = shallow(
      <Dropdown trigger="hover">
        <AdminBtn />
      </Dropdown>,
    );
    node.find(DropdownContainer).children().first().simulate('mouseover');
    expect(node.find(DropdownBoxContainer).prop('show')).toEqual(true);
    node.find(DropdownContainer).children().first().simulate('mouseleave');
    expect(node.find(DropdownBoxContainer).prop('show')).toEqual(false);
  });
});
