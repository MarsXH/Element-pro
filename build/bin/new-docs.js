'use strict';

// 退出函数
process.on('exit', () => {
  console.log();
});
// 没有组件名提示
if (!process.argv[2]) {
  console.error('[组件名]必填 - Please enter new component name');
  process.exit(1);
}
// 引入相关模块
const path = require('path');
const fs = require('fs');
const fileSave = require('file-save');
const uppercamelcase = require('uppercamelcase');
// 组件名
const componentname = process.argv[2];
const chineseName = process.argv[3] || componentname;
// 驼峰组件名
const ComponentName = uppercamelcase(componentname);
// packages绝对路径
const DocsPath = path.resolve(__dirname, '../../docs', componentname);
// 文档文件
const Files = [
  // 组件对应的文档
  {
    filename: path.join('../../docs/category', `${componentname}.md`),
    content: `---\ntitle: ${ComponentName} ${chineseName}\n---\n\n# ${ComponentName} ${chineseName}`
  }
];
// 添加导航
const sidebarFile = require('../../docs/.vuepress/config/sidebar');
sidebarFile['/category/'].forEach(item => {
  if (item.title === '组件') {
    if(item.children.indexOf(componentname) === -1) {
      item.children.push(componentname)
    }
  }
})
const sidebarFileTemp = `
module.exports = ${JSON.stringify(sidebarFile, null, '  ')}
`
fileSave(path.join(__dirname, '../../docs/.vuepress/config/sidebar.js'))
  .write(sidebarFileTemp, 'utf8')
  .end('\n');

// 创建md文档
Files.forEach(file => {
  fileSave(path.join(DocsPath, file.filename))
    .write(file.content, 'utf8')
    .end('\n');
});

console.log('DONE!');
