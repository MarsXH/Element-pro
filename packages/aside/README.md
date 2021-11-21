### ep-aside（基于 el-aside）[返回](../#组件说明)

新增了 aside 展开/收起动作，宽度可自由拖动

#### ep-aside：支持 el-aside 组件全部 api，新增 5 个 api

ep-aside Attributes

| 参数     | 说明               | 类型         | 默认值 |
| :------- | :----------------- | :----------- | ------ |
| drag     | 是否开启可拖动模式 | Boolean      | false  |
| openType | 展开/收起          | Boolean      | true   |
| width    | 默认展示宽度       | 百分比 \| px | '50%'  |
| maxWidth | 最大可拖动宽度     | 百分比 \| px | '80%'  |
| minWidth | 最小可拖动宽度     | 百分比 \| px | '20%'  |

```javascript
<template>
  <el-container>
    <ep-aside width='220px' minWidth="0%" maxWidth="100%" :drag="true" :openType="openType" >Aside</ep-aside>
    <el-main>Main</el-main>
  </el-container>
</template>

<script>
export default {
  name: "EpAsideTemplate",
  data() {
    return {
      openType: true
    };
  },
};
</script>
```
