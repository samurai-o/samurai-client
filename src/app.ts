import React from 'react';
import ReactDOM from 'react-dom';
import { authApi } from '@/common/apis';
import { ScriptManager } from 'script-import-core';
import Loading from '@/tools/loading';

const manager = new ScriptManager();

export async function render(oldRender: any) {
  let loading: Loading;
  let status: boolean; // 登录状态
  const renderFunc = oldRender;
  const olddom = document.getElementById('loading');
  manager.monitor('start', 'samurailogincheck', () => {
    const dom = document.createElement('div');
    dom.id = 'loading';
    dom.style.setProperty('width', '100vw');
    dom.style.setProperty('position', 'absolute');
    dom.style.setProperty('top', '0px');
    dom.style.setProperty('z-index', '10000');
    dom.style.setProperty('pointer-events', 'none');
    loading = ReactDOM.render(React.createElement(Loading), dom);
    loading.status(true);
    document.body.appendChild(dom);
  });
  manager.monitor('end', 'samurailogincheck', () => {
    loading.status(false).then((status) => {
      console.log(status);
      // if (!status)
      //   window.location.href = `${window.location.origin}/auth/login`;
      renderFunc();
    });
  });
  const time = new Date().getTime();
  manager.start({ path: '/api/checkLogin', method: 'GET', time, status: true });
  status = await authApi.checkLogin();
  manager.end({ path: '/api/checkLogin', method: 'GET', time, status: false });
}
