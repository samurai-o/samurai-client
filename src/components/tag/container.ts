import styled from 'styled-components';

const tagcontainerbackground: { [key in TagContainerBackground]: string } = {
  default: '#fff',
  red: '#e21253e0s',
  blue: 'blue',
};

export type TagContainerBackground = 'red' | 'blue' | 'default';

export type TagContainerProps = {
  background?: TagContainerBackground;
};
export const TagContainer = styled.span<TagContainerProps>`
  cursor: pointer;
  display: inline-flex;
  padding: 0px 6px;
  border-radius: 4px;
  border: 1px solid #ddd;
  background: ${(props) =>
    !props.background
      ? tagcontainerbackground['default']
      : tagcontainerbackground[props.background]};
`;
