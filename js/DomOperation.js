/*
 * @Description:
 * @Date: 2022-12-01 13:53:23
 * @LastEditTime: 2022-12-01 16:48:21
 */
//动态效果
//获取 class currentTime 元素，设置当前年月日时分秒（每秒更新）
function showTime() {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  var second =
    date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  var week = date.getDay();
  var weekArr = [
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六",
  ];
  var weekStr = weekArr[week];
  var timeStr =
    year +
    "年" +
    month +
    "月" +
    day +
    "日" +
    " " +
    weekStr +
    " " +
    hour +
    ":" +
    minute +
    ":" +
    second;
  var currentTime = document.getElementsByClassName("currentTime")[0];
  currentTime.innerHTML = timeStr;
  setTimeout(showTime, 1000);
}
showTime();
//离开销毁定时器
window.onbeforeunload = function () {
  clearTimeout(showTime);
};

//修时对比(repairTimeContrastChart)、年度检修计划(yearRepairPlan)、各车型修时(truckRepairTimeChart) 三个30s 切换
//定义展示顺序
let showList = [
  "repairTimeContrastChart",
  "yearRepairPlan",
  "truckRepairTimeChart",
];
let chartList = [
  "repairTimeContrastChart",
  "yearRepairPlanChart",
  "truckRepairTimeChart",
];
//定义当前展示的索引
let showIndex = 0;
//定义定时器
let timer = null;
//定义切换函数
function changeShow() {
  //获取当前展示的元素
  let currentShow = $(".RepairTimeStatistics #" + showList[showIndex]);
  //获取下一个要展示的元素
  let nextShow = $(".RepairTimeStatistics #" + showList[(showIndex + 1) % 3]);
  //当前元素隐藏、动画切换（保证下次重新加载动画）
  currentShow.toggleClass('hideBar');
  currentShow.toggleClass('animate__bounceInUp');
  //echart 重绘
  for (let i = 0; i < chartList.length; i++) {
    let chart = echarts.getInstanceByDom(
      document.getElementById(chartList[i])
    );
    chart.resize();
  }
  //下一个元素显示、动画切换（保证下次重新加载动画）
  nextShow.toggleClass('hideBar');;
  nextShow.toggleClass('animate__bounceInUp');;
  //索引自增
  showIndex = (showIndex + 1) % 3;
}
//默认展示、默认添加动画库
$(".RepairTimeStatistics #" + showList[showIndex]).toggleClass('hideBar');
$(".RepairTimeStatistics #" + showList[showIndex]).toggleClass('animate__bounceInUp');
//定时器
timer = setInterval(changeShow, 30000);
//鼠标移入停止定时器
$(".RepairTimeStatistics .barContent").on("mouseenter", function () {
  clearInterval(timer);
});
//鼠标移出开启定时器
$(".RepairTimeStatistics .barContent").on("mouseleave", function () {
  timer = setInterval(changeShow, 30000);
});
//销毁定时器
window.onbeforeunload = function () {
  clearTimeout(timer);
};
