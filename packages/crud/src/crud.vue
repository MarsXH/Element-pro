<template>
  <div class="ep-crud"></div>
</template>

<script>
export default {
  name: "EpCrud",
  props: {
    itemName: {
      type: String,
      default: "",
    },
    tableData: {
      type: Array,
      default: () => [],
    },
    tableConfig: {
      type: Array,
      default: () => ({
        tableColumns: [],
      }),
    },
    searchFormData: {
      type: Array,
      default: () => ({}),
    },
    searchFormConfig: {
      type: Array,
      default: () => [],
    },
    editFormData: {
      type: Array,
      default: () => ({}),
    },
    editFormConfig: {
      type: Array,
      default: () => ({}),
    },
  },
};
</script>
