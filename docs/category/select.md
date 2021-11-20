---
title: Select 选择器
---

# Select 选择器

拓展了`<el-select>`备选项滚动事件、扩展菜单。

## 备选项懒加载

备选项懒加载展示用法。

::: demo 通过`popup-scroll-to-bottom`事件，可在滚动触底后，动态添加备选项。

```html
<template>
  <ep-select
    v-model="value"
    multiple
    placeholder="请选择"
    collapse-tags
    @popup-scroll="handleScroll"
    @popup-scroll-to-bottom="handleScrollToBottom"
    :space-to-bottom="0"
    style="width: 230px"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
    </el-option>
  </ep-select>
</template>

<script>
  export default {
    data() {
      return {
        value: [],
        options: [],
      };
    },
    created() {
      const list = [];
      for (let index = 0; index < 30; index++) {
        list.push({
          value: "选项" + index,
          label: "选项" + index,
        });
      }
      this.options = list;
    },
    methods: {
      handleScroll() {
        console.log("滚动中");
      },
      handleScrollToBottom() {
        console.log("到底了");
        if (this.options.length >= 300) return;
        const list = [];
        for (
          let index = this.options.length;
          index < this.options.length + 30;
          index++
        ) {
          list.push({
            value: "选项" + index,
            label: "选项" + index,
          });
        }
        this.options = this.options.concat(list);
      },
    },
  };
</script>
```

:::

## 扩展按钮

扩展按钮展示用法。

::: demo 下拉框扩展按钮，自定义功能需求。

```html
<template>
  <ep-select
    v-model="value"
    multiple
    placeholder="请选择"
    collapse-tags
    extend-position="top"
    extend-text-left="全部选中"
    extend-text-right="清除选中"
    @extend-left-click="onLeftClick"
    @extend-right-click="onRightClick"
    style="width: 230px"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
    </el-option>
  </ep-select>
</template>

<script>
  export default {
    data() {
      return {
        value: [],
        options: [],
      };
    },
    created() {
      const list = [];
      for (let index = 0; index < 10; index++) {
        list.push({
          value: "选项" + index,
          label: "选项" + index,
        });
      }
      this.options = list;
    },
    methods: {
      onLeftClick() {
        this.value = this.options.map((item) => item.value);
      },
      onRightClick() {
        this.value = [];
      },
    },
  };
</script>
```

:::

## 扩展菜单

扩展菜单展示用法。

::: demo 下拉框扩展菜单，自定义功能需求。

```html
<template>
  <ep-select
    v-model="value"
    multiple
    placeholder="请选择"
    collapse-tags
    extend-position="top"
    style="width: 230px"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
    </el-option>
    <div slot="extend">
      <div style="text-align: center; padding: 10px 0;">
        这是个自定义的扩展菜单
      </div>
      <div style="display: flex;">
        <span>
          <el-button style="padding: 6px; 0" type="text" @click="onLeftClick">
            选中全部
          </el-button>
        </span>
        <span style="flex: 1; text-align: right;">
          <el-button style="padding: 6px; 0" type="text" @click="onRightClick"
            >清空选中</el-button
          >
        </span>
      </div>
    </div>
  </ep-select>
</template>

<script>
  export default {
    data() {
      return {
        value: [],
        options: [],
      };
    },
    created() {
      const list = [];
      for (let index = 0; index < 10; index++) {
        list.push({
          value: "选项" + index,
          label: "选项" + index,
        });
      }
      this.options = list;
    },
    methods: {
      onLeftClick() {
        this.value = this.options.map((item) => item.value);
      },
      onRightClick() {
        this.value = [];
      },
    },
  };
</script>
```

:::

## API

只展示说明新增 api，支持原组件全部 api。

### Select Attributes

| 参数              | 说明                                   | 类型          | 默认值 |
| :---------------- | :------------------------------------- | :------------ | ------ |
| extend-position   | 扩展菜单位置                           | top \| bottom | bottom |
| extend-text-left  | 扩展菜单左侧文字                       | string        | -      |
| extend-text-right | 扩展菜单右侧文字                       | string        | -      |
| space-to-bottom   | 备选项滚动触底事件触发时距离底部的距离 | number        | 0      |

### Select Events

| 事件名称               | 说明                                                      | 回调参数    |
| :--------------------- | :-------------------------------------------------------- | :---------- |
| extend-left-click      | 扩展菜单左侧文字点击事件回调                              | () => void  |
| extend-right-click     | 扩展菜单右侧文字点击事件回调                              | () => void  |
| popup-scroll           | 备选项列表滚动事件回调                                    | (e) => void |
| popup-scroll-to-bottom | 备选项列表滚动触底事件回调（可与 spaceToBottom 搭配使用） | () => void  |

### Select Slots

| name   | 说明           |
| :----- | :------------- |
| extend | 扩展菜单的内容 |
