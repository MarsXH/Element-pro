<template>
  <div class="ep-adise">
    <el-card 
      class="box-card"
      header="示例"
      style="margin-bottom: 24px;">
        <el-container class="ep-adise__box">
          <ep-aside width="200px" min-width="0px" max-width="80%" :drag="true">Aside</ep-aside>
          <el-main>Main</el-main>
        </el-container>
    </el-card>
  </div>
  
</template>

<script>
export default {
  name: "EpAside",
};
</script>

<style lang="scss">
.ep-adise__box {
  .el-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
    padding: 0;
  }
}
</style>
