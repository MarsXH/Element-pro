<script>
import classNames from "classnames";
import {
  getOptionProps,
  getComponentFromProp,
  getListeners,
} from "element-pro/src/depend-utils/props-util";
export default {
  name: "EpTimelineItem",
  props: {
    color: {
      type: String,
      default: "blue",
    },
    pending: {
      type: Boolean | String,
      default: false,
    },
    dot: {
      type: String,
      default: "",
    },
    position: {
      type: String,
      default: "",
    },
  },
  render() {
    const { color, pending } = this;

    const dot = this.dot || this.$slots.dot;
    const itemClassName = classNames({
      "dd-timeline-item": true,
      "dd-timeline-item-pending": pending,
    });

    const dotClassName = classNames({
      "dd-timeline-item-head": true,
      "dd-timeline-item-head-custom": dot,
      [`dd-timeline-item-head-${color}`]: true,
    });
    const liProps = {
      class: itemClassName,
      on: getListeners(this),
    };
    return (
      <li {...liProps}>
        <div class={`dd-timeline-item-tail`} />
        <div
          class={dotClassName}
          style={{
            borderColor: /blue|red|green|gray/.test(color) ? undefined : color,
          }}
        >
          {dot}
        </div>
        <div class={`dd-timeline-item-content`}>{this.$slots.default}</div>
      </li>
    );
  },
};
</script>
