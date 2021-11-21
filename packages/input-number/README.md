### ep-input-number（基于 el-input-number）[返回](../#组件说明)

新增了可配置输入框头部、尾部的内容

#### 支持 el-input-number 组件全部 api，新增 2 个 slot

ep-input-number Slot

| name   | 说明                                     |
| :----- | :--------------------------------------- |
| prefix | 输入框头部内容，controls 为 false 时生效 |
| suffix | 输入框尾部内容，controls 为 false 时生效 |

```javascript
<template>
  <ep-input-number>
    <span slot="prefix">￥</span>
  </ep-input-number>
</template>
```
