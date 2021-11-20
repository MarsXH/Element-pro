<template>
  <div class="global-header">
    <el-breadcrumb separator="/" class="global-header__crumb">
      <el-breadcrumb-item>{{ title }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "GlobalHeader",
  data(){
    return {
      title: ''
    }
  },
  created(){
    this.title = this.$route.meta.title
  },
  watch: {
    '$route': {
      handler(router){
        this.title = router.meta.title
      }
    }
  }
};
</script>
<style lang="scss" scoped>
  .global-header {
    &__crumb {
      line-height: 60px;
    }
  }
</style>