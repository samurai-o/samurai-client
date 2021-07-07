import WebpackChain from 'webpack-chain';

const prodGzipList = ['js', 'css', 'png', 'jpeg', 'gif'];

export default function webpackConfig(webpack: WebpackChain) {
  if (process.env.NODE_ENV === 'production') {
    const CompressionWebpackPlugin = require('compression-webpack-plugin');
    webpack.plugin('compression-webpack-plugin').use(
      new CompressionWebpackPlugin({
        algorithm: 'gzip', // 指定生成gzip格式
        test: new RegExp('\\.(' + prodGzipList.join('|') + ')$'), // 匹配哪些格式文件需要压缩
        threshold: 10240, //对超过10k的数据进行压缩
        minRatio: 0.6, // 压缩比例，值为0 ~ 1
      }),
    );
  }
}
