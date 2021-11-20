---
title: Timeline 时间轴
---

# Timeline 时间轴

新增了`<ep-timeline>`和`<ep-timeline-item>`时间轴组件。

## 基本用法

展示用法。

::: demo

```html
<template>
  <ep-timeline>
    <ep-timeline-item>Create a services site 2015-09-01</ep-timeline-item>
    <ep-timeline-item
      >Solve initial network problems 2015-09-01</ep-timeline-item
    >
    <ep-timeline-item>Technical testing 2015-09-01</ep-timeline-item>
    <ep-timeline-item
      >Network problems being solved 2015-09-01</ep-timeline-item
    >
  </ep-timeline>
</template>
```

:::

## 圆圈颜色

展示用法。

::: demo 圆圈颜色，绿色用于已完成、成功状态，红色表示告警或错误状态，蓝色可表示正在进行或其他默认状态。

```html
<template>
  <ep-timeline>
    <ep-timeline-item color="green">
      Create a services site 2015-09-01
    </ep-timeline-item>
    <ep-timeline-item color="green">
      Create a services site 2015-09-01
    </ep-timeline-item>
    <ep-timeline-item color="red">
      <p>Solve initial network problems 1</p>
      <p>Solve initial network problems 2</p>
      <p>Solve initial network problems 3 2015-09-01</p>
    </ep-timeline-item>
    <ep-timeline-item>
      <p>Technical testing 1</p>
      <p>Technical testing 2</p>
      <p>Technical testing 3 2015-09-01</p>
    </ep-timeline-item>
    <ep-timeline-item color="gray">
      <p>Technical testing 1</p>
      <p>Technical testing 2</p>
      <p>Technical testing 3 2015-09-01</p>
    </ep-timeline-item>
    <ep-timeline-item color="gray">
      <p>Technical testing 1</p>
      <p>Technical testing 2</p>
      <p>Technical testing 3 2015-09-01</p>
    </ep-timeline-item>
  </ep-timeline>
</template>
```

:::

## 最后一个及排序

当任务状态正在发生，可用幽灵节点来表示当前的时间节点，可控制节点排序。

::: demo 当`pending`为真值时展示幽灵节点，如果`pending`是元素时可用于定制该节点内容，同时`pendingDot`将可以用于定制其轴点。`reverse`属性用于控制节点排序。

```html
<template>
  <div>
    <el-button type="primary" @click="reverse = !reverse">切换排序</el-button>
    <br />
    <ep-timeline :reverse="reverse" style="margin-top: 30px">
      <ep-timeline-item>
        <i slot="dot" class="el-icon-eleme"></i>
        Technical testing 2015-09-01
      </ep-timeline-item>
      <ep-timeline-item>
        Create a services site 2015-10-01
      </ep-timeline-item>
      <ep-timeline-item>
        Network problems being solved 2015-11-01
      </ep-timeline-item>
      <ep-timeline-item>
        Network problems being solved 2015-12-01
      </ep-timeline-item>
      <span slot="pending">Recording...</span>
    </ep-timeline>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        reverse: false,
      };
    },
  };
</script>
```

:::

## 自定义时间轴点

展示用法。

::: demo

```html
<template>
  <ep-timeline>
    <ep-timeline-item>Create a services site 2015-09-01</ep-timeline-item>
    <ep-timeline-item
      >Solve initial network problems 2015-09-01</ep-timeline-item
    >
    <ep-timeline-item color="red">
      <i slot="dot" class="el-icon-time" style="font-size: 16px;"></i>
      Technical testing 2015-09-01
    </ep-timeline-item>
    <ep-timeline-item
      >Network problems being solved 2015-09-01</ep-timeline-item
    >
  </ep-timeline>
</template>
```

:::

## 排列方式

::: demo 通过`mode`控制排列方式。

```html
<template>
  <div>
    <el-radio-group v-model="mode">
      <el-radio-button label="left">左侧排列</el-radio-button>
      <el-radio-button label="alternate">交替排列</el-radio-button>
      <el-radio-button label="right">右侧排列</el-radio-button>
    </el-radio-group>
    <br />
    <ep-timeline :mode="mode" style="margin-top: 30px">
      <ep-timeline-item>Create a services site 2015-09-01</ep-timeline-item>
      <ep-timeline-item color="green">
        Solve initial network problems 2015-09-01
      </ep-timeline-item>
      <ep-timeline-item>
        <i slot="dot" class="el-icon-time" style="font-size: 16px;"></i>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.
      </ep-timeline-item>
      <ep-timeline-item color="red">
        Network problems being solved 2015-09-01
      </ep-timeline-item>
      <ep-timeline-item>Create a services site 2015-09-01</ep-timeline-item>
      <ep-timeline-item>
        <i slot="dot" class="el-icon-time" style="font-size: 16px;"></i>
        Technical testing 2015-09-01
      </ep-timeline-item>
    </ep-timeline>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        mode: "alternate",
      };
    },
  };
</script>
```

:::

## API

### Timeline Attributes

| 参数        | 说明                                         | 类型                      | 可选值                     | 默认值                            |
| ----------- | -------------------------------------------- | ------------------------- | -------------------------- | --------------------------------- |
| pending     | 指定最后一个幽灵节点是否存在或内容           | boolean \| string \| slot | —                          | false                             |
| pending-dot | 当最后一个幽灵节点存在時，指定其时间图点     | string \| slot            | —                          | `<i class="el-icon-loading"></i>` |
| reverse     | 节点排序                                     | boolean                   | true \| false              | false                             |
| mode        | 通过设置 mode 可以改变时间轴和内容的相对位置 | String                    | left \| alternate \| right | —                                 |

### TimelineItem Attributes

| 参数     | 说明           | 类型           | 可选值                                         | 默认值 |
| -------- | -------------- | -------------- | ---------------------------------------------- | ------ |
| color    | 指定圆圈颜色   | string         | blue \| red \| green \| gray \| 或自定义的色值 | blue   |
| dot      | 自定义时间轴点 | string \| slot | —                                              | —      |
| position | 自定义节点位置 | String         | left \| right                                  | —      |
