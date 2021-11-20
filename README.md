# ElementPro

一个基于 ElementUI 的拓展组件库(0.3.0 以上版本支持 TS)。

## 说明文档

使用说明文档：

## 开发文档

项目仓库地址：https://github.com/MarsXH/Element-pro
npm 包地址：

### 分支说明

**master** --主分支

**release** --发布分支

**develop** --开发合并分支

**futrue/xxx** --对应组件开发分支

### 目录结构

```
├── build
│    ├── bin
│    │    ├── gen-cssfile.js     # 打包css文件
│    │    └── new-comp.js        # 创建新组件
│    │    └── new-exam.js        # 创建新组件调试页面
│    │    └── new-docs.js        # 创建新组件文档
│    ├── config.build.js         # 组件打包配置
│    ├── config.dev.js           # 组件开发配置
│    ├── config.pub.js           # 公共配置
│    └── utils.js                # 工具函数
├── docs
│    ├── .vuepress               # 文档配置
│    │    ├── config             # 导航栏和侧边栏
│    │    ├── public             # 静态资源
│    │    ├── styles             # 全局样式
│    │    ├── config.js          # 配置文件
│    │    └── enhanceApp.js      # 引用第三方库
│    ├── category                # 组件文档
│    ├── update-log              # 更新日志
│    └── README.md               # 默认主题配置
├── examples
│    ├── views                   # 组件调试页面
│    ├── App.vue                 # Vue 模板入口
│    └── main.js                 # Vue 入口 js
├── lib                          # 组件打包后的包文件
├── packages                     # 组件
│    ├── table                   # 表格组件
│    ├── timeline                # 时间轴组件
│    └── theme-chalk             # 组件样式
├── src
│    ├── index.js                # 组件库入口
│    └── utils                   # 工具函数
├── types                        # 组件TS声明文件
├── components.json              # 组件路径映射表
├── vue.config.js                # 配置文件
├── README.md
└── package.json
```

### 组件开发

**创建新组件**

```bash
  yarn new:comp [组件英文名] [组件中文名]
```

以`yarn new:comp button 按钮`为例，说明该命令执行的内容

1. 在`components.json`文件映射表中添加组件的名称-路径映射关系`

```javascript
  {
    "button": "./packages/button/index.js"
  }
```

2. 在`packages/theme-chalk/src/index.scss`文件中添加组件样式文件的引入

```javascript
  @import "./button.scss";
```

3. 在`types/element-pro.d.ts`文件中添加组件 TS 声明文件的引入

```javascript
import { DdButton } from "./button";
/** Button Component */
export class Button extends DdButton {}
```

4. 在`packages/button`文件夹下创建`index.js`文件

```javascript
import Button from "./src/button.vue";

Button.install = function(Vue) {
  Vue.component(Button.name, Button);
};

export default Button;
```

5. 在`packages/button/src`文件夹下创建`button.vue`文件

```javascript
  <template>
    <div class="dd-button"></div>
  </template>

  <script>
    export default {
      name: 'DdButton'
    };
  </script>
```

6. 在`packages/theme-chalk/src`文件夹下创建`button.scss`文件

> 请将组件`.vue`文件内的样式，写在该文件下。

7. 在`types`文件夹下创建组件的`button.d.ts`文件

> 请将组件`props`属性，添加到对应`.d.ts`声明文件中, 及其他声明。

```javascript
  import { ElementUIComponent } from './component'

  /** Button Component */
  export declare class DdButton extends ElementUIComponent {
    /** Button Props */
  }
```

**创建组件调试页面**

```bash
  yarn new:exam [组件英文名] [组件中文名]
```

以`yarn new:exam button 按钮`为例，说明该命令执行的内容

1. 在`examples/router/router.config.js`文件中添加组件调试页面路由配置。

```javascript
export const pageRouterMap = [
  {
    path: "button",
    name: "EpButton",
    component: () => import("../views/Button.vue"),
    meta: { title: "Button 按钮" },
  },
];
```

2. 在`examples/views`文件下创建 Button.vue 文件。

```javascript
  <template>
    <div class="ep-button">EpButton</div>
  </template>

  <script>
    export default {
      name: 'EpButton'
    };
  </script>
```

**组件调试**

组件调试阶段，已全局引入`packages`文件夹下面的所有组件

```bash
  yarn serve
```

**组件库打包**

使用`lib`打包模式，打包后的文件结构需满足`按需加载`插件的要求，本组件库采用`babel-plugin-component`作为按需加载插件。

> 打包前请手动在`src/index.js`文件中添加对应组件的引入和导出，未自动生成的原因是：该文件是组件库打包的入口文件，为了避免将未开发完成的组件打包发布。

```bash
  yarn lib
```

### 组件文档开发

**创建新组件文档**

```bash
  yarn new:docs [组件英文名] [组件中文名]
```

以`yarn new:docs button 按钮`为例，索命该命令执行的内容

1. 在`docs/.vuepress/config/sidebar.js`文件中添加组件文档路由。

```javascript
  {
    "title": "组件",
    "collapsable": false,
    "sidebarDepth": 0,
    "children": [
      "button"
    ]
  }
```

2. 在`docs/category`文件夹下创建组件文档`button.md`文件。

```javascript
  ---
  title: Button 按钮
  ---

  # Button 按钮
```

**组件文档调试**

文档调试阶段，全局引入打包后的组件库`lib`，文档开发需先对组件进行打包。

```bash
  yarn docs
```

**组件文档打包**

打包到根目录下`dist`文件夹，可在内网运维平台发布。

```bash
  yarn build
```
