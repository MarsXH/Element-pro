<template>
  <div class="ep-select">
    <el-card 
      class="box-card"
      header="示例"
      style="margin-bottom: 24px;">
      <ep-select
        v-model="value"
        multiple
        placeholder="请选择"
        collapse-tags
        extend-text-left="全部选中"
        extend-text-right="清除选中"
        @extend-left-click="onLeftClick"
        @extend-right-click="onRightClick"
        @popup-scroll="handleScroll"
        @popup-scroll-to-bottom="handleScrollToBottom"
        :space-to-bottom="0"
        style="width: 230px"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </ep-select>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "EpSelect",
  data() {
    return {
      value: [],
      options: [],
    };
  },
  created() {
    const list = [];
    for (let index = 0; index < 30; index++) {
      list.push({
        value: "选项" + index,
        label: "选项" + index,
      });
    }
    this.options = list;
  },
  methods: {
    onLeftClick() {
      this.value = this.options.map((item) => item.value);
    },
    onRightClick() {
      this.value = [];
    },
    handleScroll() {
      console.log("滚动中");
    },
    handleScrollToBottom() {
      console.log("到底了");
      if (this.options.length >= 300) return;
      const list = [];
      for (
        let index = this.options.length;
        index < this.options.length + 30;
        index++
      ) {
        list.push({
          value: "选项" + index,
          label: "选项" + index,
        });
      }
      this.options = this.options.concat(list);
    },
  },
};
</script>
