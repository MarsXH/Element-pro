<template>
  <div class="ep-form-item">
    <el-card 
      class="box-card"
      header="示例"
      style="margin-bottom: 24px;">
      <!-- input -->
      <ep-form-item v-model="inputConfig.value" :properties="inputConfig.properties"></ep-form-item>
      <!-- select -->
      <ep-form-item v-model="selectConfig.value" :properties="selectConfig.properties"></ep-form-item>
      <!-- 多选 select -->
      <ep-form-item v-model="selectMultipleConfig.value" :properties="selectMultipleConfig.properties"></ep-form-item>
      <!-- radio -->
      <!-- <ep-form-item v-model="radioConfig.value" :properties="radioConfig.properties"></ep-form-item> -->
    </el-card>
  </div>
</template>

<script>
export default {
  name: "EpFormItem",
  data() {
    return {
      inputConfig: {
        value: "1",
        properties: {
          type: "input",
          size: "small",
          style: "width: 300px; color: blue;",
          // 其他 props
          placeholder: "请输入姓名",
          clearable: true,
        },
      },
      selectConfig: {
        value: "1",
        properties: {
          type: "select",
          style: "width: 300px;",
          options: [
            { value: "1", label: "男" },
            { value: "2", label: "女" },
          ],
          // 其他 props
          placeholder: "请选择性别",
          clearable: true,
        },
      },
      selectMultipleConfig: {
        value: ["2"],
        properties: {
          type: "select",
          style: "width: 300px;",
          options: [
            { value: "1", label: "男" },
            { value: "2", label: "女" },
            { value: "3", label: "不知道" },
            { value: "4", label: "不一定" },
          ],
          // 其他 props
          placeholder: "请选择性别",
          clearable: true,
          multiple: true,
        },
      },
      radioConfig: {
        value: "",
        properties: {
          type: "radios",
          name: "area",
          // style: 'width: 200px;',
          options: [
            { label: "1", text: "南方" },
            { label: "2", text: "北方" },
          ],
          // 其他 props
          size: "",
          placeholder: "请选择地区",
        },
      },
    };
  },
};
</script>
