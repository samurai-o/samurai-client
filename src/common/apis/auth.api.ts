import { Network } from '@samuras/samurai-network';

class Auth extends Network {
  constructor() {
    super();
  }

  /**
   * 检查是否存在登录状态不存在是做跳转处理
   * @param params
   * @param data
   */
  @Network.Get('/api/checkLogin')
  checkLogin(params?: any, res?: any) {
    const { data } = res;
    return data;
  }
}

export default new Auth();
