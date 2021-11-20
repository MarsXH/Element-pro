<script>
import ElDrawer from "element-ui/lib/drawer";
import { throttle, debounce } from "element-pro/src/utils/util.js";
export default {
  name: "DdDrawer",
  props: Object.assign({}, ElDrawer.props, {
    drag: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "30%",
    },
    maxSize: {
      type: String,
      default: "100%",
    },
    minSize: {
      type: String,
      default: "0%",
    },
  }),
  data() {
    return {
      // currentVisible: this.visible,
      drawerSize: 0,
      drawerMaxSize: 0,
      drawerMinSize: 0,
      clientSize: 0,
      dragDirection: "row",
      moveType: false,
      localWrapperClosable: this.wrapperClosable
    };
  },
  computed: {
    cursorType() {
      return this.moveType
        ? this.dragDirection === "row"
          ? "ew-resize"
          : "ns-resize"
        : "default";
    },
  },
  mounted() {
    window.onresize = debounce(
      () => {
        this.clientSize =
          this.dragDirection === "row"
            ? document.documentElement.clientWidth
            : document.documentElement.clientHeight;
      },
      500,
      false
    );
  },
  methods: {
    closeDrawer() {
      this.$refs.drawer.closeDrawer();
    },
    onMousedown(e) {
      e.stopPropagation()
      this.localWrapperClosable = false
      this.moveType = true;
      let currentSize = 0;
      document.onmousemove = throttle((e) => {
        switch (this.direction) {
          case "btt":
            currentSize = this.clientSize - e.clientY;
            break;
          case "ttb":
            currentSize = e.clientY;
            break;
          case "ltr":
            currentSize = e.clientX;
            break;
          case "rtl":
            currentSize = this.clientSize - e.clientX;
            break;
          default:
            break;
        }
        if (
          currentSize > this.drawerMinSize &&
          currentSize < this.drawerMaxSize
        ) {
          this.drawerSize = currentSize;
        }
      }, 60);
      document.onmouseup = (e) => {
        e.stopPropagation()
        setTimeout(() => {
          this.localWrapperClosable = this.wrapperClosable
        }, 0);
        this.moveType = false;
        document.onmousemove = document.onmouseup = null;
      };
      
    },
    initSize() {
      this.dragDirection =
        this.direction === "btt" || this.direction === "ttb" ? "colume" : "row";
      this.clientSize =
        this.dragDirection === "row"
          ? document.documentElement.clientWidth
          : document.documentElement.clientHeight;
      this.drawerSize =
        this.size.indexOf("%") != -1
          ? (this.clientSize * parseFloat(this.size)) / 100
          : parseFloat(this.size);
      this.drawerMaxSize =
        this.maxSize.indexOf("%") != -1
          ? (this.clientSize * parseFloat(this.maxSize)) / 100
          : parseFloat(this.maxSize);
      this.drawerMinSize =
        this.minSize.indexOf("%") != -1
          ? (this.clientSize * parseFloat(this.minSize)) / 100
          : parseFloat(this.minSize);
    },
  },
  watch: {
    visible: {
      handler: function(value) {
        if (value) {
          this.initSize();
        }
      },
      immediate: true,
    },
  },
  render() {
    const defaultProps = {};
    Object.keys(ElDrawer.props).forEach((k) => {
      if (k === 'wrapperClosable') {
        this.localWrapperClosable !== undefined && (defaultProps.wrapperClosable = this.localWrapperClosable);
      } else {
        this[k] !== undefined && (defaultProps[k] = this[k]);
      }
      return defaultProps[k];
    });
    const props = { ...defaultProps, size: this.drawerSize + "px" };
    const style = {
      cursor: this.cursorType,
      userSelect: this.moveType ? "none" : "auto",
    };
    const drawer = (
      <el-drawer ref="drawer" {...{ props }} on={this.$listeners} style={style}>
        {this.drag ? (
          <i
            ref="line"
            slot="default"
            class={"dd-drawer-move-line dd-drawer-move-line__" + this.direction}
            onMousedown={(e) => this.onMousedown(e)}
          ></i>
        ) : null}
        {Object.keys(this.$slots).map((name) => (
          <template slot={name}>{this.$slots[name]}</template>
        ))}
      </el-drawer>
    );
    return drawer;
  },
};
</script>
