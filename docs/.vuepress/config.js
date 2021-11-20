const path = require('path')
const resolve = (dir) => path.join(__dirname, '../', dir)
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  theme:"",
  title: "Element Pro",
  description: "一个基于 Element UI 的拓展组件库",
  dest: './dist',
  head: [
    ["link",{ rel: "icon", href: "./logo.png" }]
  ],
  markdown: {
    lineNumbers: false,
  },
  themeConfig: {
    smoothScroll: true,
    nav: require("./config/nav"),
    sidebar: require("./config/sidebar"),
    repo: "https://git.ddxq.mobi/di/element-pro",
    editLinks: false,
  },
  plugins: [
    'demo-container'
  ],
  locales: {
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
    }
  },
  configureWebpack(config) {
    config.resolve.alias['element-pro'] = resolve('../')
    config.plugins = [
      ...config.plugins,
      new MiniCssExtractPlugin({
          filename: 'statics/css/styles.[chunkhash:8].css',
          chunkFilename: 'statics/css/[id].styles.[chunkhash:8].css'
      })
    ]
  },
  chainWebpack(config) {
    config
    .output
      .filename(process.env.NODE_ENV === 'production' ? 'statics/js/[name].[chunkhash:8].js' : 'statics/js/[name].js')

    config.module
    .rule('images')
      .test(/\.(png|jpe?g|gif)(\?.*)?$/)
      .use('url-loader')
      .loader('url-loader')
      .options({
        name: `statics/img/[name].[hash:8].[ext]`
      })

    config.module
    .rule('fonts')
      .test(/\.(woff2?|eot|ttf|otf)(\?.*)?$/i)
      .use('url-loader')
      .loader('url-loader')
      .options({
        name: `statics/fonts/[name].[hash:8].[ext]`
      })
    config.module
    .rule('media')
      .test(/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/)
      .use('url-loader')
        .loader('url-loader')
        .options({
          name: `statics/media/[name].[hash:8].[ext]`
        })
    config.module
    .rule('svg')
      .test(/\.(svg)(\?.*)?$/)
      .use('file-loader')
        .loader('file-loader')
        .options({
          name: `statics/img/[name].[hash:8].[ext]`
        })
  },
  extraWatchFiles: [
    '.vuepress/config/nav.js', // 使用相对路径
    '.vuepress/config/sidebar.js', // 使用相对路径
  ]
};