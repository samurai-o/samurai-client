import { defineConfig } from 'umi';
import packageJson from '../package.json';
import proxy from './proxy';
import webpackConfig from './webpack.config';

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
  devServer: {
    proxy: proxy,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [{ path: '/home', component: '@/pages' }],
    },
  ],
  fastRefresh: {},
});
