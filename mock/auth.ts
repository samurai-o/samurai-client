import { Request, Response } from 'express';
import mockjs, { Random } from 'mockjs';

export default {
  /** 登录校验 */
  'GET /mock/api/checkLogin': (_: any, res: Response) => {
    res.json({
      code: 1,
      data: true,
      message: '成功',
    });
  },
};
