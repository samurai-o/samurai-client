import { ProxyConfig } from './interface';

const proxy: ProxyConfig = {};

proxy['/api'] = {
  target: 'http://localhost:3005',
  pathRewrite: {
    '^/api': '',
  },
  changeOrigin: true,
};

export default proxy;
