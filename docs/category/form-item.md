---
title: FormItem 表单项
---

# FormItem 表单项

集成封装了各表单项，可通过传入配置项生成对应的表单项，支持原组件的所有配置项。

## Input 输入框

::: demo 通过`drag`可设置侧边栏可拖动，及可拖动的最小宽度和最大宽度。

```html
<template>
  <ep-form-item v-model="c" :properties="properties"></ep-form-item>
</template>
<script>
  export default {
    data() {
      return {
        c: '123',
        properties: {
          type: "input"
        }
      };
    },
  };
</script>
```

:::