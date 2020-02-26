import * as React from "react";

import { Chart } from "react-google-charts";
import data from "../../statics/data.json";

const array = data.statistics.byYear;
const byYear = array.slice(0, 6).reverse();
const arrayPairs = byYear.map(obj => {
  return [Object.keys(obj)[0], Object.values(obj)[0]];
});

export interface IOverviewChartProps {}

export default function OverviewChart(props: IOverviewChartProps) {
  return (
    <Chart
      width={"100%"}
      height={"300px"}
      chartType="ColumnChart"
      loader={<div>Loading Chart</div>}
      data={[["Years", "Papers"], ...arrayPairs]}
      options={{
        title: "Publications By Year",
        chartArea: { width: "85%", height: "80%" },
        hAxis: {
          minValue: 0
        },
        colors: ["#65abd5"]
      }}
    ></Chart>
  );
}
