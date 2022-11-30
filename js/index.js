/*
 * @Description:
 * @Date: 2022-11-30 13:12:23
 * @LastEditTime: 2022-11-30 22:00:33
 */
//页面加载完成后执行
window.onload = function () {
  //今日上班情况
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
  //检修节拍图
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
        },
      },
      splitNumber: 8, //坐标轴的分割段数
      axisLabel: {
        width: 80,
        height: 100,
        overflow: "breakAll",
        inside: true, //刻度标签是否朝内
        margin: -30, //---刻度标签与轴线之间的距离
        showMinLabel: true, //是否显示最小刻度标签
        showMaxLabel: true, //是否显示最大刻度标签
        interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
        // verticalAlign: "top", //---刻度标签与轴线之间的距离
        lineHeight: 15, 
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
      min: 0, //坐标轴刻度最小值
      max: 8, //坐标轴刻度最大值
      scale: true, //是否从0开始
    },
    yAxis: {
      type: "category", //坐标轴类型
      inverse: true, //是否是反向坐标轴
      nameTextStyle: {
        color: "#fff",
      },
      axisLine: {
        show: true, //是否显示坐标轴轴线
        lineStyle: {
          color: "#A8C1DE", //---默认取轴线的颜色
          width: 2,
          type: "solid",
        },
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
          color: "#87BBFF",
        },
      },
    ],
  };
  barMaintenance.setOption(barMaintenanceOption);
  //页面resize时，重置图表大小
  window.onresize = function () {
    WorkTodaySituation.resize();
    barMaintenance.resize();
  };
};
