This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

**23组**：朱双赫-费姚瑞-王嘉成\
**分工**：\
朱双赫：数据爬取，Web搭建&数据可视化，PPT制作及展示；\
费姚瑞：数据爬取，数据清洗；\
王嘉成：Web搭建&数据可视化；\
***请注意 !!!***\
我们的代码因为“react-echats找不到windows”的无法修复的问题，目前只能在dev环境跑，无法在生产环境跑！

## Getting Started

Firstly, download our project from github:

```bash
git clone https://github.com/fyr03/vup-analytics-main
```

Set environment needed:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Structure

app/->Next.js'App Router folder\
components/graph/FansCoverageUpset.tsx    ->Draw Venn and Upset graph\
components/graph/FansHistoryLine.tsx&nbsp ->Draw bar charts and line chart\
components/graph/GuardsHistoryLine.tsx    ->Ditto\
components/graph/FansImageWordCloud.tsx   ->Draw word cloud\
components/Graph.tsx                      ->Rightmost main view\
components/Info.tsx                       ->Middle vup's detail and functional buttoms\
components/Source.tsx                     ->Leftmost vup's list\
pages/api                                 ->Next.js's API folder\
data/                                     ->Database\
types/                                    ->Types of data\
The rest are the configuration files.

## The Storys You Can Tell

**粉丝标签-文本可视化-词云图**

粉丝标签是粉丝观看的直播的标签进行统计得到的结果，一定程度上反映了该虚拟主播的粉丝关注的内容，并不一定是该虚拟主播直播的内容。该数据集可以提供的信息：

- 粉丝的群体画像
- 为虚拟主播提供符合粉丝关注内容的直播建议
- ……

**粉丝/大航海历史-二维时序数据可视化-柱状/折线图**

粉丝数反映了该主播的人气和受众基本盘；大航海（舰长数）则反映该主播的付费群体大小，与该主播的收入有强烈正相关关系。该数据集可以提供的信息:

- 主播的人气走向，是否处于事业上升期
- 主播受众的粘性、忠诚度
- 巨大的粉丝数、舰长数波动往往预示着风口与重大舆情事件
- ……

**粉丝集合-集合可视化-Venn/Upset图**

粉丝集合是该主播在样本中所有粉丝的集合。该数据集可以提供的信息：

- 主播之间的粉丝重合度
- 帮助主播区分赛道和生态位，避免与大主播撞车，也提供了与其他主播联动的建议
- ……

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
