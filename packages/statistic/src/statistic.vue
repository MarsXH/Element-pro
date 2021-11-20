<script>
import StatisticNumber from "./number";

import { getComponentFromProp } from "element-pro/src/utils/util.js";

const StatisticProps = {
  decimalSeparator: {
    type: String,
    default: ".",
  },
  groupSeparator: {
    type: String,
    default: ",",
  },
  format: {
    type: String,
    default: null,
  },
  value: {
    type: [String, Number, Object],
  },
  valueStyle: {
    type: null,
  },
  valueRender: {
    type: null,
  },
  formatter: {
    type: null,
  },
  precision: {
    type: Number,
  },
  prefix: {
    type: null,
  },
  suffix: {
    type: null,
  },
  title: {
    type: null,
  },
};

export default {
  name: "DdStatistic",
  props: StatisticProps,

  render() {
    const { value = 0, valueStyle, valueRender } = this.$props;
    const prefixCls = "dd-statistic";

    const title = getComponentFromProp(this, "title");
    let prefix = getComponentFromProp(this, "prefix");
    let suffix = getComponentFromProp(this, "suffix");
    const formatter = getComponentFromProp(this, "formatter", {}, false);
    let valueNode = (
      <StatisticNumber
        {...{ props: { ...this.$props, prefixCls, value, formatter } }}
      />
    );
    if (valueRender) {
      valueNode = valueRender(valueNode);
    }

    return (
      <div class={prefixCls}>
        {title && <div class={`${prefixCls}-title`}>{title}</div>}
        <div style={valueStyle} class={`${prefixCls}-content`}>
          {prefix && (
            <span class={`${prefixCls}-content-prefix`}>{prefix}</span>
          )}
          {valueNode}
          {suffix && (
            <span class={`${prefixCls}-content-suffix`}>{suffix}</span>
          )}
        </div>
      </div>
    );
  },
};
</script>
