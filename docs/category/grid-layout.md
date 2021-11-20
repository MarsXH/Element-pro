---
title: GridLayout 网格布局
---

# GridLayout 网格布局

新增了`<ep-grid-layout>`和`<ep-grid-item>`网格布局组件。

## 可自由拖动

移动并调整大小。

::: demo 可自由拖动项目位置并调整项目大小。

```html
<template>
  <div>
    <div style="background-color: #f2f4f5; padding: 10px; margin-bottom: 20px">
      <p>位置信息：</p>
      <el-row :gutter="10">
        <el-col :span="8" v-for="item in layout" :key="item.i">
          {{`${item.i} = [ X: ${item.x}, Y: ${item.y}, W: ${item.w}, H:
          ${item.h}]`}}
        </el-col>
      </el-row>
    </div>
    <div style="background-color: #f2f4f5; padding: 10px; margin-bottom: 20px">
      <el-checkbox v-model="mirrored">是否镜像</el-checkbox>
      <el-checkbox v-model="draggable">是否可拖动</el-checkbox>
      <el-checkbox v-model="resizable">是否可调整大小</el-checkbox>
      <el-button
        type="text"
        style="float: right; padding: 0;"
        icon="el-icon-circle-plus-outline"
        @click="addChild"
        >添加子项</el-button
      >
    </div>
    <ep-grid-layout
      style="background-color: #f2f4f5"
      :layout.sync="layout"
      :col-num="12"
      :row-height="30"
      :is-draggable="draggable"
      :is-resizable="resizable"
      :is-mirrored="mirrored"
      :vertical-compact="true"
      :margin="[10, 10]"
      :use-css-transforms="true"
    >
      <ep-grid-item
        v-for="(item, index) in layout"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
        :key="item.i"
      >
        <div
          style="background-color: #d9ecff; height: 100%; text-align: center;"
        >
          <el-button
            type="text"
            style="position: absolute; right: 0; top: 0; padding: 0;"
            icon="el-icon-close"
            @click="removeChild(index)"
          >
          </el-button>
          {{item.i}}
        </div>
      </ep-grid-item>
    </ep-grid-layout>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        mirrored: false,
        draggable: true,
        resizable: true,
        layout: [
          { x: 0, y: 0, w: 2, h: 3, i: "0" },
          { x: 2, y: 0, w: 2, h: 3, i: "1" },
          { x: 4, y: 0, w: 2, h: 3, i: "2" },
          { x: 6, y: 0, w: 6, h: 9, i: "3" },
          { x: 0, y: 5, w: 6, h: 6, i: "4" },
          { x: 3, y: 9, w: 9, h: 4, i: "5" },
          { x: 0, y: 9, w: 3, h: 8, i: "6" },
          { x: 3, y: 13, w: 6, h: 4, i: "7" },
          { x: 9, y: 19, w: 3, h: 4, i: "8" },
        ],
      };
    },
    methods: {
      addChild() {
        this.layout.push({
          x: (this.layout.length * 2) % 12,
          y: this.layout.length + 12,
          w: 2,
          h: 3,
          i: this.layout.length,
        });
      },
      removeChild(index) {
        this.layout.splice(index, 1);
      },
    },
  };
</script>
```

:::

## API

### GridLayout Attributes

