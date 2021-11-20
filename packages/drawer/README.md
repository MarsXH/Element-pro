### dd-drawer（基于 el-drawer）[返回](../#组件说明)

新增了可自由拖动尺寸

#### dd-drawer：支持 el-drawer 组件全部 api，新增 3 个 api

dd-drawer Attributes

| 参数    | 说明               | 类型         | 默认值 |
| :------ | :----------------- | :----------- | ------ |
| drag    | 是否开启可拖动模式 | Boolean      | false  |
| maxSize | 最大可拖动尺寸     | 百分比 \| px | '80%'  |
| minSize | 最小可拖动尺寸     | 百分比 \| px | '20%'  |

```javascript
<template>
  <ep-drawer
    ref="ddDrawer"
    size="65%"
    maxSize="100%"
    minSize="20%"
    direction="btt"
  >
    可拖动抽屉
  </ep-drawer>
</template>

<script>
export default {
  name: "DdDrawerTemplate",
  data() {
    return {
    };
  },
};
</script>
```
