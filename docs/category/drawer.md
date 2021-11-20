---
title: Drawer 抽屉
---

# Drawer 抽屉

拓展了`<el-drawer>`尺寸可自由拖动功能。

## 可自由拖动

拖动抽屉展示用法。

::: demo 通过`drag`可设置抽屉可拖动，及可拖动的最小尺寸和最大尺寸。

```html
<template>
  <div>
    <div>
      <el-button type="primary" @click="openDrawer('rtl')">右侧打开</el-button>
      <el-button type="primary" @click="openDrawer('ltr')">左侧打开</el-button>
      <el-button type="primary" @click="openDrawer('ttb')">上面打开</el-button>
      <el-button type="primary" @click="openDrawer('btt')">下面打开</el-button>
    </div>
    <ep-drawer
      ref="ddDrawer"
      title="我是标题"
      :visible.sync="drawer"
      :direction="direction"
      :drag="true"
      size="200px"
      max-size="80%"
      mix-size="0%"
    >
      <div>我来啦!</div>
      <el-button type="primary" @click="closeDrawer">关闭抽屉</el-button>
    </ep-drawer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        direction: "rtl",
        drawer: false,
      };
    },
    methods: {
      openDrawer(direction) {
        this.direction = direction;
        this.drawer = true;
      },
      closeDrawer() {
        this.$refs.ddDrawer.closeDrawer();
      },
    },
  };
</script>
```

:::

## API

只展示说明新增 api，支持原组件全部 api。

### Drawer Attributes

| 参数     | 说明           | 类型    | 可选值        | 默认值 |
| -------- | -------------- | ------- | ------------- | ------ |
| drag     | 是否可拖动     | Boolean | true \| false | false  |
| size     | 默认展示尺寸   | String  | 百分比 \| px  | '30%'  |
| max-size | 最大可拖动尺寸 | String  | 百分比 \| px  | '100%' |
| min-size | 最小可拖动尺寸 | String  | 百分比 \| px  | '0%'   |
