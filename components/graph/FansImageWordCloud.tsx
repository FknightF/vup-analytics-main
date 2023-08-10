import ReactECharts from "echarts-for-react";
import "echarts-wordcloud";

export default function FansImageWordCloud({
  data,
}: {
  data: { tag: string; frequency: number }[];
}) {
  const option = {
    title: {
      text: "粉丝画像",
      subtext: "虚拟主播粉丝的相关标签",
    },
    tooltip: {},
    series: [
      {
        type: "wordCloud",
        gridSize: 10,
        sizeRange: [12, 60],
        rotationRange: [-90, 90],
        rotationStep: [90],
        shape: "circle",
        textStyle: {
          fontFamily: 'sans-serif',
          fontWeight: 'bold',
          // Color can be a callback function or a color string
          color: function () {
              // Random color
              return 'rgb(' + [
                  Math.round(Math.random() * 160) + 60,
                  Math.round(Math.random() * 160) + 60,
                  Math.round(Math.random() * 160) + 60
              ].join(',') + ')';
          }
      },
        data: data.map((d) => ({ name: d.tag, value: d.frequency })),
      },
    ],
  };

  return <ReactECharts option={option} />;
}
