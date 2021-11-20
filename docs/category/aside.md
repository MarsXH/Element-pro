---
title: Aside 侧边栏容器
---

# Aside 侧边栏容器

拓展了`<el-aside>`展开/收起动作，宽度可自由拖动功能。

## 可自由拖动

拖动侧边栏展示用法。

::: demo 通过`drag`可设置侧边栏可拖动，及可拖动的最小宽度和最大宽度。

```html
<template>
  <el-container>
    <ep-aside width="200px" min-width="0px" max-width="80%" :drag="true"
      >Aside</ep-aside
    >
    <el-main>Main</el-main>
  </el-container>
</template>
```

:::

## 展开/收起

展开/收起展示用法。

::: demo 通过`drag`可设置侧边栏可拖动，及可拖动的最小宽度和最大宽度。

```html
<template>
  <el-container>
    <ep-aside width="200px" :open-type="openType">Aside</ep-aside>
    <el-main>
      <el-header>
        <i
          :class="{'el-icon-s-fold': openType, 'el-icon-s-unfold': !openType}"
          class="aside-swith"
          @click="openType = !openType"
        ></i>
        Header
      </el-header>
      Main
    </el-main>
  </el-container>
</template>

<script>
  export default {
    data() {
      return {
        openType: true,
      };
    },
  };
</script>

<style>
  .el-header {
    position: relative;
  }
  .aside-swith {
    position: absolute;
    font-size: 20px;
    left: 6px;
    top: 20px;
    cursor: pointer;
    color: #409eff;
  }
</style>
```

:::

## API

只展示说明新增 api，支持原组件全部 api。

### Aside Attributes

| 参数      | 说明           | 类型    | 可选值        | 默认值 |
| --------- | -------------- | ------- | ------------- | ------ |
| drag      | 是否可拖动     | Boolean | true \| false | false  |
| open-type | 展开/收起状态  | Boolean | true \| false | true   |
| width     | 默认展示宽度   | String  | 百分比 \| px  | '30%'  |
| max-width | 最大可拖动宽度 | String  | 百分比 \| px  | '100%' |
| min-width | 最小可拖动宽度 | String  | 百分比 \| px  | '0%'   |
