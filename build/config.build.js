const {resolve, getComponentEntries, externals} = require('./utils')
const pub = require('./config.pub')
const Components = require('../components.json');
module.exports = {
    outputDir: resolve('lib'),
    productionSourceMap: false,
    configureWebpack: {
        mode: 'production',
        // 配置打包入口
        entry: {
            ...Components,
            'element-pro.common': resolve('src/index.js'),
        },
        output: {
            filename: '[name].js',
            chunkFilename: '[id].js',
            libraryTarget: 'commonjs2',
            library: 'element-pro',
        },
        resolve: pub.resolve,
        externals: externals,
        performance: {
            hints: false
        },
        stats: 'none',
        optimization: {
            minimize: false
        },
    },
    chainWebpack: config => {
        // 拆分文件
        config.optimization.delete('splitChunks')
        // 拷贝文件
        config.plugin('copy').tap(option => {
            return [
                [
                    {
                        from: resolve('src'),
                        to: resolve('lib'),
                        toType: 'dir',
                        ignore: [ 'index.js', 'depend-utils/*']
                    },
                    {
                        from: resolve('packages/theme-chalk/lib'),
                        to: resolve('lib/theme-chalk'),
                        toType: 'dir',
                    }
                ]
            ]
        })
        // 预加载
        config.plugins.delete('preload')
        config.plugins.delete('prefetch')
        // html
        config.plugins.delete('html')
        // 热替换
        config.plugins.delete('hmr')
        config.entryPoints.delete('app')
    }
}
