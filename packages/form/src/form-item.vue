<script>
export default {
  name: "EpFormItem",
  props: {
    properties: {
      type: Object,
      default() {
        return {
          type: "", // 标签类型
        };
      },
    },
    value: { default: "" },
  },
  watch: {
    values: {
      handler: function handler(values) {
        this.updating = true;
        this.$emit("input", values);
        this.updating = false;
      },
      deep: true,
      immediate: true,
    },
  },
  data() {
    return {
      values: this.value,
      updating: false,
    };
  },
  render(h) {
    const vm = this;
    const elements = vm.getElements(h);
    const { type } = vm.properties;
    return elements[type];
  },
  created() {
    this.$emit("input", this.values);
  },
  methods: {
    getElements(h) {
      const vm = this;
      const item = vm.properties;
      const value = vm.value;
      const modelEvents = {
        input: function (value) {
          console.log(111);
          console.log(value);
          vm.values = value;
        },
        ...vm.filterEvents(item),
      };
      const formEachItem = h(
        item.type.startWith("el") ? `${item.type}` : `el-${item.type}`,
        {
          style: item.style || {},
          attrs: {
            ...vm.filterAttrs(item),
          },
          props: {
            value,
            ...item,
          },
          on: {
            ...modelEvents,
          },
        }
      );
      const button = h(
        "el-button",
        {
          style: item.style || {},
          attrs: {
            ...vm.filterAttrs(item),
            type: item._type,
          },
          props: {
            ...item,
            type: item._type,
          },
          on: {
            ...modelEvents,
          },
        },
        item.text || item.value
      );
      // select
      const select = h(
        "el-select",
        {
          style: item.style || {},
          attrs: {
            ...vm.filterAttrs(item),
          },
          props: {
            value,
            ...item,
          },
          on: {
            ...modelEvents,
          },
        },

        (item.options || []).map((option) => {
          return h("el-option", {
            attrs: {
              ...vm.filterAttrs(option),
            },
            props: {
              key: option.value,
              ...option,
            },
          });
        })
      );
      const radios = (item.options || []).map((option) => {
        option = {
          name: item.name,
          ...option,
        };
        return h(
          "el-radio",
          {
            style: item.style || {},
            attrs: {
              ...vm.filterAttrs(option),
            },
            props: {
              value,
              ...option,
            },
            on: {
              ...modelEvents,
            },
          },
          [option.text]
        );
      });
      const datePicker = h("el-date-picker", {
        style: item.style || {},
        attrs: {
          ...vm.filterAttrs(item),
          type: item._type,
        },
        props: {
          value,
          ...item,
          type: item._type,
        },
        on: {
          ...modelEvents,
        },
      });
      const input = h("el-input", {
        style: item.style || {},
        attrs: {
          ...vm.filterAttrs(item),
        },
        props: {
          value,
          ...item,
        },
        on: {
          ...modelEvents,
        },
      });
      return {
        [item.type]: formEachItem,
        button: button,
        select: select,
        input: input,
        radios: radios,
        datePicker: datePicker,
        "date-picker": datePicker,
      };
    },
    filterAttrs(item = {}) {
      const keys = Object.keys(item);
      const attrs = {};

      keys.forEach((key) => {
        const value = item[key];

        if (
          typeof value === "number" ||
          typeof value === "string" ||
          typeof value === "boolean"
        ) {
          attrs[key] = value;
        }
      });

      return attrs;
    },
    filterEvents(item = {}) {
      const keys = Object.keys(item);
      const events = {};

      keys.forEach((key) => {
        const value = item[key];

        if (typeof value === "function") {
          events[key] = value;
        }
      });

      return events;
    },
  },
};
</script>
