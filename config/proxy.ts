import { ProxyConfig } from './interface';

const proxy: ProxyConfig = {};

proxy['/api'] = {
  target: 'http://www.samurais.cn',
  pathRewrite: {
    '^/api': '',
  },
  changeOrigin: true,
};

export default proxy;
