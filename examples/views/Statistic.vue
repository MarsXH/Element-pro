<template>
  <div class="ep-statistic">
    <el-card 
      class="box-card"
      header="示例"
      style="margin-bottom: 24px;">
      <ep-statistic title="Active Users" :value="112893" style="margin-right: 50px" />
      <br>
      <ep-statistic title="Account Balance (CNY)" :precision="2" :value="112893" />
      <br>
      <ep-statistic title="Feedback" :value="1128" style="margin-right: 50px">
        <template slot="suffix">
          <i class="el-icon-star-off"></i>
        </template>
      </ep-statistic>
      <br>
      <ep-statistic title="Unmerged" :value="93" class="demo-class">
        <template slot="suffix">
          <span> / 100</span>
        </template>
      </ep-statistic>
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
      <ep-statistic-countdown
        title="Countdown"
        :value="deadline"
        style="margin-right: 50px"
        @finish="onFinish"
      />
      <br>
      <ep-statistic-countdown
        title="Million Seconds"
        :value="deadline"
        format="HH:mm:ss:SSS"
        style="margin-right: 50px"
      />
      <br>
      <ep-statistic-countdown title="Day Level" :value="deadline" format="D 天 H 时 m 分 s 秒" />
    </el-card>
  </div>
</template>

<script>
export default {
  name: "EpStatistic",
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
