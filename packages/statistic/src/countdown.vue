<script>
import * as moment from "moment";
import {
  interopDefault,
  getListeners,
  formatCountdown,
} from "element-pro/src/utils/util.js";
import Statistic from "./statistic";
const REFRESH_INTERVAL = 1000 / 30;

function getTime(value) {
  return moment(value).valueOf();
}

export default {
  name: "EpStatisticCountdown",
  props: Object.assign({}, Statistic.props, {
    format: {
      type: String,
      default: "HH:mm:ss",
    },
  }),

  created() {
    this.countdownId = undefined;
  },

  mounted() {
    this.syncTimer();
  },

  updated() {
    this.syncTimer();
  },

  beforeDestroy() {
    this.stopTimer();
  },

  methods: {
    syncTimer() {
      const { value } = this.$props;
      const timestamp = getTime(value);
      if (timestamp >= Date.now()) {
        this.startTimer();
      } else {
        this.stopTimer();
      }
    },

    startTimer() {
      if (this.countdownId) return;
      this.countdownId = window.setInterval(() => {
        this.$refs.statistic.$forceUpdate();
        this.syncTimer();
      }, REFRESH_INTERVAL);
    },

    stopTimer() {
      const { value } = this.$props;
      if (this.countdownId) {
        clearInterval(this.countdownId);
        this.countdownId = undefined;

        const timestamp = getTime(value);
        if (timestamp < Date.now()) {
          this.$emit("finish");
        }
      }
    },

    formatCountdown({ value, config }) {
      const { format } = this.$props;
      return formatCountdown(value, { ...config, format });
    },

    valueRenderHtml: (node) => node,
  },

  render() {
    return (
      <Statistic
        ref="statistic"
        {...{
          props: {
            ...this.$props,
            valueRender: this.valueRenderHtml,
            formatter: this.formatCountdown,
          },
          on: getListeners(this),
        }}
      />
    );
  },
};
</script>
