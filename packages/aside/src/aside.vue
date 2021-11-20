<template>
  <el-aside
    :id="id"
    :width="openType ? asideWidth + 'px' : '0'"
    :style="{ transition: moveType ? 'none' : 'all 0.2s linear' }"
  >
    <i
      ref="line"
      v-if="drag"
      class="dd-aside-move-line"
      @mousedown="onMousedown"
    ></i>
    <slot></slot>
  </el-aside>
</template>

<script>
import { throttle } from "element-pro/src/utils/util.js";
export default {
  name: "DdAside",
  props: {
    drag: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: "30%",
    },
    maxWidth: {
      type: String,
      default: "100%",
    },
    minWidth: {
      type: String,
      default: "0%",
    },
    openType: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      id: "",
      asideWidth: 0,
      maxAsideWidth: 0,
      minAsideWidth: 0,
      clientWidth: 0,
      moveType: false,
    };
  },
  created() {
    this.id = "dd-aside-" + new Date().getTime();
  },
  mounted() {
    this.$nextTick(() => {
      let containerNode = document.querySelector("#" + this.id).parentNode;
      this.clientWidth = containerNode.offsetWidth;
      this.asideWidth =
        this.width.indexOf("%") != -1
          ? (this.clientWidth * parseFloat(this.width)) / 100
          : parseFloat(this.width);
      this.maxAsideWidth =
        this.maxWidth.indexOf("%") != -1
          ? (this.clientWidth * parseFloat(this.maxWidth)) / 100
          : parseFloat(this.maxWidth);
      this.minAsideWidth =
        this.minWidth.indexOf("%") != -1
          ? (this.clientWidth * parseFloat(this.minWidth)) / 100
          : parseFloat(this.minWidth);
      containerNode = null;
    });
  },
  methods: {
    onMousedown(event) {
      this.moveType = true;
      document.body.style.cursor = "ew-resize";
      document.body.style.userSelect = "none";
      let currentWidth = JSON.parse(JSON.stringify(this.asideWidth));
      let currentX = event.clientX;
      let afterWidth = 0;
      document.onmousemove = throttle((e) => {
        afterWidth = currentWidth - (currentX - e.clientX);
        if (
          afterWidth > this.minAsideWidth &&
          afterWidth < this.maxAsideWidth
        ) {
          this.asideWidth = afterWidth;
        }
      }, 60);
      document.onmouseup = () => {
        this.moveType = false;
        document.body.style.cursor = "default";
        document.body.style.userSelect = "auto";
        document.onmousemove = document.onmouseup = null;
      };
    },
  },
};
</script>
