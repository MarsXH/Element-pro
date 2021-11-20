---
title: Table 表格
---

# Table 表格

通过 json 对象配置列信息，集成了分页。

## 基础表格

基础的表格展示用法。

::: demo `<el-table-column>`组件的所有参数，都可以在`columns`数组的列对象中进行配置，最终会转化成`<el-table-column>`组件进行渲染。`customRender`可生成复杂数据的渲染函数，参数分别为当前行的值`text`，当前行数据`record`，行索引`index`。

```html
<template>
  <ep-table :data="tableData" :columns="columns"></ep-table>
</template>

<script>
  export default {
    data() {
      return {
        columns: [
          {
            prop: "date",
            label: "日期",
            width: "120",
          },
          {
            prop: "name",
            label: "姓名",
          },
          {
            prop: "sex",
            label: "性别",
            customRender: (text, record, index) => {
              if (text === 1) {
                return "男";
              } else if (text === 0) {
                return "女";
              } else {
                return "--";
              }
            },
          },
          {
            prop: "province",
            label: "省份",
          },
          {
            prop: "city",
            label: "市区",
          },
          {
            prop: "address",
            label: "地址",
            width: "300",
          },
          {
            prop: "zip",
            label: "邮编",
          },
        ],
        tableData: [
          {
            date: "2016-05-03",
            name: "王小虎",
            province: "上海",
            city: "普陀区",
            address: "上海市普陀区金沙江路 1518 弄",
            zip: 200333,
            sex: 0,
          },
          {
            date: "2016-05-02",
            name: "王小虎",
            province: "上海",
            city: "普陀区",
            address: "上海市普陀区金沙江路 1518 弄",
            zip: 200333,
            sex: 1,
          },
          {
            date: "2016-05-04",
            name: "王小虎",
            province: "上海",
            city: "普陀区",
            address: "上海市普陀区金沙江路 1518 弄",
            zip: 200333,
            sex: 0,
          },
          {
            date: "2016-05-01",
            name: "王小虎",
            province: "上海",
            city: "普陀区",
            address: "上海市普陀区金沙江路 1518 弄",
            zip: 200333,
            sex: 1,
          },
          {
            date: "2016-05-08",
            name: "王小虎",
            province: "上海",
            city: "普陀区",
            address: "上海市普陀区金沙江路 1518 弄",
            zip: 200333,
            sex: 0,
          },
        ],
      };
    },
  };
</script>
```

:::

## 多级表头

多级表头配置。

::: demo 列对象设置`children`属性，放置当前表头所包含的表头。

```html
<template>
  <ep-table :data="tableData" :columns="columns"></ep-table>
</template>

<script>
  export default {
    data() {
      return {
        columns: [
          {
            prop: "date",
            label: "日期",
            width: "120",
          },
          {
            prop: "name",
            label: "姓名",
          },
          {
            prop: "sex",
            label: "性别",
            customRender: (text, record, index) => {
              if (text === 1) {
                return "男";
              } else if (text === 0) {
                return "女";
              } else {
                return "--";
              }
            },
          },
          {
            label: "住址信息",
            children: [
              {
                prop: "province",
                label: "省份",
              },
              {
                prop: "city",
                label: "市区",
              },
              {
                prop: "address",
                label: "地址",
                width: "300",
              },
              {
                prop: "zip",
                label: "邮编",
              },
            ],
          },
        ],
        tableData: [
          {
            date: "2016-05-03",
            name: "王小虎",
            province: "上海",
            city: "普陀区",
            address: "上海市普陀区金沙江路 1518 弄",
            zip: 200333,
            sex: 0,
          },
          {
            date: "2016-05-02",
            name: "王小虎",
            province: "上海",
            city: "普陀区",
            address: "上海市普陀区金沙江路 1518 弄",
            zip: 200333,
            sex: 1,
          },
          {
            date: "2016-05-04",
            name: "王小虎",
            province: "上海",
            city: "普陀区",
            address: "上海市普陀区金沙江路 1518 弄",
            zip: 200333,
            sex: 0,
          },
          {
            date: "2016-05-01",
            name: "王小虎",
            province: "上海",
            city: "普陀区",
            address: "上海市普陀区金沙江路 1518 弄",
            zip: 200333,
            sex: 1,
          },
          {
            date: "2016-05-08",
            name: "王小虎",
            province: "上海",
            city: "普陀区",
            address: "上海市普陀区金沙江路 1518 弄",
            zip: 200333,
            sex: 0,
          },
        ],
      };
    },
  };
</script>
```

:::

## 自定义列模板

自定义列模板配置。

::: demo 列对象通过`scopedSlots: { customRender: "xxx" }`，可设置自定义作用域插槽，`prop`属性优先级高于`scopedSlots`。

