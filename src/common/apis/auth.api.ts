import { Network } from '@samuras/samurai-network';
import { Progress } from '@frade-sam/progress-react';
import Loading from '@/tools/loading';
import { ProgressCom } from '@/tools/progress';
const task = new Progress();
task.plugins('assets', Loading as any);
task.plugins('fetch', ProgressCom);
task.init();

class Auth extends Network {
  constructor() {
    super({ isMock: !!process.env.MOCK });
  }

  /**
   * 检查是否存在登录状态不存在是做跳转处理
   * @param params
   * @param data
   */
  @task.progress({ name: 'checkauth', id: 'checkauth', type: 'assets' })
  @Network.Get('api/checkLogin')
  checkLogin(params?: any, res?: any) {
    const { data } = res;
    return data;
  }

  /**
   * 退出
   * @param params
   * @param res
   * @returns
   */
  @Network.Post('api/outlogin')
  outlogin(params?: any, res?: any) {
    const { data } = res;
    if (data) window.location.href = `${window.location.origin}/auth/login`;
    return data;
  }
}

export default new Auth();
