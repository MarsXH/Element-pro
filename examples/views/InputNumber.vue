<template>
  <div class="ep-input-number">
    <el-card 
      class="box-card"
      header="示例"
      style="margin-bottom: 24px;">
      <h5>自定义头部和尾部</h5>
      <ep-input-number
        v-model="num"
        :controls="false">
        <span slot="prefix">￥</span>
        <span slot="suffix">元</span>
      </ep-input-number>
      <br>
      <br>
      <ep-input-number
        v-model="num"
        :controls="true">
        <span slot="prefix">￥</span>
        <span slot="suffix">元</span>
      </ep-input-number>
      <br>
      <br>
      <ep-input-number
        v-model="num"
        :controls="true"
        controls-position="right">
        <span slot="prefix">￥</span>
        <span slot="suffix">元</span>
      </ep-input-number>

      <h5>自定义前置和后置</h5>
      <ep-input-number
        v-model="num"
        :controls="false"
      >
        <span slot="prepend">净含量</span>
        <span slot="append">克</span>
      </ep-input-number>
      <br>
      <br>
      <ep-input-number
        v-model="num"
        :controls="false"
        prefix-icon="el-icon-coin"
        suffix-icon="el-icon-coin"
      >
        <span slot="prepend">净含量</span>
        <span slot="append">克</span>
      </ep-input-number>

      <h5>自定义图标</h5>
      <ep-input-number
        v-model="num"
        :controls="true"
        prefix-icon="el-icon-coin"
        suffix-icon="el-icon-coin"
      >
      </ep-input-number>
      <br>
      <br>
      <ep-input-number
        v-model="num"
        :controls="true"
        prefix-icon="el-icon-coin"
        suffix-icon="el-icon-coin"
        controls-position="right"
      >
      </ep-input-number>

      <h5>混合型</h5>
      <ep-input-number
        v-model="num"
        :controls="true"
        controls-position="right"
      >
        <span slot="prefix">￥</span>
        <span slot="suffix">亿</span>
        <el-select v-model="select" slot="prepend" placeholder="请选择">
          <el-option label="毛利润" value="1"></el-option>
          <el-option label="净利润" value="2"></el-option>
        </el-select>
      </ep-input-number>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "EpInputNumber",
  data() {
    return {
      num: 5,
      select: "",
    };
  },
};
</script>

<style>
.ep-input-number .el-input {
  width: 320px;
}
.ep-input-number .el-select .el-input {
  width: 100px;
}
</style>
