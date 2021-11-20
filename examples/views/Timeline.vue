<template>
  <div class="ep-timeline">
    <el-card 
      class="box-card"
      header="示例"
      style="margin-bottom: 24px;">
      <el-radio-group v-model="mode">
        <el-radio-button label="left">左侧排列</el-radio-button>
        <el-radio-button label="alternate">交替排列</el-radio-button>
        <el-radio-button label="right">右侧排列</el-radio-button>
      </el-radio-group>
      <br>
      <ep-timeline :mode="mode" :reverse="reverse"  style="margin-top: 30px">
        <ep-timeline-item>Create a services site 2015-09-01</ep-timeline-item>
        <ep-timeline-item color="green">
          Solve initial network problems 2015-09-01
        </ep-timeline-item>
        <ep-timeline-item>
          <i slot="dot" class="el-icon-time" style="font-size: 16px;"></i>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
          beatae vitae dicta sunt explicabo.
        </ep-timeline-item>
        <ep-timeline-item color="red">
          Network problems being solved 2015-09-01
        </ep-timeline-item>
        <ep-timeline-item>Create a services site 2015-09-01</ep-timeline-item>
        <ep-timeline-item>
          <i slot="dot" class="el-icon-time" style="font-size: 16px;"></i>
          Technical testing 2015-09-01
        </ep-timeline-item>
        <span slot="pending">Recording...</span>
      </ep-timeline>
      <el-button type="primary" @click="reverse = !reverse">切换排序</el-button>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "EpTimeline",
  data() {
    return {
      mode: "alternate",
      reverse: false,
    };
  },
};
</script>
