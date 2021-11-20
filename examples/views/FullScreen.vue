<template>
  <div class="ep-full-screen">
    <el-card 
      class="box-card"
      header="示例"
      style="margin-bottom: 24px;">
      <ep-full-screen :show.sync="screenShow" @open="onOpen" @close="onClose">
        <div class="full-screen-img">
          <img src="/logo.png">
          <br>
          <el-button type="text" @click="screenShow = !screenShow" >{{ screenShow ? '关闭全屏' : '全屏展示' }}</el-button>
        </div>
      </ep-full-screen>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "EpFullScreen",
  data() {
    return {
      screenShow: false,
    };
  },
  methods: {
    onOpen() {
      console.log("打开");
    },
    onClose() {
      console.log("关闭");
    },
  },
};
</script>

<style>
.full-screen-img {
  width: 100%;
  text-align: center;
  /* border: 1px solid #000; */
}
.full-screen-img img {
  margin: 0 auto;
}
</style>
