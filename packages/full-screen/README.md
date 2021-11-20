### dd-full-screen [返回](../#组件说明)

全屏展示组件（F11 效果）

dd-full-screen Attributes

| 参数       | 说明             | 类型    | 默认值 |
| :--------- | :--------------- | :------ | ------ |
| show       | 是否全屏展示     | Boolean | false  |
| show-close | 是否显示关闭按钮 | Boolean | true   |

dd-full-screen Methods

| name  | 说明           |
| :---- | :------------- |
| open  | 打开全屏的回调 |
| close | 关闭全屏的回调 |

dd-full-screen Slot

| name | 说明                  |
| :--- | :-------------------- |
| ——   | dd-full-screen 的内容 |

```javascript
<template>
  <ep-full-screen :show.sync="screenShow" @open="onOpen" @close="onClose">
    <ep-table
      id="ddtable"
      :data="tableData"
      :columes="columes"
      :pagination="pagination"
      border
      height="300"
    >
      <template slot="action" slot-scope="scope">
        <span>自定义单元格 {{ scope.row.city }}</span>
      </template>
      <template slot="action-header" slot-scope="scope">
        <span>自定义列头</span>
      </template>
    </ep-table>
  </ep-full-screen>
</template>
```