| 参数               | 说明                                                 | 类型    | 可选值        | 默认值                                          |
| ------------------ | ---------------------------------------------------- | ------- | ------------- | ----------------------------------------------- |
| layout             | 子项位置、大小数据                                   | Array   | -             | -                                               |
| col-num            | 网格系统列数                                         | Number  | -             | 12                                              |
| row-height         | 每行的高度，单位 px                                  | Number  | -             | 150                                             |
| max-rows           | 最大行数                                             | Number  | -             | Infinity                                        |
| margin             | 子项元素边距, 第一项水平边距，第二项垂直边距         | Array   | -             | [10, 10]                                        |
| is-draggable       | 子项是否可拖拽                                       | Boolean | true \| false | true                                            |
| is-resizable       | 子项是否可调整大小                                   | Boolean | true \| false | true                                            |
| is-mirrored        | 元素是否可镜像反转                                   | Boolean | true \| false | false                                           |
| auto-size          | 容器是否自动调整大小                                 | Boolean | true \| false | true                                            |
| vertical-compact   | 布局是否垂直压缩                                     | Boolean | true \| false | true                                            |
| prevent-collision  | 防止碰撞属性，值设置为`ture`时，栅格只能拖动至空白处 | Boolean | true \| false | false                                           |
| use-css-transforms | 是否使用 CSS 属性 `transition-property: transform;`  | Boolean | true \| false | true                                            |
| responsive         | 布局是否为响应式                                     | Boolean | true \| false | false                                           |
| breakpoints        | 响应式布局设置断点                                   | Object  | -             | { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 } |
| cols               | 设置每个断点对应的列数                               | Object  | -             | { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }        |

### GridLayout Events

| 事件名称                  | 说明                                                     | 回调参数 |
| ------------------------- | -------------------------------------------------------- | -------- |
| layout-create-event       | 对应 Vue 生命周期的 created                              | —        |
| layout-before-mount-event | 对应 Vue 生命周期的 beforeMount                          | —        |
| layout-mounted-event      | 对应 Vue 生命周期的 mounted                              | —        |
| layout-ready-event        | 布局 updated 事件, 当完成 mount 中的所有操作时生成的事件 | —        |
| breakpoint-changed-event  | 断点更改事件, 每次断点值由于窗口调整大小而改变           | —        |

### GridItem Attributes

| 参数               | 说明                                                                 | 类型    | 可选值        | 默认值      |
| ------------------ | -------------------------------------------------------------------- | ------- | ------------- | ----------- |
| i                  | 栅格中元素的 ID                                                      | String  | -             | -           |
| x                  | 标识栅格元素位于第几列，需为自然数                                   | Number  | -             | -           |
| y                  | 标识栅格元素位于第几行，需为自然数                                   | Number  | -             | -           |
| w                  | 标识栅格元素的初始宽度，值为 colWidth 的倍数                         | Number  | -             | -           |
| h                  | 标识栅格元素的初始高度，值为 rowHeight 的倍数                        | Number  | -             | -           |
| min-w              | 栅格元素的最小宽度，值为 colWidth 的倍数                             | Number  | -             | -           |
| max-w              | 栅格元素的最大宽度，值为 colWidth 的倍数                             | Number  | -             | -           |
| min-h              | 栅格元素的最小高度，值为 rowHeight 的倍数                            | Number  | -             | -           |
| max-h              | 栅格元素的最大高度，值为 rowHeight 的倍数                            | Number  | -             | -           |
| is-draggable       | 子项是否可拖拽                                                       | Boolean | true \| false | null        |
| is-resizable       | 子项是否可调整大小                                                   | Boolean | true \| false | null        |
| static             | 子项是否为静态的（无法拖拽、调整大小或被其他元素移动）               | Boolean | true \| false | false       |
| drag-ignore-from   | 标识栅格元素中哪些子元素无法触发拖拽事件，值为`css-like`选择器       | String  | -             | 'a, button' |
| drag-allow-from    | 标识栅格元素中哪些子元素可以触发拖拽事件，值为`css-like`选择器       | String  | -             | null        |
| resize-ignore-from | 标识栅格元素中哪些子元素无法触发调整大小的事件，值为`css-like`选择器 | String  | -             | 'a, button' |

### GridLayoutItem Events

| 事件名称                | 说明                            | 回调参数 |
| ----------------------- | ------------------------------- | -------- |
| move-event              | 移动时的事件                    | —        |
| resize-event            | 调整大小时的事件                | —        |
| moved-event             | 移动后的事件                    | —        |
| resized-event           | 调整大小后的事件                | —        |
| container-resized-event | 栅格元素/栅格容器更改大小的事件 | —        |
