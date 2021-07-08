import React from 'react';
import { create } from 'react-test-renderer';
import { shallow } from 'enzyme';
import { Text } from '..';
import { TitleContainer } from '../container';

describe('avatar 组件', () => {
  it('快照测试', () => {
    const node = create(<Text type="title">测试</Text>);
    expect(node).toMatchSnapshot();
  });

  it('子元素渲染验证', () => {
    const node = shallow(<Text />);
    expect(node.isEmptyRender()).toEqual(true);
  });

  it('type 参数切换验证', () => {
    const node = shallow(<Text type="title">测试</Text>);
    expect(node.find(TitleContainer).prop('children')).toEqual('测试');
  });

  it('type 非正确参数', () => {
    const node = shallow(<Text type="body">测试</Text>);
    expect(node.getElement().props).toEqual({ children: null });
  });
});