```html
<template>
  <ep-table :data="tableData" :columns="columns">
    <template slot="address" slot-scope="scope">
      <span>{{ scope.row.name }}, {{ scope.row.address }}</span>
    </template>
    <template slot="action" slot-scope="scope">
      <el-button type="text">删除</el-button>
    </template>
  </ep-table>
</template>

<script>
  export default {
    data() {
      return {
        columns: [
          {
            prop: "date",
            label: "日期",
            width: "120",
            fixed: "left",
          },
          {
            prop: "name",
            label: "姓名",
          },
          {
            prop: "sex",
            label: "性别",
            customRender: (text, record, index) => {
              if (text === 1) {
                return "男";
              } else if (text === 0) {
                return "女";
              } else {
                return "--";
              }
            },
          },
          {
            prop: "province",
            label: "省份",
          },
          {
            prop: "city",
            label: "市区",
          },
          {
            label: "地址",
            width: "300",
            scopedSlots: { customRender: "address" },
          },
          {
            prop: "zip",
            label: "邮编",
          },
          {
            label: "操作",
            scopedSlots: { customRender: "action" },
          },
        ],
        tableData: [
          {
            date: "2016-05-03",
            name: "王小虎",
            province: "上海",
            city: "普陀区",
            address: "上海市普陀区金沙江路 1518 弄",
            zip: 200333,
            sex: 0,
          },
          {
            date: "2016-05-02",
            name: "王小虎",
            province: "上海",
            city: "普陀区",
            address: "上海市普陀区金沙江路 1518 弄",
            zip: 200333,
            sex: 1,
          },
          {
            date: "2016-05-04",
            name: "王小虎",
            province: "上海",
            city: "普陀区",
            address: "上海市普陀区金沙江路 1518 弄",
            zip: 200333,
            sex: 0,
          },
          {
            date: "2016-05-01",
            name: "王小虎",
            province: "上海",
            city: "普陀区",
            address: "上海市普陀区金沙江路 1518 弄",
            zip: 200333,
            sex: 1,
          },
          {
            date: "2016-05-08",
            name: "王小虎",
            province: "上海",
            city: "普陀区",
            address: "上海市普陀区金沙江路 1518 弄",
            zip: 200333,
            sex: 0,
          },
        ],
      };
    },
  };
</script>
```

:::

## 自定义表头

自定义表头配置。

::: demo 列对象通过`headerRender: "xxx"`，可设置自定义作用域插槽。

```html
<template>
  <ep-table :data="tableData" :columns="columns">
    <template slot="action" slot-scope="scope">
      <el-button type="text">删除</el-button>
    </template>
    <template slot="action-header" slot-scope="scope">
      <span>自定义表头</span>
    </template>
  </ep-table>
</template>

<script>
  export default {
    data() {
      return {
        columns: [
          {
            prop: "date",
            label: "日期",
            width: "120",
          },
          {
            prop: "name",
            label: "姓名",
          },
          {
            prop: "sex",
            label: "性别",
            customRender: (text, record, index) => {
              if (text === 1) {
                return "男";
              } else if (text === 0) {
                return "女";
              } else {
                return "--";
              }
            },
          },
          {
            prop: "province",
            label: "省份",
          },
          {
            prop: "city",
            label: "市区",
          },
          {
            prop: "address",
            label: "地址",
            width: "300",
          },
          {
            prop: "zip",
            label: "邮编",
          },
          {
            headerRender: "action-header",
            scopedSlots: { customRender: "action" },
          },
        ],
        tableData: [
          {
            date: "2016-05-03",
            name: "王小虎",
            province: "上海",
            city: "普陀区",
            address: "上海市普陀区金沙江路 1518 弄",
            zip: 200333,
            sex: 0,
          },
          {
            date: "2016-05-02",
            name: "王小虎",
            province: "上海",
            city: "普陀区",
            address: "上海市普陀区金沙江路 1518 弄",
            zip: 200333,
            sex: 1,
          },
          {
            date: "2016-05-04",
            name: "王小虎",
            province: "上海",
            city: "普陀区",
            address: "上海市普陀区金沙江路 1518 弄",
            zip: 200333,
            sex: 0,
          },
          {
            date: "2016-05-01",
            name: "王小虎",
            province: "上海",
            city: "普陀区",
            address: "上海市普陀区金沙江路 1518 弄",
            zip: 200333,
            sex: 1,
          },
          {
            date: "2016-05-08",
            name: "王小虎",
            province: "上海",
            city: "普陀区",
            address: "上海市普陀区金沙江路 1518 弄",
            zip: 200333,
            sex: 0,
          },
        ],
      };
    },
  };
</script>
```

:::

## 多选表格

多选的表格展示用法。

::: demo 只要添加`type: 'selection'`的列对象，可自动生成`Checkbox`。

