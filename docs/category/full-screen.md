---
title: FullScreen 全屏展示
---

# FullScreen 全屏展示

新增了`<ep-full-screen>`全屏展示组件。

## 自定义头部和尾部

::: demo `<ep-full-screen>`标签可将包裹的内容全屏展示。

```html
<template>
  <ep-full-screen :show.sync="screenShow" @open="onOpen" @close="onClose">
    <div class="full-screen-img">
      <img src="/logo.png" />
      <br />
      <el-button type="text" @click="screenShow = !screenShow"
        >{{ screenShow ? '关闭全屏' : '全屏展示' }}</el-button
      >
    </div>
  </ep-full-screen>
</template>

<script>
  export default {
    data() {
      return {
        screenShow: false,
      };
    },
    methods: {
      onOpen() {
        console.log("打开");
      },
      onClose() {
        console.log("关闭");
      },
    },
  };
</script>
<style>
  .full-screen-img {
    width: 100%;
    text-align: center;
    /* border: 1px solid #000; */
  }
  .full-screen-img img {
    margin: 0 auto;
  }
</style>
```

:::

## API

### FullScreen Attributes

| 参数       | 说明             | 类型    | 可选值        | 默认值 |
| ---------- | ---------------- | ------- | ------------- | ------ |
| show       | 是否全屏展示     | Boolean | true \| false | false  |
| show-close | 是否显示关闭按钮 | Boolean | true \| false | true   |

### FullScreen Events

| 事件名称 | 说明           | 回调参数 |
| -------- | -------------- | -------- |
| open     | 打开全屏的回调 | —        |
| close    | 关闭全屏的回调 | —        |

### FullScreen Slots

| name | 说明           |
| ---- | -------------- |
| —    | 全屏展示的内容 |
