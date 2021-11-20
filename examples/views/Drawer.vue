<template>
  <div class="ep-drawer">
    <el-card 
      class="box-card"
      header="示例"
      style="margin-bottom: 24px;">
      <div>
        <el-button type="primary" @click="openDrawer('rtl')">右侧打开</el-button>
        <el-button type="primary" @click="openDrawer('ltr')">左侧打开</el-button>
        <el-button type="primary" @click="openDrawer('ttb')">上面打开</el-button>
        <el-button type="primary" @click="openDrawer('btt')">下面打开</el-button>
      </div>
    </el-card>
    <ep-drawer
      ref="ddDrawer"
      title="我是标题"
      :visible.sync="drawer"
      :direction="direction"
      :drag="true" size="200px"
      max-size="80%"
      mix-size="0%">
      <div>我来啦!</div>
      <el-button type="primary" @click="closeDrawer">关闭抽屉</el-button>
    </ep-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      direction: "rtl",
      drawer: false,
    };
  },
  methods: {
    openDrawer(direction) {
      this.direction = direction;
      this.drawer = true;
    },
    closeDrawer() {
      this.$refs.ddDrawer.closeDrawer();
    },
  },
};
</script>
<style lang="scss">
.ep-drawer {
  .el-drawer__body {
    padding: 20px;
  }
}
</style>