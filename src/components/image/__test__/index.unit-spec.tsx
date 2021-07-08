import React from 'react';
import { create } from 'react-test-renderer';
import { shallow } from 'enzyme';
import { Image } from '..';
import { ImageContainer, ImageDom } from '../container';

describe('Image 组件', () => {
  it('快照测试', () => {
    const node = create(
      <Image width={40} type="middle" src="http://www.baidu.coms" />,
    );
    expect(node).toMatchSnapshot();
  });

  it('props属性检验', () => {
    const node = shallow(
      <Image width={40} type="middle" src="http://www.baidu.coms" />,
    );
    expect(node.find(ImageContainer).prop('type')).toEqual('middle');
    expect(node.find(ImageContainer).prop('width')).toEqual(40);
    expect(node.find(ImageDom).prop('src')).toEqual('http://www.baidu.coms');
  });

  it('无链接地址返回渲染', () => {
    const node = shallow(<Image width={40} type="middle" />);
    expect(node.isEmptyRender()).toEqual(true);
  });
});
