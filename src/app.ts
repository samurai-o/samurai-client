import React from 'react';
import ReactDOM from 'react-dom';
import { authApi } from '@/common/apis';
import { Progress } from '@frade-sam/progress-react';
import Loading from '@/tools/loading';

export async function render(oldRender: any) {
  let loading: Loading;
  const status = await authApi.checkLogin();
  oldRender();
}
