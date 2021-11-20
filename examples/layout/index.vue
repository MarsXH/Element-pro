<template>
  <el-container class="layout">
    <el-aside width="205px" class="layout-aside">
      <div class="layout-aside__title" @click="$router.push('/')">
        <img class="layout-aside__logo" src="../assets/logo.png" alt="">
        Element Pro调试
      </div>
      <side-bar></side-bar>
    </el-aside>
    <el-container>
      <el-header class="layout-header">
        <global-header></global-header>
      </el-header>
      <el-main class="layout-main">
        <div class="layout-main__box">
          <router-view />
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import SideBar from './SideBar.vue';
import GlobalHeader from './GlobalHeader.vue';

export default {
  name: "Layout",
  components:{ SideBar, GlobalHeader }
};
</script>
<style lang="scss" scoped>
  .layout-header {
    line-height: 60px;
    border-bottom: 1px solid #DCDFE6;
  }
  .layout-aside{
      height: 100vh;
      background-color: #545c64;
      color: #fff;
      &__title{
        line-height: 60px;
        font-weight: 700;
        padding-left: 20px;
        cursor: pointer;
      }
      &__logo{
        float: left;
        width: 36px;
        margin: 12px 4px 12px 0;
      }
  }
  .layout-main{
    height: calc(100vh - 60px);
    padding: 0;
    background-color: #E9EEF3;
    overflow-y: scroll;
    &__box{
      padding: 10px;
    }
  }
</style>