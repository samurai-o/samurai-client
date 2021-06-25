import { authApi } from '@/common/apis';

export function render(_render: any) {
  const res = authApi.checkLogin();
  console.log(res);
  _render();
}
