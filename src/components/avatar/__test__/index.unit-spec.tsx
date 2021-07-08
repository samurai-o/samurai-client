import React from 'react';
import { create } from 'react-test-renderer';
import { shallow } from 'enzyme';
import { Avatar } from '..';
import { Image } from '../../image';

describe('avatar 组件', () => {
  it('快照测试', () => {
    const node = create(<Avatar size="middle" src="http://www.baidu.coms" />);
    expect(node).toMatchSnapshot();
  });

  it('props', () => {
    const node = shallow(<Avatar size="middle" src="http://www.baidu.coms" />);
    expect(node.find(Image).prop('src')).toEqual('http://www.baidu.coms');
    expect(node.find(Image).prop('type')).toEqual('middle');
  });
});
