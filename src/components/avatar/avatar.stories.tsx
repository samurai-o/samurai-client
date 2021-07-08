import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Avatar, AvatarProps } from '.';

const MetaData: Meta = {
  title: 'BaseComponents/Avatar',
  component: Avatar,
};

export default MetaData;

const Template: Story<AvatarProps> = (args: AvatarProps) => (
  <Avatar {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  size: 'small',
  src: 'www.baidu.com',
};
