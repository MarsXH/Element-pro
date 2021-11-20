'use strict';

// 退出函数
process.on('exit', () => {
  console.log('exit');
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
const PackagePath = path.resolve(__dirname, '../../packages', componentname);
const Files = [
  // 组件的index.js文件
  {
    filename: 'index.js',
    content: 
`import ${ComponentName} from './src/${componentname}';

/* istanbul ignore next */
${ComponentName}.install = function(Vue) {
  Vue.component(${ComponentName}.name, ${ComponentName});
};

export default ${ComponentName};`
  },
  // 组件src文件
  {
    filename: `src/${componentname}.vue`,
    content: 
`<template>
  <div class="ep-${componentname}"></div>
</template>

<script>
  export default {
    name: 'Ep${ComponentName}'
  };
</script>`
  },
  // 组件对应的scss文件
  {
    filename: path.join('../../packages/theme-chalk/src', `${componentname}.scss`),
    content: ''
  },
  // 组件的ts声明文件
  {
    filename: path.join('../../types', `${componentname}.d.ts`),
    content: 
`import { ElementUIComponent } from './component'

/** ${ComponentName} Component */
export declare class Ep${ComponentName} extends ElementUIComponent {
  /** ${ComponentName} Props */
}`
  }
];

// 添加到 components.json
const componentsFile = require('../../components.json');
console.log(componentsFile.table)
if (componentsFile[componentname]) {
  console.error(`${componentname} 已存在.`);
  process.exit(1);
}
componentsFile[componentname] = `./packages/${componentname}/index.js`;
fileSave(path.join(__dirname, '../../components.json'))
  .write(JSON.stringify(componentsFile, null, '  '), 'utf8')
  .end('\n');

// 添加到 index.scss
const sassPath = path.join(__dirname, '../../packages/theme-chalk/src/index.scss');
const sassImportText = `${fs.readFileSync(sassPath)}@import "./${componentname}.scss";`;
fileSave(sassPath)
  .write(sassImportText, 'utf8')
  .end('\n');

// 添加到 element-ui.d.ts
const elementTsPath = path.join(__dirname, '../../types/element-pro.d.ts');

let elementTsText = `${fs.readFileSync(elementTsPath)}
/** ${ComponentName} Component */
export class ${ComponentName} extends Ep${ComponentName} {}`;

const index = elementTsText.indexOf('export') - 1;
const importString = `import { Ep${ComponentName} } from './${componentname}'`;

elementTsText = elementTsText.slice(0, index) + importString + '\n' + elementTsText.slice(index);

fileSave(elementTsPath)
  .write(elementTsText, 'utf8')
  .end('\n');

// 创建 package
Files.forEach(file => {
  fileSave(path.join(PackagePath, file.filename))
    .write(file.content, 'utf8')
    .end('\n');
});

console.log('DONE!');
