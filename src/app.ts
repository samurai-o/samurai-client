import React from 'react';
import ReactDOM from 'react-dom';
import { authApi } from '@/common/apis';
import { ScriptManager } from 'script-import-core';
import Loading from '@/tools/loading';

const manager = new ScriptManager();

export async function render(_render: any) {
  let loading: Loading;
  let status: boolean; // 登录状态
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
    if (!status) {
      loading.send('未登录,即将跳转到登录界面');
    }
    loading.status(false, () => {
      if (!status) {
        window.location.href = `${window.location.origin}/auth/login`;
      }
    });
    _render();
  });
  const time = new Date().getTime();
  manager.start({ path: '/api/checkLogin', method: 'GET', time, status: true });
  status = await authApi.checkLogin();
  manager.end({ path: '/api/checkLogin', method: 'GET', time, status: true });
}
