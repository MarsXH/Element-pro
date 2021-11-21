<script>
if (typeof String.prototype.startWith != "function") {
  String.prototype.startWith = function (prefix) {
    return this.slice(0, prefix.length) === prefix;
  };
}
export default {
  name: "EpForm",
  props: {
    model: {
      type: Object,
    },
    formRef: {
      type: String,
      default() {
        return "epForm";
      },
    },
    config: {
      type: Object,
      default() {
        return {
          formAttr: {},
          rules: {},
          properties: {},
        };
      },
    },
    labelWidth: {
      type: String,
    },
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
    model: {
      handler(model, model2) {
        if (!this.updating) {
          this.values = this.mergeValues();
        } else {
          this.updating = false;
        }
      },
      immediate: true,
      deep: true,
    },
  },
  data() {
    return {
      updating: false,
      values: this.mergeValues(),
    };
  },
  render(h) {
    const vm = this;
    return h(
      "el-form",
      {
        props: {
          ...vm.config.formAttr,
          model: vm.values,
          labelWidth: vm.labelWidth,
        },
        ref: vm.formRef,
        nativeOn: {
          submit: (event) => {
            if (vm.config.formAttr.isPreventDefault) {
              // 阻止默认提交事件
              event.preventDefault();
            }
          },
        },
      },
      [
        h(vm.config.title ? "h3" : "span", vm.config.title || ""),
        h(vm.config.describe ? "p" : "span", vm.config.describe || ""),
        ...(vm.$slots.prepend || []),
        ...(vm.renderFormItems(h) || []),
        ...(vm.$slots.append || []),
      ]
    );
  },
  created() {
    this.$emit("input", this.values);
  },
  methods: {
    resetFields() {
      const vm = this;
      vm.$refs[vm.formRef].resetFields();
    },
    setFieldValue(key, value) {
      const vm = this;
      vm.values[key] = value;
    },
    setFieldsValue(obj) {
      const vm = this;
      Object.keys(obj).map((key) => {
        vm.values[key] = obj[key];
      });
    },
    getFieldsValue() {
      const vm = this;
      return JSON.parse(JSON.stringify(vm.values));
    },
    validate(cb) {
      const vm = this;
      vm.$refs[vm.formRef].validate(cb);
    },
    validateField(cb) {
      vm.$refs[vm.formRef].validateField(cb);
    },
    // 异步校验表单，直接返回values
    validateFields(cb) {
      const vm = this;
      return new Promise((resolve, reject) => {
        vm.$refs[vm.formRef].validate((valid, err) => {
          if (valid) resolve(JSON.parse(JSON.stringify(vm.values)));
          else reject(err);
        });
      });
    },
    mergeValues() {
      const vm = this;
      const { model } = vm;
      const { properties } = vm.config;

      let formData = {};
      Object.keys(properties).map((key) => {
        const { type, multiple } = properties[key];
        let defaultValue;
        if (type === "checkbox" || (type === "select" && multiple)) {
          defaultValue =
            defaultValue != null ? properties[key].defaultValue : [];
        } else {
          defaultValue = properties[key].defaultValue;
        }
        Object.assign(formData, {
          [key]: defaultValue,
        });
      });
      let mergeValues = {
        ...formData,
        ...model,
      };
      Object.keys(formData).forEach((key) => {
        // 强制设置多选的value为空数组，因为model可能会乱设置
        if (
          Array.isArray(formData[key]) &&
          formData[key].length === 0 &&
          (!model || !model[key])
        ) {
          mergeValues[key] = [];
        }
        const { type } = properties[key];
        // 如果是button
        if (type === "button") delete mergeValues[key];
      });
      return mergeValues;
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
    renderFormItems(h) {
      const vm = this;
      const { properties } = vm.config;

      return Object.keys(properties).map((key, index) => {
        return vm.renderFormItem(h, properties[key], key, index);
      });
    },
    renderFormItem(h, item, key) {
      const vm = this;
      const { values } = vm;
      const value = values[key] || null;
      const modelEvents = {
        input: function (value) {
          values[key] = value;
        },
        ...vm.filterEvents(item),
      };
      const { label, size } = item;

      return h(
        "el-form-item",
        {
          props: {
            prop: key,
            label,
            size,
          },
        },
        [
          h("ep-form-item", {
            props: {
              value,
              properties: item,
            },
            on: {
              ...modelEvents,
            },
          }),
        ]
      );
    },
  },
};
</script>
