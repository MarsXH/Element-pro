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
// examples绝对路径
const ExamplesPath = path.resolve(__dirname, '../../examples', componentname);
const Files = [
  {
    filename: path.join('../../examples/views', `${ComponentName}.vue`),
    content: 
    `<template>
  <div class="ep-${componentname}">
    <el-card 
      class="box-card"
      header="示例"
      style="margin-bottom: 24px;">
      Ep${ComponentName}
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'Ep${ComponentName}'
  };
</script>`
  }
];
// 添加导航
const routerFilePath = path.join(__dirname, '../../examples/router/router.config.js');
const routerFile = fs.readFileSync(routerFilePath, 'utf8')
const index = routerFile.indexOf(']')
const routerFileStr = fs.readFileSync(routerFilePath, 'utf8').slice(0, index)
if (routerFile.indexOf(`Ep${ComponentName}`) === -1) {
  const routerFileTemp = 
  `${routerFileStr}  {
    path: '${componentname}',
    name: 'Ep${ComponentName}',
    component: () => import('../views/${ComponentName}.vue'),
    meta: { title: '${ComponentName} ${chineseName}'}
  },
]`
  fileSave(path.join(__dirname, '../../examples/router/router.config.js'))
  .write(routerFileTemp, 'utf8')
  .end('\n');
}

// 创建md文档
Files.forEach(file => {
  fileSave(path.join(ExamplesPath, file.filename))
    .write(file.content, 'utf8')
    .end('\n');
});

console.log('DONE!');
