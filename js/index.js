/*
 * @Description:
 * @Date: 2022-11-30 13:12:23
 * @LastEditTime: 2022-12-12 13:24:46
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
          text: "649",
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
              formatter: function (value) {
                return value.percent + "%";
              }, //自定义显示内容
            },
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 327, name: "白班人数" },
          { value: 150, name: "晚班人数" },
          { value: 172, name: "未上班人数" },
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
      right: "15%",
      bottom: "5%",
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
        show: false,
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
      offset: 40, //坐标轴相对于默认位置的偏移
      min: 0, //坐标轴刻度最小值
      max: 8, //坐标轴刻度最大值
      scale: true, //是否从0开始
    },
    yAxis: [
      {
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
          width: 50,
          align: "right",
          verticalAlign: "top", //坐标轴名称的显示位置
          color: "#5C6377", //坐标轴名称的颜色
          fontSize: 12, //坐标轴名称的字体大小
          lineHeight: 35, //坐标轴名称的行高
          padding: [0, 10, 10, 0],
        },
        axisTick: {
          show: false,
        },
        data: ["3064", "2044", "3043", "5503", "2060", "5823"], //车组号
      },
      {
        type: "category",
        name: "（计划修竣日期）",
        nameLocation: "end", //坐标轴名称显示位置
        nameTextStyle: {
          width: 50,
          align: "right",
          verticalAlign: "top", //坐标轴名称的显示位置
          color: "#5C6377", //坐标轴名称的颜色
          fontSize: 12, //坐标轴名称的字体大小
          lineHeight: 35, //坐标轴名称的行高
        },
        position: "right",
        // alignTicks: true,
        offset: 120,
        axisLine: {
          show: false,
        },
        axisLabel: {
          show: true,
          inside: true,
          margin: 20,
        },
        axisTick: {
          show: false,
        },
        data: [
          {
            value: "11月26日",
            textStyle: {
              fontSize: 16,
              fontFamily: "PingFangSC-Regular, PingFang SC",
              color: "#50ECA9", //黄
            },
          },
          {
            value: "11月30日",
            textStyle: {
              fontSize: 16,
              fontFamily: "PingFangSC-Regular, PingFang SC",
              color: "#F48484", //橙
            },
          },
          {
            value: "12月5日",
            textStyle: {
              fontSize: 16,
              fontFamily: "PingFangSC-Regular, PingFang SC",
              color: "#F2C92D", //绿
            },
          },
          {
            value: "11月28日",
            textStyle: {
              fontSize: 16,
              fontFamily: "PingFangSC-Regular, PingFang SC",
              color: "#50ECA9", //黄
            },
          },
          {
            value: "12月9日",
            textStyle: {
              fontSize: 16,
              fontFamily: "PingFangSC-Regular, PingFang SC",
              color: "#F2C92D", //绿
            },
          },
          {
            value: "12月1日",
            textStyle: {
              fontSize: 16,
              fontFamily: "PingFangSC-Regular, PingFang SC",
              color: "#F2C92D", //绿
            },
          },
        ], //计划修竣日期
      },
    ],
    series: [
      {
        type: "bar",
        data: [4, 5, 3, 8, 3, 6], //检修进度
        itemStyle: {
          color: "#6C9CD9",
        },
        barWidth: "20",
      },
    ],
  };
  barMaintenance.setOption(barMaintenanceOption);
  //车组过多，分两次渲染,30s
  //第一组数据
  let firstData = {
    yAxisData: ["3064", "2044", "3043", "5503", "2060", "5823"], //车组号
    seriesData: [4, 5, 3, 8, 3, 6], //检修进度
    planData: [
      {
        value: "11月26日",
        textStyle: {
          fontSize: 16,
          fontFamily: "PingFangSC-Regular, PingFang SC",
          color: "#50ECA9", //黄
        },
      },
      {
        value: "11月30日",
        textStyle: {
          fontSize: 16,
          fontFamily: "PingFangSC-Regular, PingFang SC",
          color: "#F48484", //橙
        },
      },
      {
        value: "12月5日",
        textStyle: {
          fontSize: 16,
          fontFamily: "PingFangSC-Regular, PingFang SC",
          color: "#F2C92D", //绿
        },
      },
      {
        value: "11月28日",
        textStyle: {
          fontSize: 16,
          fontFamily: "PingFangSC-Regular, PingFang SC",
          color: "#50ECA9", //黄
        },
      },
      {
        value: "12月9日",
        textStyle: {
          fontSize: 16,
          fontFamily: "PingFangSC-Regular, PingFang SC",
          color: "#F2C92D", //绿
        },
      },
      {
        value: "12月1日",
        textStyle: {
          fontSize: 16,
          fontFamily: "PingFangSC-Regular, PingFang SC",
          color: "#F2C92D", //绿
        },
      },
    ],
  };
  //第二组数据
  let secondData = {
    yAxisData: ["3028", "3012", "3005", "1052", "2040", "2080"], //车组号
    seriesData: [3, 3, 2, 3, 1, 0], //检修进度
    planData: [
      {
        value: "12月12日",
        textStyle: {
          fontSize: 16,
          fontFamily: "PingFangSC-Regular, PingFang SC",
          color: "#F48484",
        },
      },
      {
        value: "12月20日",
        textStyle: {
          fontSize: 16,
          fontFamily: "PingFangSC-Regular, PingFang SC",
          color: "#F2C92D",
        },
      },
      {
        value: "12月3日",
        textStyle: {
          fontSize: 16,
          fontFamily: "PingFangSC-Regular, PingFang SC",
          color: "#F2C92D",
        },
      },
      {
        value: "12月6日",
        textStyle: {
          fontSize: 16,
          fontFamily: "PingFangSC-Regular, PingFang SC",
          color: "#F2C92D",
        },
      },
      {
        value: "12月16日",
        textStyle: {
          fontSize: 16,
          fontFamily: "PingFangSC-Regular, PingFang SC",
          color: "#F2C92D",
        },
      },
      {
        value: "12月17日",
        textStyle: {
          fontSize: 16,
          fontFamily: "PingFangSC-Regular, PingFang SC",
          color: "#F2C92D",
        },
      },
    ],
  };
  //若数据过多,可分多次切换
  //放置在数组里--》数据遍历
  let dataList = [firstData, secondData];
  let index = 0;
  //30S 切换一次数据
  let timer = setInterval(() => {
    index++;
    barMaintenanceOption.yAxis[0].data = dataList[index].yAxisData;
    barMaintenanceOption.series[0].data = dataList[index].seriesData;
    barMaintenanceOption.yAxis[1].data = dataList[index].planData;
    barMaintenance.setOption(barMaintenanceOption);
    //重置index
    if (index == dataList.length - 1) {
      index = -1;
    }
  }, 30000);
  // 离开页面销毁定时器
  window.onbeforeunload = function () {
    clearInterval(timer);
  };
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
      data: ["CRH1", "CRH3", "CR400AF"],
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
        data: [38, 41, 18],
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
        data: [16, 10, 26],
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
        data: [7.58],
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
        data: [10.14],
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
        data: [9.5],
      },
      {
        name: "CRH380B",
        type: "bar",
        label: {
          show: true,
        },
        itemStyle: {
          color: "#FEC207",
        },
        data: [8.73],
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
        data: [10.5],
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
        data: [11.5],
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
        data: [12.75],
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
        data: [20.69],
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
        data: [19.3],
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
        data: [20.36],
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
        data: [42.0],
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
        data: [12, 26],
        type: "bar",
        name: "2021年修时",
        itemStyle: {
          color: "#87BBFF",
        },
        label: {
          show: true,
        },
        barWidth: "26",
      },
      {
        data: [10, 21],
        type: "bar",
        name: "2022年修时",
        itemStyle: {
          color: "#3576CD",
        },
        label: {
          show: true,
        },
        barWidth: "26",
      },
    ],
  };
  repairTimeContrastChart.setOption(repairTimeContrastOption);
  //车组检修成本
  //安全生产预警 与 车组检修成本 30s 切换一次
  var CrewMaintenanceCostChart = echarts.init(
    document.getElementById("CrewMaintenanceCostChart")
  );
  var CrewMaintenanceCostChartOption = {
    xAxis: {
      type: "category",
      axisLabel: {
        color: "#fff",
        interval: 0,
      },
      axisTick: {
        show: false,
      },
      data: ["CRH1A200", "CRH1A250", "CRH1A-A", "CRH1B", "CRH3C"],
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
      top: "18%",
      left: "5%",
      right: "5%",
      bottom: "5%",
      containLabel: true,
    },
    legend: {
      top: "5%",
      right: "2%",
      width: "60%",
      itemWidth: 8,
      itemHeight: 8,
      data: [
        {
          name: "三级修定额",
          textStyle: {
            color: "#fff",
          },
        },
        {
          name: "三级修支出",
          textStyle: {
            color: "#fff",
          },
        },
        {
          name: "四级修定额",
          textStyle: {
            color: "#fff",
          },
        },
        {
          name: "四级修支出",
          textStyle: {
            color: "#fff",
          },
        },
      ],
    },
    series: [
      {
        data: [175, 225, 255, 340, 325],
        type: "bar",
        name: "三级修定额",
        itemStyle: {
          color: "#87BBFF",
        },
        label: {
          show: true,
        },
        barWidth: "6",
      },
      {
        data: [125, 150, 175, 240, 230],
        type: "bar",
        name: "三级修支出",
        itemStyle: {
          color: "#3576CD",
        },
        label: {
          show: true,
        },
        barWidth: "6",
      },
      {
        data: [140, 160, 200, 225, 210],
        type: "bar",
        name: "四级修定额",
        itemStyle: {
          color: "#FC8035",
        },
        label: {
          show: true,
        },
        barWidth: "6",
      },
      {
        data: [140, 160, 200, 225, 210],
        type: "bar",
        name: "四级修支出",
        itemStyle: {
          color: "#D45000",
        },
        label: {
          show: true,
        },
        barWidth: "6",
      },
    ],
  };
  CrewMaintenanceCostChart.setOption(CrewMaintenanceCostChartOption);
  let showList = [
    "WorkSafetyWarningText",
    "CrewMaintenanceCostChart",
    "CrewMaintenanceCostChart",
  ];
  let chartList = ["CrewMaintenanceCostChart"];
  //修时标题 30s 切换
  let titleList = ["安全生产预警", "车组检修成本", "车组检修成本"];
  //定义当前展示的索引
  let showIndex = 0;
  //定义定时器
  let CrewTimer = null;
  //车组过多，分两次渲染,30s
  //第一组数据
  let CrewFirstData = {
    xAxisData: ["CRH1A200", "CRH1A250", "CRH1A-A", "CRH1B", "CRH3C"], //车组检修成本
    seriesData: [
      [175, 225, 255, 340, 325],
      [125, 150, 175, 240, 230],
      [140, 160, 200, 225, 210],
      [140, 160, 200, 225, 210],
    ],
  };
  //第二组数据
  let CrewSecondData = {
    xAxisData: ["CRH1A200新", "CRH1A250新", "CRH1A-A新", "CRH1B新"], //车组检修成本
    seriesData: [
      [155, 205, 205, 300],
      [105, 100, 105, 200],
      [100, 100, 200, 205],
      [100, 100, 200, 205],
    ],
  };
  //若数据过多,可分多次切换
  //放置在数组里--》数据遍历
  let CrewDataList = [CrewFirstData, CrewSecondData];
  function changeShow() {
    //加载不同车组的数据
    if (showIndex != 2) {
      CrewMaintenanceCostChartOption.xAxis.data =CrewDataList[showIndex].xAxisData
      CrewMaintenanceCostChartOption.series[0] =
        CrewDataList[showIndex].seriesData[0];
      CrewMaintenanceCostChartOption.series[1] =
        CrewDataList[showIndex].seriesData[1];
      CrewMaintenanceCostChartOption.series[2] =
        CrewDataList[showIndex].seriesData[2];
      CrewMaintenanceCostChartOption.series[3] =
        CrewDataList[showIndex].seriesData[3];
    }
    CrewMaintenanceCostChart.setOption(CrewMaintenanceCostChartOption);
    //获取当前展示的元素
    let currentShow = $(".WorkSafetyWarning #" + showList[showIndex]);
    //获取下一个要展示的元素
    let nextShow = $(".WorkSafetyWarning #" + showList[(showIndex + 1) % 3]);
    //标题内容更改
    $(".WorkSafetyWarning .barTitle").html(titleList[(showIndex + 1) % 3]);
    //当前元素隐藏、动画切换（保证下次重新加载动画）
    if (showIndex != 1) {
      currentShow.toggleClass("hideBar");
      currentShow.toggleClass("animate__zoomInLeft");
    }
    //echart 重绘
    for (let i = 0; i < chartList.length; i++) {
      let chart = echarts.getInstanceByDom(
        document.getElementById(chartList[i])
      );
      chart.resize();
    }
    //定时器 5秒更换数据
    //下一个元素显示、动画切换（保证下次重新加载动画）
    if (showIndex != 1) {
      nextShow.toggleClass("hideBar");
      nextShow.toggleClass("animate__zoomInLeft");
    }
    //索引自增
    showIndex = (showIndex + 1) % 3;
  }
  //默认展示、默认添加动画库、默认标题
  $(".WorkSafetyWarning .barTitle").html(titleList[showIndex]);
  $(".WorkSafetyWarning #" + showList[showIndex]).toggleClass("hideBar");
  $(".WorkSafetyWarning #" + showList[showIndex]).toggleClass(
    "animate__zoomInLeft"
  );
  //定时器
  CrewTimer = setInterval(changeShow, 30000);
  //销毁定时器
  window.onbeforeunload = function () {
    clearTimeout(CrewTimer);
  };
  //页面resize时，重置图表大小
  window.onresize = function () {
    WorkTodaySituation.resize();
    barMaintenance.resize();
    yearRepairPlanChart.resize();
    truckRepairTimeChart.resize();
    repairTimeContrastChart.resize();
    CrewMaintenanceCostChart.resize();
  };
};
