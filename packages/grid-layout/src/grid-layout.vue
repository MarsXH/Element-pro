<template>
  <div ref="item" class="dd-grid-layout" :style="mergedStyle">
    <slot></slot>
    <ep-grid-item
      class="dd-grid-placeholder"
      v-show="isDragging"
      :x="placeholder.x"
      :y="placeholder.y"
      :w="placeholder.w"
      :h="placeholder.h"
      :i="placeholder.i"
    ></ep-grid-item>
  </div>
</template>

<script>
import Vue from "vue";
const elementResizeDetectorMaker = require("element-resize-detector");
import {
  bottom,
  compact,
  getLayoutItem,
  moveElement,
  validateLayout,
  cloneLayout,
  getAllCollisions,
} from "element-pro/src/utils/grid-utils";
import {
  getBreakpointFromWidth,
  getColsFromBreakpoint,
  findOrGenerateResponsiveLayout,
} from "element-pro/src/utils/responsiveUtils";
import DdGridItem from "./grid-item.vue";
import {
  addWindowEventListener,
  removeWindowEventListener,
} from "element-pro/src/utils/grid-dom";
export default {
  name: "DdGridLayout",
  provide() {
    return {
      eventBus: null,
      layout: this,
    };
  },
  components: {
    DdGridItem,
  },
  props: {
    autoSize: {
      type: Boolean,
      default: true,
    },
    colNum: {
      type: Number,
      default: 12,
    },
    rowHeight: {
      type: Number,
      default: 150,
    },
    maxRows: {
      type: Number,
      default: Infinity,
    },
    margin: {
      type: Array,
      default: function () {
        return [10, 10];
      },
    },
    isDraggable: {
      type: Boolean,
      default: true,
    },
    isResizable: {
      type: Boolean,
      default: true,
    },
    isMirrored: {
      type: Boolean,
      default: false,
    },
    useCssTransforms: {
      type: Boolean,
      default: true,
    },
    verticalCompact: {
      type: Boolean,
      default: true,
    },
    layout: {
      type: Array,
      required: true,
    },
    responsive: {
      type: Boolean,
      default: false,
    },
    responsiveLayouts: {
      type: Object,
      default: function () {
        return {};
      },
    },
    breakpoints: {
      type: Object,
      default: function () {
        return { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 };
      },
    },
    cols: {
      type: Object,
      default: function () {
        return { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 };
      },
    },
    preventCollision: {
      type: Boolean,
      default: false,
    },
    useStyleCursor: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      width: null,
      mergedStyle: {},
      lastLayoutLength: 0,
      isDragging: false,
      placeholder: {
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        i: -1,
      },
      layouts: {},
      lastBreakpoint: null,
      originalLayout: null,
    };
  },
  created() {
    this.resizeEventHandler = (eventType, i, x, y, h, w) => {
      this.resizeEvent(eventType, i, x, y, h, w);
    };
    this.dragEventHandler = (eventType, i, x, y, h, w) => {
      this.dragEvent(eventType, i, x, y, h, w);
    };
    this._provided.eventBus = new Vue();
    this.eventBus = this._provided.eventBus;
    this.eventBus.$on("resizeEvent", this.resizeEventHandler);
    this.eventBus.$on("dragEvent", this.dragEventHandler);
    this.$emit("layout-created", this.layout);
  },
  beforeDestroy: function () {
    this.eventBus.$off("resizeEvent", this.resizeEventHandler);
    this.eventBus.$off("dragEvent", this.dragEventHandler);
    this.eventBus.$destroy();
    removeWindowEventListener("resize", this.onWindowResize);
    if (this.erd) {
      this.erd.uninstall(this.$refs.item);
    }
  },
  beforeMount: function () {
    this.$emit("layout-before-mount", this.layout);
  },
  mounted: function () {
    this.$emit("layout-mounted", this.layout);
    this.$nextTick(function () {
      validateLayout(this.layout);
      this.originalLayout = this.layout;
      const self = this;
      this.$nextTick(function () {
        self.onWindowResize();
        self.initResponsiveFeatures();
        addWindowEventListener("resize", self.onWindowResize);
        compact(self.layout, self.verticalCompact);
        self.$emit("layout-updated", self.layout);
        self.updateHeight();
        self.$nextTick(function () {
          this.erd = elementResizeDetectorMaker({
            strategy: "scroll",
            callOnAdd: false,
          });
          this.erd.listenTo(self.$refs.item, function () {
            self.onWindowResize();
          });
        });
      });
    });
  },
  watch: {
    width: function (newval, oldval) {
      const self = this;
      this.$nextTick(function () {
        this.eventBus.$emit("updateWidth", this.width);
        if (oldval === null) {
          this.$nextTick(() => {
            this.$emit("layout-ready", self.layout);
          });
        }
        this.updateHeight();
      });
    },
    layout: function () {
      this.layoutUpdate();
    },
    colNum: function (val) {
      this.eventBus.$emit("setColNum", val);
    },
    rowHeight: function () {
      this.eventBus.$emit("setRowHeight", this.rowHeight);
    },
    isDraggable: function () {
      this.eventBus.$emit("setDraggable", this.isDraggable);
    },
    isResizable: function () {
      this.eventBus.$emit("setResizable", this.isResizable);
    },
    responsive() {
      if (!this.responsive) {
        this.$emit("update:layout", this.originalLayout);
        this.eventBus.$emit("setColNum", this.colNum);
      }
      this.onWindowResize();
    },
    maxRows: function () {
      this.eventBus.$emit("setMaxRows", this.maxRows);
    },
    margin() {
      this.updateHeight();
    },
  },
  methods: {
    layoutUpdate() {
      if (this.layout !== undefined && this.originalLayout !== null) {
        if (this.layout.length !== this.originalLayout.length) {
          let diff = this.findDifference(this.layout, this.originalLayout);
          if (diff.length > 0) {
            if (this.layout.length > this.originalLayout.length) {
              this.originalLayout = this.originalLayout.concat(diff);
            } else {
              this.originalLayout = this.originalLayout.filter((obj) => {
                return !diff.some((obj2) => {
                  return obj.i === obj2.i;
                });
              });
            }
          }
          this.lastLayoutLength = this.layout.length;
          this.initResponsiveFeatures();
        }

        compact(this.layout, this.verticalCompact);
        this.eventBus.$emit("updateWidth", this.width);
        this.updateHeight();

        this.$emit("layout-updated", this.layout);
      }
    },
    updateHeight() {
      this.mergedStyle = {
        height: this.containerHeight(),
      };
    },
    onWindowResize() {
      if (
        this.$refs !== null &&
        this.$refs.item !== null &&
        this.$refs.item !== undefined
      ) {
        this.width = this.$refs.item.offsetWidth;
      }
      this.eventBus.$emit("resizeEvent");
    },
    containerHeight() {
      if (!this.autoSize) return;
      const containerHeight =
        bottom(this.layout) * (this.rowHeight + this.margin[1]) +
        this.margin[1] +
        "px";
      return containerHeight;
    },
    dragEvent(eventName, id, x, y, h, w) {
      let l = getLayoutItem(this.layout, id);
      if (l === undefined || l === null) {
        l = { x: 0, y: 0 };
      }

      if (eventName === "dragmove" || eventName === "dragstart") {
        this.placeholder.i = id;
        this.placeholder.x = l.x;
        this.placeholder.y = l.y;
        this.placeholder.w = w;
        this.placeholder.h = h;
        this.$nextTick(function () {
          this.isDragging = true;
        });
        this.eventBus.$emit("updateWidth", this.width);
      } else {
        this.$nextTick(function () {
          this.isDragging = false;
        });
      }

      this.layout = moveElement(
        this.layout,
        l,
        x,
        y,
        true,
        this.preventCollision
      );
      compact(this.layout, this.verticalCompact);
      this.eventBus.$emit("compact");
      this.updateHeight();
      if (eventName === "dragend") this.$emit("layout-updated", this.layout);
    },
    resizeEvent: function (eventName, id, x, y, h, w) {
      let l = getLayoutItem(this.layout, id);
      if (l === undefined || l === null) {
        l = { h: 0, w: 0 };
      }
      let hasCollisions;
      if (this.preventCollision) {
        const collisions = getAllCollisions(this.layout, { ...l, w, h }).filter(
          (layoutItem) => layoutItem.i !== l.i
        );
        hasCollisions = collisions.length > 0;
        if (hasCollisions) {
          let leastX = Infinity,
            leastY = Infinity;
          collisions.forEach((layoutItem) => {
            if (layoutItem.x > l.x) leastX = Math.min(leastX, layoutItem.x);
            if (layoutItem.y > l.y) leastY = Math.min(leastY, layoutItem.y);
          });

          if (Number.isFinite(leastX)) l.w = leastX - l.x;
          if (Number.isFinite(leastY)) l.h = leastY - l.y;
        }
      }

      if (!hasCollisions) {
        l.w = w;
        l.h = h;
      }

      if (eventName === "resizestart" || eventName === "resizemove") {
        this.placeholder.i = id;
        this.placeholder.x = x;
        this.placeholder.y = y;
        this.placeholder.w = l.w;
        this.placeholder.h = l.h;
        this.$nextTick(function () {
          this.isDragging = true;
        });
        this.eventBus.$emit("updateWidth", this.width);
      } else {
        this.$nextTick(function () {
          this.isDragging = false;
        });
      }

      if (this.responsive) this.responsiveGridLayout();

      compact(this.layout, this.verticalCompact);
      this.eventBus.$emit("compact");
      this.updateHeight();

      if (eventName === "resizeend") this.$emit("layout-updated", this.layout);
    },

    responsiveGridLayout() {
      let newBreakpoint = getBreakpointFromWidth(this.breakpoints, this.width);
      let newCols = getColsFromBreakpoint(newBreakpoint, this.cols);

      if (this.lastBreakpoint != null && !this.layouts[this.lastBreakpoint])
        this.layouts[this.lastBreakpoint] = cloneLayout(this.layout);

      let layout = findOrGenerateResponsiveLayout(
        this.originalLayout,
        this.layouts,
        this.breakpoints,
        newBreakpoint,
        this.lastBreakpoint,
        newCols,
        this.verticalCompact
      );
      this.layouts[newBreakpoint] = layout;
      if (this.lastBreakpoint !== newBreakpoint) {
        this.$emit("breakpoint-changed", newBreakpoint, layout);
      }
      this.$emit("update:layout", layout);
      this.lastBreakpoint = newBreakpoint;
      this.eventBus.$emit(
        "setColNum",
        getColsFromBreakpoint(newBreakpoint, this.cols)
      );
    },

    initResponsiveFeatures() {
      this.layouts = Object.assign({}, this.responsiveLayouts);
    },

    findDifference(layout, originalLayout) {
      let uniqueResultOne = layout.filter(function (obj) {
        return !originalLayout.some(function (obj2) {
          return obj.i === obj2.i;
        });
      });

      let uniqueResultTwo = originalLayout.filter(function (obj) {
        return !layout.some(function (obj2) {
          return obj.i === obj2.i;
        });
      });

      return uniqueResultOne.concat(uniqueResultTwo);
    },
  },
};
</script>
