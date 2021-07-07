import { defineConfig } from 'umi';
import packageJson from '../package.json';
import webpackConfig from './webpack.config';

const prodGzipList = ['js', 'css', 'png', 'jpeg', 'gif'];

export default defineConfig({
  chainWebpack: webpackConfig,
  define: {
    'process.env': {
      ...process.env,
      package: {
        name: packageJson.name,
        version: packageJson.version,
      },
    },
  },
  hash: true,
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
});
