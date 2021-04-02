<template>
  <div>
    <div class="echarts"
         id="echartsone"
         ref="echartsone"
         v-on-echart-resize></div>

  </div>
</template>

<script>
// import elementResizeDetectorMaker from "element-resize-detector"
import "./chart.resize";
export default {
  data () {
    return {

    }
  },
  methods: {
    echarts () {
      var mychart = this.$echarts.init(this.$refs.echartsone)
      var option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },

        series: [{
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar'
        }]
      }
      mychart.setOption(option, true)

    }
  },
  mounted () {
    this.echarts()
    // window.onresize = () => {
    //   // 基于准备好的dom，初始化echarts实例
    //   let myChart = this.$echarts.init(document.getElementById('echartsone'));
    //   myChart.resize();
    // };

    //   let erd = elementResizeDetectorMaker();
    //   let that = this;
    //   erd.listenTo(this.$refs.echartsone, (element) => {
    //     let width = element.offsetWidth;
    //     let height = element.offsetHeight;
    //     that.$nextTick(() => {
    //       //使echarts尺寸重置
    //       // that.echarts.resize();
    //     });
    //   });
  },
}
</script>

<style lang="less" scoped>
.echarts {
  width: 100%;
  height: 30vh;
}
</style>