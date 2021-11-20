const fs = require('fs')
const path = require('path')
const nodeExternals = require('webpack-node-externals');

const join = path.join
const resolve = (dir) => path.join(__dirname, '../', dir)

const utilsList = fs.readdirSync(path.resolve(__dirname, '../src/utils'));
const mixinsList = fs.readdirSync(path.resolve(__dirname, '../src/mixins'));
const transitionList = fs.readdirSync(path.resolve(__dirname, '../src/transitions'));

const Components = require('../components.json');
const externals = {};

Object.keys(Components).forEach(function(key) {
    externals[`element-pro/packages/${key}`] = `element-pro/lib/${key}`;
});
// 公共函数引用的替换
utilsList.forEach(function(file) {
    file = path.basename(file, '.js');
    if(file !== 'depend-utils') {
        externals[`element-pro/src/utils/${file}`] = `element-pro/lib/utils/${file}`;
    }
});
mixinsList.forEach(function(file) {
    file = path.basename(file, '.js');
    externals[`element-pro/src/mixins/${file}`] = `element-pro/lib/mixins/${file}`;
});
transitionList.forEach(function(file) {
    file = path.basename(file, '.js');
    externals[`element-pro/src/transitions/${file}`] = `element-pro/lib/transitions/${file}`;
});

module.exports = {
    resolve,
    getComponentEntries(path) {
        let files = fs.readdirSync(resolve(path));
        const componentEntries = files.reduce((ret, item) => {
            const itemPath = join(path, item)
            const isDir = fs.statSync(itemPath).isDirectory();
            if ( item === 'theme-chalk') return ret
            if (isDir) {
                ret[item] = resolve(join(itemPath, 'index.js'))
            } else {
                const [name] = item.split('.')
                ret[name] = resolve(`${itemPath}`)
            }
            return ret
        }, {})
        return componentEntries
    },
    externals: [Object.assign({vue: 'vue'}, externals), nodeExternals()]
}
