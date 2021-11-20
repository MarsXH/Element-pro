<template>
  <div class="dd-search-form">
    <div class="search-container">
      <div class="search-wrapper">
        <div v-for="(item, index) in searchFormItems" :key="index" class="search-item">
          <label class="search-label">{{  item.label }}</label>
          <ep-form-item v-model="searchFormData[item.name]" :properties="item.properties"></ep-form-item>
        </div>
        <div class="search-item">
          <slot name="search-btn"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DdSearchForm",
  props: {
    searchFormData: {
      type: Object,
    },
    searchFormItems: {
      type: Array,
      default: () => [
        {
          name: "keyword",
          label: "",
          type: FormItemType.INPUT || "input",
          placeholder: "请输入关键字",
        },
      ],
    },
  },
};
</script>
