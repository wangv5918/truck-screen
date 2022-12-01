/*
 * @Description:
 * @Date: 2022-11-30 13:12:23
 * @LastEditTime: 2022-12-01 13:46:41
 */
//页面加载完成后执行
window.onload = function () {
  //今日上班情况 start
  var WorkTodaySituation = echarts.init(
    document.getElementById("WorkTodaySituation")
  );
  var WorkTodaySituationOption = {
    tooltip: {
      trigger: "item",
    },
    color: ["#088FF2", "#2BCD84", "#FCBB35"],
    legend: {
      top: "5%",
      right: "2%",
      width: "20%",
      data: [
        {
          name: "白班人数",
          textStyle: {
            color: "#088FF2",
          },
        },
        {
          name: "晚班人数",
          textStyle: {
            color: "#2BCD84",
          },
        },
        {
          name: "未上班人数",
          textStyle: {
            color: "#FCBB35",
          },
        },
      ],
      icon: "circle",
    },
    graphic: [
      {
        //环形图中间添加文字
        type: "text", //通过不同top值可以设置上下显示
        left: "center",
        top: "45%",
        style: {
          text: "683",
          textAlign: "center",
          fill: "#fff", //文字的颜色
          width: 30,
          height: 30,
          fontSize: 36,
          fontWeight: "bold",
          fontFamily: "PingFangSC-Semibold, PingFang SC",
        },
      },
      {
        //环形图中间添加文字
        type: "text", //通过不同top值可以设置上下显示
        left: "center",
        top: "55%",
        style: {
          text: "车间总人数",
          textAlign: "center",
          fill: "#D5E5FA", //文字的颜色
          width: 30,
          height: 30,
          fontSize: 10,
          fontFamily: "PingFangSC-Semibold, PingFang SC",
        },
      },
    ],
    series: [
      {
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        itemStyle: {
          normal: {
            label: {
              show: true,
              fontSize: 20,
              position: "inner",
              color: "#fff",
              formatter: "{c}" + "%", //自定义显示内容
            },
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 52, name: "白班人数" },
          { value: 31, name: "晚班人数" },
          { value: 17, name: "未上班人数" },
        ],
      },
    ],
  };
  WorkTodaySituation.setOption(WorkTodaySituationOption);
  //检修节拍图 start
  var barMaintenance = echarts.init(document.getElementById("barMaintenance"));
  //检修进度 映射
  var xAxisMapper = {
    1: "转向架\n拆卸",
    2: "构架清洗、\n打磨、补漆",
    3: "构架\n检修",
    4: "部件\n安装",
    5: "转向架\n落成",
    6: "静压载\n试验",
    7: "转向架\n完工",
    8: "转向架\n交检、交验",
  };
  var barMaintenanceOption = {
    grid: {
      lineStyle: {
        color: "#fff",
        width: 1,
        type: "dashed",
      },
    },
    xAxis: {
      // type: 'category',
      // data:[1,2,3,4,5,6,7,8,],
      // data: ["转向架拆卸", "构架清洗、打磨、补漆", "构架检修", "部件安装", "转向架落成", "静压载试验", "转向架完工", "转向架交检、交验"],
      position: "top",
      axisTick: {
        show: true,
        lineStyle: {
          color: "#fff", //---默认取轴线的颜色
          width: 1,
          type: "solid",
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: "dashed",
          color: "#A8C1DE", //---默认取轴线的颜色
        },
      },
      splitNumber: 8, //坐标轴的分割段数
      axisLabel: {
        width: 80,
        height: 100,
        overflow: "breakAll",
        inside: true, //刻度标签是否朝内
        margin: -0, //---刻度标签与轴线之间的距离
        showMinLabel: true, //是否显示最小刻度标签
        showMaxLabel: true, //是否显示最大刻度标签
        interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
        // verticalAlign: "top", //---刻度标签与轴线之间的距离
        lineHeight: 15,
        color: "#fff",
        formatter: function (value) {
          return xAxisMapper[value];
        },
      },
      boundaryGap: [0, 0], //坐标轴两边留白策略
      nameLocation: "middle", //坐标轴名称显示位置
      name: "（检修进度）", //坐标轴名称
      nameTextStyle: {
        verticalAlign: "bottom", //坐标轴名称的显示位置
        color: "#5C6377", //坐标轴名称的颜色
        fontSize: 12, //坐标轴名称的字体大小
        lineHeight: 35, //坐标轴名称的行高
      },
      offset: 10,
      min: 0, //坐标轴刻度最小值
      max: 8, //坐标轴刻度最大值
      scale: true, //是否从0开始
    },
    yAxis: {
      type: "category", //坐标轴类型
      inverse: true, //是否是反向坐标轴
      axisLine: {
        show: true, //是否显示坐标轴轴线
        lineStyle: {
          color: "#A8C1DE", //---默认取轴线的颜色
          width: 2,
          type: "solid",
        },
      },
      axisLabel: {
        color: "#fff",
      },
      name: "(车组号)", //坐标轴名称
      nameLocation: "start", //坐标轴名称显示位置
      nameTextStyle: {
        window: 100,
        align: "right",
        verticalAlign: "top", //坐标轴名称的显示位置
        color: "#5C6377", //坐标轴名称的颜色
        fontSize: 12, //坐标轴名称的字体大小
        lineHeight: 35, //坐标轴名称的行高
      },
      axisTick: {
        show: false,
      },
      data: ["10086", "10095"], //车组号
    },
    series: [
      {
        type: "bar",
        data: [7, 1], //检修进度
        itemStyle: {
          color: "#6C9CD9",
        },
        barWidth: "32",
      },
    ],
  };
  barMaintenance.setOption(barMaintenanceOption);
  //年度检修计划 start
  var yearRepairPlanChart = echarts.init(
    document.getElementById("yearRepairPlanChart")
  );
  var yearRepairPlanOption = {
    xAxis: {
      type: "category",
      axisLabel: {
        color: "#fff",
      },
      axisTick: {
        show: false,
      },
      data: ["CRH1", "CRH3", "CR4400AF"],
    },
    yAxis: {
      type: "value",
      splitLine: {
        show: true,
        lineStyle: {
          type: "dashed",
          color: "#A8C1DE", //---默认取轴线的颜色
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: "#fff",
      },
    },
    grid: {
      top: "15%",
      left: "5%",
      right: "5%",
      bottom: "15%",
      containLabel: true,
    },
    legend: {
      top: "0%",
      right: "2%",
      width: "40%",
      itemWidth: 8,
      itemHeight: 8,
      data: [
        {
          name: "三级修",
          textStyle: {
            color: "#87BBFF",
          },
        },
        {
          name: "四级修",
          textStyle: {
            color: "#3576CD",
          },
        },
      ],
    },
    series: [
      {
        data: [120, 200, 150],
        type: "bar",
        name: "三级修",
        itemStyle: {
          color: "#87BBFF",
        },
        label: {
          show: true,
        },
        barWidth: "15",
      },
      {
        data: [150, 260, 90],
        type: "bar",
        name: "四级修",
        itemStyle: {
          color: "#3576CD",
        },
        label: {
          show: true,
        },
        barWidth: "15",
      },
    ],
  };
  yearRepairPlanChart.setOption(yearRepairPlanOption);
  //各车型修时 start
  var truckRepairTimeChart = echarts.init(
    document.getElementById("truckRepairTimeChart")
  );
  var truckRepairTimeOption = {
    legend: {
      top: "0%",
      left: "8%",
      width: "90%",
      itemWidth: 8,
      itemHeight: 8,
      textStyle: {
        color: "#fff",
        fontSize: 14,
        fontFamily: "SourceHanSansCN-Regular, SourceHanSansCN",
        rich: {
          a: {
            verticalAlign: "middle",
          },
        },
        padding: [0, 0, -2, 0], //[上、右、下、左]
      },
    },
    grid: {
      top: "25%",
      left: "5%",
      right: "5%",
      bottom: "20%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: ["Mon"],
      axisLabel: {
        show: false,
        // splitNumber: 1,
      },
    },
    yAxis: {
      type: "value",
      splitLine: {
        show: true,
        lineStyle: {
          type: "dashed",
          color: "#A8C1DE", //---默认取轴线的颜色
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: "#fff",
      },
    },
    series: [
      {
        name: "CRH1A",
        type: "bar",
        itemStyle: {
          color: "#5B84CB",
        },
        label: {
          show: true,
        },
        data: [8],
      },
      {
        name: "CRH1B",
        type: "bar",
        itemStyle: {
          color: "#EC7F34",
        },
        label: {
          show: true,
        },
        data: [10],
      },
      {
        name: "CRH13C(唐车)",
        type: "bar",
        itemStyle: {
          color: "#A8A8A8",
        },
        label: {
          show: true,
        },
        data: [9],
      },
      {
        name: "CRH1308",
        type: "bar",
        label: {
          show: true,
        },
        itemStyle: {
          color: "#FEC207",
        },
        data: [15],
      },
      {
        name: "CRH308L(长客)",
        type: "bar",
        label: {
          show: true,
        },
        itemStyle: {
          color: "#5B9BD5",
        },
        data: [14],
      },
      {
        name: "CR400AF",
        type: "bar",
        label: {
          show: true,
        },
        itemStyle: {
          color: "#74B04D",
        },
        data: [21],
      },
      {
        name: "CR400AF-A",
        type: "bar",
        label: {
          show: true,
        },
        itemStyle: {
          color: "#284478",
        },
        data: [21],
      },
      {
        name: "CRH1A-A",
        type: "bar",
        label: {
          show: true,
        },
        itemStyle: {
          color: "#9F4910",
        },
        data: [30],
      },
      {
        name: "CRH3C(四)",
        type: "bar",
        label: {
          show: true,
        },
        itemStyle: {
          color: "#646464",
        },
        data: [16],
      },
      {
        name: "CR400AF(四)",
        type: "bar",
        label: {
          show: true,
        },
        itemStyle: {
          color: "#9A7402",
        },
        data: [42],
      },
      {
        name: "CR400AF-A(四)",
        type: "bar",
        label: {
          show: true,
        },
        itemStyle: {
          color: "#286092",
        },
        data: [21],
      },
    ],
  };
  truckRepairTimeChart.setOption(truckRepairTimeOption);
  //三级修、四级修修时对比
  var repairTimeContrastChart = echarts.init(
    document.getElementById("repairTimeContrastChart")
  );
  var repairTimeContrastOption = {
    xAxis: {
      type: "category",
      axisLabel: {
        color: "#fff",
      },
      axisTick: {
        show: false,
      },
      data: ["三级修", "四级修"],
    },
    yAxis: {
      type: "value",
      splitLine: {
        show: true,
        lineStyle: {
          type: "dashed",
          color: "#A8C1DE", //---默认取轴线的颜色
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: "#fff",
      },
    },
    grid: {
      top: "15%",
      left: "5%",
      right: "5%",
      bottom: "5%",
      containLabel: true,
    },
    legend: {
      top: "5%",
      right: "10%",
      width: "80%",
      itemWidth: 8,
      itemHeight: 8,
      textStyle: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "PingFangSC-Regular, PingFang SC",
        rich: {
          a: {
            verticalAlign: "middle",
          },
        },
        padding: [0, 0, -2, 0], //[上、右、下、左]
      },
      data: [
        {
          name: "2021年修时",
          textStyle: {
            color: "#87BBFF",
          },
        },
        {
          name: "2022年修时",
          textStyle: {
            color: "#3576CD",
          },
        },
      ],
    },
    series: [
      {
        data: [120, 200],
        type: "bar",
        name: "2021年修时",
        itemStyle: {
          color: "#87BBFF",
        },
        label: {
          show: true,
        },
        barWidth: "15",
      },
      {
        data: [150, 260],
        type: "bar",
        name: "2022年修时",
        itemStyle: {
          color: "#3576CD",
        },
        label: {
          show: true,
        },
        barWidth: "15",
      },
    ],
  };
  repairTimeContrastChart.setOption(repairTimeContrastOption);
  //页面resize时，重置图表大小
  window.onresize = function () {
    WorkTodaySituation.resize();
    barMaintenance.resize();
    yearRepairPlanChart.resize();
    truckRepairTimeChart.resize();
    repairTimeContrastChart.resize();
  };
};
