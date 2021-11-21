<template>
  <div ref="epFullScreen" class="ep-full-screen">
    <div v-if="show && showClose" class="ep-full-screen__header">
      <i class="el-icon-close" @click="closeFullScreen"></i>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import {
  showFullScreen,
  exitFullScreen,
  getFUllScreenEventName,
} from "element-pro/src/utils/util.js";
export default {
  name: "EpFullScreen",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    showClose: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      showType: false,
      eventName: "webkitfullscreenchange",
    };
  },
  mounted() {
    if (this.show) {
      this.openFullScreen();
    }
    this.eventName = getFUllScreenEventName();
    window.addEventListener(this.eventName, this.onChange);
  },
  methods: {
    onChange() {
      this.showType = !this.showType;
      if (this.showType) {
        this.onOpen();
      } else {
        this.onClose();
      }
    },
    onOpen() {
      this.$emit("update:show", true);
      this.$emit("open");
    },
    onClose() {
      this.$emit("update:show", false);
      this.$emit("close");
    },
    openFullScreen() {
      const element = this.$refs.epFullScreen;
      showFullScreen(element);
    },
    closeFullScreen() {
      exitFullScreen();
    },
  },
  beforeDestroy() {
    window.removeEventListener(this.eventName, this.onChange);
  },
  watch: {
    show: function (newValue) {
      if (newValue !== this.showType) {
        if (newValue) {
          this.openFullScreen();
        } else {
          this.closeFullScreen();
        }
      }
    },
  },
};
</script>
