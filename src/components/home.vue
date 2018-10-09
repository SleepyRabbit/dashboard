<template>
  <div class="home">
    <button @click="onLogin">Login</button>
    <div id="myChart" ></div>
    <div id="myChart1" ></div>
  </div>
</template>

<script>

  let echarts = require("echarts/lib/echarts");
  require("echarts/lib/chart/bar");
  require("echarts/lib/chart/line");
  require("echarts/lib/component/tooltip");
  require("echarts/lib/component/title");

export default {
  name: 'home',
  data () {
    return {
    }
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine: function() {
      let mychart = echarts.init(document.getElementById("myChart"));
      mychart.setOption({
        title: { text: '在Vue中使用echarts' },
        tooltip: {},
        xAxis: {
          data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      });

      let option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
        }]
      };

      let mychart1 = echarts.init(document.getElementById("myChart1"));
      mychart1.setOption(option);

    },
    onLogin: function () {
      window.location.href = "https://account.xiaomi.com/pass/serviceLogin";
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#myChart {
  width : 300px;
  height: 300px;
}

#myChart1 {
  width : 300px;
  height: 300px;
}

</style>