```html
<template>
  <ep-table :data="tableData" :columns="columns"></ep-table>
</template>

<script>
  export default {
    data() {
      return {
        columns: [
          {
            type: "selection",
            width: "55",
          },
          {
            prop: "date",
            label: "日期",
            width: "120",
          },
          {
            prop: "name",
            label: "姓名",
          },
          {
            prop: "sex",
            label: "性别",
            customRender: (text, record, index) => {
              if (text === 1) {
                return "男";
              } else if (text === 0) {
                return "女";
              } else {
                return "--";
              }
            },
          },
          {
            prop: "province",
            label: "省份",
          },
          {
            prop: "city",
            label: "市区",
          },
          {
            prop: "address",
            label: "地址",
            width: "300",
          },
          {
            prop: "zip",
            label: "邮编",
          },
        ],
        tableData: [
          {
            date: "2016-05-03",
            name: "王小虎",
            province: "上海",
            city: "普陀区",
            address: "上海市普陀区金沙江路 1518 弄",
            zip: 200333,
            sex: 0,
          },
          {
            date: "2016-05-02",
            name: "王小虎",
            province: "上海",
            city: "普陀区",
            address: "上海市普陀区金沙江路 1518 弄",
            zip: 200333,
            sex: 1,
          },
          {
            date: "2016-05-04",
            name: "王小虎",
            province: "上海",
            city: "普陀区",
            address: "上海市普陀区金沙江路 1518 弄",
            zip: 200333,
            sex: 0,
          },
          {
            date: "2016-05-01",
            name: "王小虎",
            province: "上海",
            city: "普陀区",
            address: "上海市普陀区金沙江路 1518 弄",
            zip: 200333,
            sex: 1,
          },
          {
            date: "2016-05-08",
            name: "王小虎",
            province: "上海",
            city: "普陀区",
            address: "上海市普陀区金沙江路 1518 弄",
            zip: 200333,
            sex: 0,
          },
        ],
      };
    },
  };
</script>
```

:::

## 分页表格

分页的表格展示用法。

::: demo 集成了分页器，api 同原组件相同。

```html
<template>
  <ep-table
    :data="tableData"
    :columns="columns"
    :pagination="pagination"
  ></ep-table>
</template>

<script>
  export default {
    data() {
      return {
        columns: [
          {
            prop: "date",
            label: "日期",
            width: "120",
          },
          {
            prop: "name",
            label: "姓名",
          },
          {
            prop: "sex",
            label: "性别",
            customRender: (text, record, index) => {
              if (text === 1) {
                return "男";
              } else if (text === 0) {
                return "女";
              } else {
                return "--";
              }
            },
          },
          {
            prop: "province",
            label: "省份",
          },
          {
            prop: "city",
            label: "市区",
          },
          {
            prop: "address",
            label: "地址",
            width: "300",
          },
          {
            prop: "zip",
            label: "邮编",
          },
        ],
        pagination: {
          position: "both",
          total: 1000,
          pageSize: 10,
          currentPage: 1,
          layout: "total, prev, pager, next",
          pageSizes: [10, 20, 30, 40],
        },
        tableData: [
          {
            date: "2016-05-03",
            name: "王小虎",
            province: "上海",
            city: "普陀区",
            address: "上海市普陀区金沙江路 1518 弄",
            zip: 200333,
            sex: 0,
          },
          {
            date: "2016-05-02",
            name: "王小虎",
            province: "上海",
            city: "普陀区",
            address: "上海市普陀区金沙江路 1518 弄",
            zip: 200333,
            sex: 1,
          },
          {
            date: "2016-05-04",
            name: "王小虎",
            province: "上海",
            city: "普陀区",
            address: "上海市普陀区金沙江路 1518 弄",
            zip: 200333,
            sex: 0,
          },
          {
            date: "2016-05-01",
            name: "王小虎",
            province: "上海",
            city: "普陀区",
            address: "上海市普陀区金沙江路 1518 弄",
            zip: 200333,
            sex: 1,
          },
          {
            date: "2016-05-08",
            name: "王小虎",
            province: "上海",
            city: "普陀区",
            address: "上海市普陀区金沙江路 1518 弄",
            zip: 200333,
            sex: 0,
          },
        ],
      };
    },
  };
</script>
```

:::

## API

只展示说明新增 api，支持原组件全部 api。

### Table Attributes

| 参数        | 说明                                   | 类型    | 可选值        | 默认值 |
| ----------- | -------------------------------------- | ------- | ------------- | ------ |
| columns     | 包含列配置对象的数组                   | Array   | —             | —      |
| pagination  | 分页器配置，api 参考原组件             | Object  | —             | —      |
| scrollToTop | 表格数据变更后，是否自动滚动到表格顶部 | Boolean | true \| false | false  |

### Columns Attributes

| 参数         | 说明                                                                           | 类型     | 可选值 | 默认值 |
| ------------ | ------------------------------------------------------------------------------ | -------- | ------ | ------ |
| children     | 可通过该属性配置分级表头                                                       | Array    | —      | —      |
| customRender | 生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引               | Function | —      | —      |
| scopedSlots  | 自定义列模板，可通过 scopedSlots: { customRender: 'XXX'}配置自定义列作用域插槽 | Object   | —      | —      |
| headerRender | 自定义表头，可配置自定义表头作用域插槽                                         | String   | —      | —      |

### Pagination Attributes

| 参数     | 说明                 | 类型   | 可选值                      | 默认值   |
| -------- | -------------------- | ------ | --------------------------- | -------- |
| position | 分页器位于表格的位置 | String | 'both' \| 'top' \| 'bottom' | 'bottom' |
