---
title: Statistic 数据统计
---

# Statistic 数据统计

新增了`<ep-statistic>`数据统计组件。

## 基本

::: demo

```html
<template>
  <div>
    <ep-statistic
      title="Active Users"
      :value="112893"
      style="margin-right: 50px"
    />
    <br />
    <ep-statistic
      title="Account Balance (CNY)"
      :precision="2"
      :value="112893"
    />
  </div>
</template>
```

:::

## 单位

::: demo 通过前缀和后缀添加单位

```html
<template>
  <div>
    <ep-statistic title="Feedback" :value="1128" style="margin-right: 50px">
      <template slot="suffix">
        <i class="el-icon-star-off"></i>
      </template>
    </ep-statistic>
    <br />
    <ep-statistic title="Unmerged" :value="93" class="demo-class">
      <template slot="suffix">
        <span> / 100</span>
      </template>
    </ep-statistic>
  </div>
</template>
```

:::

## 卡片中使用

::: demo

```html
<template>
  <div style="width: 50%; background: #ECECEC; padding: 30px">
    <el-row :gutter="16">
      <el-col :span="12">
        <el-card>
          <ep-statistic
            title="Feedback"
            :value="11.28"
            :precision="2"
            suffix="%"
            :value-style="{ color: '#3f8600' }"
            style="margin-right: 50px"
          >
            <template slot="prefix">
              <i class="el-icon-top"></i>
            </template>
          </ep-statistic>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <ep-statistic
            title="Idle"
            :value="9.3"
            :precision="2"
            suffix="%"
            class="demo-class"
            :value-style="{ color: '#cf1322' }"
          >
            <template slot="prefix">
              <i class="el-icon-bottom"></i>
            </template>
          </ep-statistic>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
```

:::

## 倒计时

::: demo

```html
<template>
  <div>
    <ep-statistic-countdown
      title="Countdown"
      :value="deadline"
      style="margin-right: 50px"
      @finish="onFinish"
    />
    <br />
    <ep-statistic-countdown
      title="Million Seconds"
      :value="deadline"
      format="HH:mm:ss:SSS"
      style="margin-right: 50px"
    />
    <br />
    <ep-statistic-countdown
      title="Day Level"
      :value="deadline"
      format="D 天 H 时 m 分 s 秒"
    />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        deadline: Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30,
      };
    },
    methods: {
      onFinish() {
        console.log("finished!");
      },
    },
  };
</script>
```

:::

## API

### Statistic Attributes

| 参数             | 说明             | 类型                          | 默认值 |
| :--------------- | :--------------- | :---------------------------- | ------ |
| decimalSeparator | 设置小数点       | string                        | .      |
| formatter        | 自定义数值展示   | slot \| ({h, value}) => VNode | -      |
| groupSeparator   | 设置千分位标识符 | string                        | ,      |
| precision        | 数值精度         | number                        | -      |
| prefix           | 设置数值的前缀   | string \| slot                | -      |
| suffix           | 设置数值的后缀   | string \| slot                | -      |
| title            | 设置数值的前缀   | string \| slot                | -      |
| value            | 数值内容         | string \| number              | -      |
| valueStyle       | 设置数值的样式   | style                         | -      |

### StatisticCountdown Attributes

| 参数       | 说明                          | 类型             | 默认值     |
| :--------- | :---------------------------- | :--------------- | ---------- |
| format     | 格式化倒计时展示，参考 moment | string           | 'HH:mm:ss' |
| prefix     | 设置数值的前缀                | string \| slot   | -          |
| suffix     | 设置数值的后缀                | string \| slot   | -          |
| title      | 数值的标题                    | string \| slot   | -          |
| value      | 数值内容                      | string \| number | -          |
| valueStyle | 设置数值的样式                | style            | -          |

### StatisticCountdown Events

|dd-statistic-countdown Events

| 事件名称 | 说明             | 回调参数   |
| :------- | :--------------- | :--------- |
| finish   | 倒计时完成时触发 | () => void |
