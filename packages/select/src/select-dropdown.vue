<template>
  <div
    class="el-select-dropdown el-popper"
    :class="[{ 'is-multiple': $parent.multiple }, popperClass]"
    :style="{ minWidth: minWidth }"
  >
    <!-- 自定义拓展（优先） -->
    <div
      v-if="extendPosition === 'top' && $slots.extend"
      class="ep-select-dropdown-extend ep-select-dropdown-extend-prefix"
    >
      <slot name="extend"></slot>
    </div>
    <!-- prop参数拓展 -->
    <div
      v-if="
        extendPosition === 'top' &&
          !$slots.extend &&
          (extendTextLeft || extendTextRight)
      "
      class="ep-select-dropdown-extend ep-select-dropdown-extend-prefix ep-select-dropdown-extend-content"
    >
      <el-button
        style="float: left"
        type="text"
        @click="dispatch('ElSelect', 'handleLeftClick')"
      >
        {{ extendTextLeft }}
      </el-button>
      <el-button
        style="float: right"
        type="text"
        @click="dispatch('ElSelect', 'handleRightClick')"
      >
        {{ extendTextRight }}
      </el-button>
    </div>
    <slot></slot>
    <!-- 自定义拓展（优先） -->
    <div
      v-if="extendPosition === 'bottom' && $slots.extend"
      class="ep-select-dropdown-extend ep-select-dropdown-extend-suffix"
    >
      <slot name="extend"></slot>
    </div>
    <!-- prop参数拓展 -->
    <div
      v-if="
        extendPosition === 'bottom' &&
          !$slots.extend &&
          (extendTextLeft || extendTextRight)
      "
      class="ep-select-dropdown-extend ep-select-dropdown-extend-suffix ep-select-dropdown-extend-content"
    >
      <el-button
        style="float: left"
        type="text"
        @click="dispatch('ElSelect', 'handleLeftClick')"
      >
        {{ extendTextLeft }}
      </el-button>
      <el-button
        style="float: right"
        type="text"
        @click="dispatch('ElSelect', 'handleRightClick')"
      >
        {{ extendTextRight }}
      </el-button>
    </div>
  </div>
</template>

<script type="text/babel">
import Emitter from "element-pro/src/mixins/emitter";
import Popper from "element-pro/src/utils/vue-popper";

export default {
  name: "ElSelectDropdown",

  componentName: "ElSelectDropdown",

  mixins: [Popper, Emitter],

  props: {
    placement: {
      default: "bottom-start",
    },

    boundariesPadding: {
      default: 0,
    },

    popperOptions: {
      default() {
        return {
          gpuAcceleration: false,
        };
      },
    },

    visibleArrow: {
      default: true,
    },

    appendToBody: {
      type: Boolean,
      default: true,
    },
    extendPosition: {
      type: String,
      default: "bottom",
    },
    extendTextLeft: String,
    extendTextRight: String,
  },

  data() {
    return {
      minWidth: "",
    };
  },

  computed: {
    popperClass() {
      return this.$parent.popperClass;
    },
  },

  watch: {
    "$parent.inputWidth"() {
      this.minWidth = this.$parent.$el.getBoundingClientRect().width + "px";
    },
  },

  mounted() {
    this.referenceElm = this.$parent.$refs.reference.$el;
    this.$parent.popperElm = this.popperElm = this.$el;
    this.$on("updatePopper", () => {
      if (this.$parent.visible) this.updatePopper();
    });
    this.$on("destroyPopper", this.destroyPopper);
  },
};
</script>
