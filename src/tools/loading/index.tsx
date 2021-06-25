import React from 'react';
import { isFunc } from '@frade-sam/samtools';
import {
  LoadingStyled,
  LoadingSvgStyled,
  LoadingCircleStyled,
  LoadingContentStyled,
  LoadingTextStyled,
} from './index.styled';

export type LoadingState = {
  loading: boolean; // loading状态
  open: boolean; // dom打开状态
  content?: string; // 提示文字
};

export type LoadingProps = {
  loading?: boolean;
};

export default class Loading extends React.Component<
  LoadingProps,
  LoadingState
> {
  constructor(props: LoadingProps, context: any) {
    super(props, context);
    this.state = {
      loading: !!props.loading,
      open: false,
      content: '',
    };
  }

  status = (status: boolean, task?: () => void) => {
    this.setState({ loading: status }, () => {
      // 状态改变后执行的任务
      if (isFunc(task)) task();
    });
  };

  /**
   * 从外部发送消息到loading
   * @param content
   */
  send = (content: string) => {
    this.setState({ content });
  };

  render() {
    console.log(this.state);
    return (
      <LoadingStyled loading={this.state.loading}>
        <LoadingContentStyled>
          <LoadingSvgStyled width="40" height="40">
            <LoadingCircleStyled cx="20" cy="20" r="15" />
          </LoadingSvgStyled>
          <LoadingTextStyled isMessage={!!this.state.content}>
            {this.state.content}
          </LoadingTextStyled>
        </LoadingContentStyled>
      </LoadingStyled>
    );
  }
}
