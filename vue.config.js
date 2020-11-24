const pxtorem = require('postcss-pxtorem');
const webpack = require('webpack');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const GitRevisionPlugin = require('git-revision-webpack-plugin');

module.exports = {
  publicPath: './',
  lintOnSave: true,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          pxtorem({
            rootValue: 16,
            propList: ['font', 'font-size']
          })
        ]
      },
      sass: {
        prependData: '@import \'~@/style/utils.scss\';'
      }
    }
  },
  configureWebpack: {
    // 优化打包配置
    devtool: process.env.NODE_ENV === 'production' ? 'nosources-source-map' : 'eval-source-map',
    plugins: [
      new GitRevisionPlugin(),
      new SpeedMeasurePlugin(),
      new webpack.ContextReplacementPlugin(
        /moment[/\\]locale$/,
        /zh-cn/,
      )

    ]
  },
  chainWebpack: (config) => {
    const vueRule = config.module.rule('vue').test(/\.vue$/);
    vueRule.uses.clear();
    vueRule.use('thread-loader')
      .loader('thread-loader')
      .end()
      .use('cache-loader')
      .loader('cache-loader')
      .end()
      .use('vue-loader')
      .loader('vue-loader')
      .end();
  },
  // productionSourceMap: false, // 打包时去除map文件
  devServer: {
    headers: {
      'X-Frame-Options': 'sameorigin'
    },
    open: true,
    proxy: {
      // '/amos/afpcflow/tc': {
      //   target: process.env.VUE_APP_PROXY_URL2,
      //   changeOrigin: true,
      //   ws: true,
      //   pathRewrite: {
      //     '/amos/afpcflow/tc': '/tc'
      //   }
      // },
      '/amos': {
        target: process.env.VUE_APP_PROXY_URL,
        changeOrigin: true,
        ws: true
        // pathRewrite: {
        //   '^/amos': '',
        // },
      },
      '/amos/sfss/space/ueditor': {
        target: `${process.env.VUE_APP_PROXY_URL}/amos/sfss/space/ueditor`,
        changeOrigin: true,
        ws: true
        // pathRewrite: {
        //   '^/amos/workflow': '/amos/workflow-pc',
        // },
      },
      '/ns_train': {
        target: 'http://192.168.163.157:8000',
        changeOrigin: true,
        ws: true
        // pathRewrite: {
        //   '^/amos': '',
        // },
      }
    }
  }
};
