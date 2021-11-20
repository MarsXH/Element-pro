const utils = require('./utils')

module.exports = {
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'main': utils.resolve('src'),
            'examples': utils.resolve('examples'),
            'packages': utils.resolve('packages'),
            'element-pro': utils.resolve('/'),
        },
        modules: ['node_modules']
    },
}
