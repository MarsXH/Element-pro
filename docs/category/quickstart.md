---
title: 快速上手
---

# 快速上手

## 全局引入

```javascript
import Vue from "vue";
import ElementPro from "element-pro-ui";
import "element-pro-ui/lib/theme-chalk/index.css";
import App from "./App.vue";

Vue.use(ElementPro);

new Vue({
  el: "#app",
  render: (h) => h(App),
});
```

## 按需引入

首先，安装 babel-plugin-component：

```shell
yarn add babel-plugin-component -D
```

```shell
npm install babel-plugin-component -D
```

然后，在 .babelrc 或 babel.config.js 添加如下配置：

```javascript
module.exports = {
  plugins: [
    [
      "component",
      {
        libraryName: "element-pro-ui",
        styleLibraryName: "theme-chalk",
      },
    ],
  ],
};
```

如果需要同时按需引入 ElementUI 和 ElementPro，添加如下配置

```javascript
module.exports = {
  plugins: [
    [
      "component",
      {
        libraryName: "element-ui",
        styleLibraryName: "theme-chalk",
      },
    ],
    [
      "component",
      {
        libraryName: "element-pro-ui",
        styleLibraryName: "theme-chalk",
      },
      "element-pro-ui",
    ],
  ],
};
```

按需引入组件

```javascript
import Vue from "vue";
import { Aside, Drawer, Table, InputNumber } from "element-pro-ui";
import App from "./App.vue";

Vue.component(Aside.name, Aside);
Vue.component(Drawer.name, Drawer);
Vue.component(Table.name, Table);
Vue.component(InputNumber.name, InputNumber);

/* 或写为
 * Vue.use(Aside)
 * Vue.use(Drawer)
 * Vue.use(Table);
 * Vue.use(InputNumber);
 */

new Vue({
  el: "#app",
  render: (h) => h(App),
});
```
