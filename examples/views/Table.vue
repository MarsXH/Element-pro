<template>
  <div class="ep-table">
    <div class="ep-table__header">
      <div class="ep-table__header-top">
        <el-button @click="show = !show">
          点击切换展开部分的显示与隐藏
        </el-button>
      </div>
      <div v-if="show" class="ep-table__header-bottom">展开部分</div>
    </div>
    <div class="ep-table__table">
      <ep-table
        :data="tableData"
        :columns="columns"
        :pagination="pagination"
        height="100%"
      >
        <template slot="address" slot-scope="scope">
          <span>{{ scope.row.name }}, {{ scope.row.address }}</span>
        </template>
        <template slot="action" slot-scope="scope">
          <el-button type="text">删除</el-button>
        </template>
        <template slot="action-header" slot-scope="scope">
          <span>自定义表头</span>
        </template>
      </ep-table>
    </div>
  </div>
</template>

<script>
const columns = [
  {
    type: "selection",
    width: "55",
  },
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
        label: "地址",
        width: "300",
        scopedSlots: { customRender: "address" },
      },
      {
        prop: "zip",
        label: "邮编",
      },
    ],
  },
  {
    headerRender: "action-header",
    scopedSlots: { customRender: "action" },
  },
];
const tableData = [
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
  {
    date: "2016-05-08",
    name: "王小虎",
    province: "上海",
    city: "普陀区",
    address: "上海市普陀区金沙江路 1518 弄",
    zip: 200333,
    sex: 0,
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
  {
    date: "2016-05-08",
    name: "王小虎",
    province: "上海",
    city: "普陀区",
    address: "上海市普陀区金沙江路 1518 弄",
    zip: 200333,
    sex: 0,
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
  {
    date: "2016-05-08",
    name: "王小虎",
    province: "上海",
    city: "普陀区",
    address: "上海市普陀区金沙江路 1518 弄",
    zip: 200333,
    sex: 0,
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
  {
    date: "2016-05-08",
    name: "王小虎",
    province: "上海",
    city: "普陀区",
    address: "上海市普陀区金沙江路 1518 弄",
    zip: 200333,
    sex: 0,
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
  {
    date: "2016-05-08",
    name: "王小虎",
    province: "上海",
    city: "普陀区",
    address: "上海市普陀区金沙江路 1518 弄",
    zip: 200333,
    sex: 0,
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
  {
    date: "2016-05-09",
    name: "王小虎",
    province: "上海",
    city: "普陀区",
    address: "上海市普陀区金沙江路 1518 弄",
    zip: 200333,
    sex: 0,
  },
];
export default {
  name: "EpTable",
  data() {
    return {
      show: true,
      columns: columns,
      tableData: tableData,
      pagination: {
        position: "both",
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

<style lang="scss" scoped>
.ep-table {
  height: 500px;
  display: flex;
  flex-direction: column;
  border: 1px solid #000;
  &__header {
    text-align: center;
    &-top {
      height: 80px;
      line-height: 80px;
      background-color: blueviolet;
    }
    &-bottom {
      height: 80px;
      line-height: 80px;
      background-color: pink;
    }
  }
  &__table {
    flex: 1;
    overflow: hidden;
  }
}
</style>
