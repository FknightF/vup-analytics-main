import Vup from "@/types/Vup";
import ReactECharts from "echarts-for-react";

function attachColorToValue(value: number): any {
  if (value > 0)
    return {
      value: value,
      itemStyle: {
        color: "#FF9999",
      },
    };
  else return value;
}

export default function FansImageWordCloud({
  data,
}: {
  data: { date: string; fans: number }[];
}) {
  const option = {
    tooltip: {
      trigger: "axis",
      position: function (pt: any[]) {
        return [pt[0], "10%"];
      },
    },
    title: {
      text: "粉丝增减",
    },
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: "none",
        },
        restore: {},
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: data.map((data) => data.date),
    },
    yAxis: [
      {
        type: "value",
        boundaryGap: [0, "100%"],
        min: "dataMin",
        max: "dataMax",
        name: "数量",
      },
      {
        type: "value",
        name: "变化量",
      },
    ],
    dataZoom: [
      {
        type: "inside",
        start: 0,
        end: 10,
      },
      {
        start: 0,
        end: 10,
      },
    ],
    series: [
      {
        name: "粉丝数",
        type: "line",
        symbol: "none",
        data: data.map((data) => data.fans),
      },
      {
        name: "粉丝变化量",
        type: "bar",
        yAxisIndex: 1,
        data: data.map((data, index, array) =>
          index === 0
            ? 0
            : attachColorToValue(array[index].fans - array[index - 1].fans)
        ),
      },
    ],
  };
  return <ReactECharts option={option} />;
}
