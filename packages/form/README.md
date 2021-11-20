### dd-table（基于 el-table、el-pagination）[返回](../#组件说明)

通过 json 配置列信息，集成了分页器。

#### dd-table：支持 el-table 组件全部 api，新增 3 个 api

| 参数        | 说明                                                         | 类型    | 默认值         |
| :---------- | :----------------------------------------------------------- | :------ | -------------- |
| columns     | 通过 json 对象配置对应的列信息                               | Array   |                |
| pagination  | 集成了分页器，可通过 pagination 配置分页器，api 与原组件相同 | Object  | 不传不展示分页 |
| scrollToTop | 表格数据变更后，是否自动滚动到表格顶部                       | Boolean | false          |

#### columns：支持 el-table-column 组件全部 api，新增 2 个 api

| 参数         | 说明                                                                                                            | 类型   | 默认值 |
| :----------- | :-------------------------------------------------------------------------------------------------------------- | :----- | ------ |
| customRender | 生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引                                                | Array  |        |
| scopedSlots  | 自定义单元格，使用 columns 时，可以通过该属性配置支持 slot-scope 的属性，如 scopedSlots: { customRender: 'XXX'} | Object |        |
| headerRender | 自定义列头，使用 columns 时，可以通过该属性配置支持 slot-scope 的属性                                           | String |        |
| children     | 可通过该属性配置分组列头                                                                                        | Array  |        |

#### pagination：支持 el-pagination 组件全部 api，新增 1 个 api

| 参数     | 说明                 | 类型                        | 默认值   |
| :------- | :------------------- | :-------------------------- | -------- |
| position | 分页器位于表格的位置 | 'both' \| 'top' \| 'bottom' | 'bottom' |

```javascript
<template>
  <div class="hello">
    <ep-table
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
  </div>
</template>

<script>
const columes = [
  {
    prop: "id",
    label: "编码",
    width: "80",
    customRender: (text, record, index) => {
      return text || "--";
    },
  },
  {
    prop: "name",
    label: "名称",
    children: [
      {
        prop: "name",
        label: "名称1",
        customRender: (text, record, index) => {
          return text || "--";
        },
      },
      {
        prop: "name",
        label: "名称2",
        customRender: (text, record, index) => {
          return text || "--";
        },
      },
    ],
  },
  {
    prop: "city",
    label: "城市",
    customRender: (text, record, index) => {
      return text || "--";
    },
  },
  {
    headerRender: "action-header",
    width: "150",
    fixed: "right",
    align: "center",
    scopedSlots: { customRender: "action" },
  }
];
const tableData = [
  {
    id: 1,
    name: "tanghao",
    city: "上海市",
  },
];
export default {
  name: "DdTableTemplate",
  data() {
    return {
      columes,
      tableData,
      pagination: {
        total: 1000,
        pageSize: 10,
        currentPage: 1,
        layout: "total, prev, pager, next",
        pageSizes: [10, 20, 30, 40],
      },
    };
  },
};
</script>
```
