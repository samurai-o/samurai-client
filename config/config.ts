import { defineConfig } from 'umi';
import CompressionWebpackPlugin from 'compression-webpack-plugin';
import packageJson from '../package.json';

const prodGzipList = ['js', 'css', 'png', 'jpeg', 'gif'];

export default defineConfig({
  chainWebpack: (webpack) => {
    if (process.env.NODE_ENV === 'production') {
      webpack.plugin('compression-webpack-plugin').use(
        new CompressionWebpackPlugin({
          algorithm: 'gzip', // 指定生成gzip格式
          test: new RegExp('\\.(' + prodGzipList.join('|') + ')$'), // 匹配哪些格式文件需要压缩
          threshold: 10240, //对超过10k的数据进行压缩
          minRatio: 0.6, // 压缩比例，值为0 ~ 1
        }),
      );
    }
  },
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
