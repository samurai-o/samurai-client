import React from 'react';
import { isFunc } from '@frade-sam/samtools';
import {
  LoadingStyled,
  LoadingSvgStyled,
  LoadingCircleStyled,
  LoadingContentStyled,
  LoadingTextStyled,
  LoadingEyeCircleStyled,
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
      content: '加载中...',
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
    // this.setState({ content });
  };

  render() {
    console.log(this.state);
    return (
      <LoadingStyled loading={this.state.loading}>
        <LoadingContentStyled>
          <LoadingSvgStyled width="100" height="100">
            <LoadingCircleStyled cx="50" cy="50" r="14" />
            <LoadingEyeCircleStyled cx="50" cy="50" r="14" />
          </LoadingSvgStyled>
        </LoadingContentStyled>
        {/* <LoadingTextStyled isMessage={!!this.state.content}>
          {this.state.content}
        </LoadingTextStyled> */}
      </LoadingStyled>
    );
  }
}
