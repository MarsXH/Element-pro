---
title: InputNumber 计数器
---

# InputNumber 计数器

拓展了`<el-input-number>`自定义输入框头部、尾部的功能。

## 自定义头部和尾部

计数器展示用法。

::: demo `v-model`绑定值为`null`时，输入框为空，当使用控制按钮或键盘进行增减时，按起始值为 0 进行计算。

```html
<template>
  <div class="ep-input-number">
    <h5>自定义头部和尾部</h5>
    <ep-input-number v-model="num" :controls="false">
      <span slot="prefix">￥</span>
      <span slot="suffix">元</span>
    </ep-input-number>
    <br />
    <br />
    <ep-input-number v-model="num" :controls="true">
      <span slot="prefix">￥</span>
      <span slot="suffix">元</span>
    </ep-input-number>
    <br />
    <br />
    <ep-input-number v-model="num" :controls="true" controls-position="right">
      <span slot="prefix">￥</span>
      <span slot="suffix">元</span>
    </ep-input-number>

    <h5>自定义前置和后置</h5>
    <ep-input-number v-model="num" :controls="false">
      <span slot="prepend">净含量</span>
      <span slot="append">克</span>
    </ep-input-number>
    <br />
    <br />
    <ep-input-number
      v-model="num"
      :controls="false"
      prefix-icon="el-icon-coin"
      suffix-icon="el-icon-coin"
    >
      <span slot="prepend">净含量</span>
      <span slot="append">克</span>
    </ep-input-number>

    <h5>自定义图标</h5>
    <ep-input-number
      v-model="num"
      :controls="true"
      prefix-icon="el-icon-coin"
      suffix-icon="el-icon-coin"
    >
    </ep-input-number>
    <br />
    <br />
    <ep-input-number
      v-model="num"
      :controls="true"
      prefix-icon="el-icon-coin"
      suffix-icon="el-icon-coin"
      controls-position="right"
    >
    </ep-input-number>

    <h5>混合型</h5>
    <ep-input-number v-model="num" :controls="true" controls-position="right">
      <span slot="prefix">￥</span>
      <span slot="suffix">亿</span>
      <el-select v-model="select" slot="prepend" placeholder="请选择">
        <el-option label="毛利润" value="1"></el-option>
        <el-option label="净利润" value="2"></el-option>
      </el-select>
    </ep-input-number>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        num: 5,
        select: "",
      };
    },
  };
</script>

<style>
  .ep-input-number .el-input {
    width: 320px;
  }
  .ep-input-number .el-select .el-input {
    width: 100px;
  }
</style>
```

:::

## API

只展示说明新增 api，支持原组件全部 api。

### Aside Attributes

| 参数        | 说明         | 类型   | 可选值 | 默认值 |
| ----------- | ------------ | ------ | ------ | ------ |
| prefix-icon | 头部图标类名 | String | —      | —      |
| suffix-icon | 尾部图标类名 | String | —      | —      |
