<template>
  <div class="sidebar">
    <el-menu
      :default-active="currentIndex"
      class="sidebar-menu"
      @select="onSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <template v-for="item in pageRouterMap">
        <el-menu-item v-if="!item.hidden" :index="item.name" :key="item.name">
          <span slot="title">{{item.meta.title}}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { pageRouterMap } from '../router/router.config' 
export default {
  name: "SideBar",
  data(){
    return {
      pageRouterMap,
      currentIndex: ''
    }
  },
  created(){
    this.currentIndex = this.$route.name
  },
  methods: {
    onSelect(value) {
      this.currentIndex = value
      this.$router.push({name: value})
    }
  },
  watch: {
    '$route': {
      handler(router){
        this.currentIndex = router.name
      }
    }
  }
};
</script>
<style lang="scss" scoped>
  .sidebar-menu{
    border-right: 0 none;
  }
</style>