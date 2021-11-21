<script>
import classNames from "classnames";
import {
  getPropsData,
  filterEmpty,
  getListeners,
} from "element-pro/src/depend-utils/props-util";
import { cloneElement } from "element-pro/src/depend-utils/vnode";
import EpTimelineItem from "./timeline-item.vue";

export default {
  name: "EpTimeline",
  props: {
    mode: {
      type: String,
      default: "blue",
    },
    pending: {
      type: Boolean | String,
      default: false,
    },
    pendingDot: {
      type: String,
      default: "",
    },
    reverse: {
      type: Boolean,
      default: false,
    },
  },
  inject: {},
  render() {
    const { reverse, mode } = this;

    const pendingDot = pending || this.$slots.pendingDot;
    const pending = pending || this.$slots.pending;
    const pendingNode = typeof pending === "boolean" ? null : pending;
    const classString = classNames("dd-timeline", {
      [`dd-timeline-pending`]: !!pending,
      [`dd-timeline-reverse`]: !!reverse,
      [`dd-timeline-${mode}`]: !!mode,
    });
    const children = filterEmpty(this.$slots.default);

    const pendingItem = pending ? (
      <EpTimelineItem pending={!!pending}>
        <template slot="dot">
          {pendingDot || <i class="el-icon-loading"></i>}
        </template>
        {pendingNode}
      </EpTimelineItem>
    ) : null;

    const timeLineItems = reverse
      ? [pendingItem, ...children.reverse()]
      : [...children, pendingItem];

    const getPositionCls = (ele, idx) => {
      const eleProps = getPropsData(ele);
      if (mode === "alternate") {
        if (eleProps.position === "right") return `dd-timeline-item-right`;
        if (eleProps.position === "left") return `dd-timeline-item-left`;
        return idx % 2 === 0
          ? `dd-timeline-item-left`
          : `dd-timeline-item-right`;
      }
      if (mode === "left") return `dd-timeline-item-left`;
      if (mode === "right") return `dd-timeline-item-right`;
      if (eleProps.position === "right") return `dd-timeline-item-right`;
      return "";
    };

    // Remove falsy items
    const truthyItems = timeLineItems.filter((item) => !!item);
    const itemsCount = truthyItems.length;
    const lastCls = `dd-timeline-item-last`;
    const items = truthyItems.map((ele, idx) => {
      const pendingClass = idx === itemsCount - 2 ? lastCls : "";
      const readyClass = idx === itemsCount - 1 ? lastCls : "";
      return cloneElement(ele, {
        class: classNames([
          !reverse && !!pending ? pendingClass : readyClass,
          getPositionCls(ele, idx),
        ]),
      });
    });

    const timelineProps = {
      props: this.$props,
      class: classString,
      on: getListeners(this),
    };
    return <ul {...timelineProps}>{items}</ul>;
  },
};
</script>
