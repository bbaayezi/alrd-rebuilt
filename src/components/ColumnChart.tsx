import * as React from "react";
import { Chart } from "react-google-charts";
import data from "../statics/data.json";

const array = data.statistics.byYear;
const byYear = array.slice(0, 6).reverse();
const arrayPairs = byYear.map(obj => {
  return [Object.keys(obj)[0], Object.values(obj)[0]];
});

export interface IColumnChartProps {}

export default function ColumnChart(props: IColumnChartProps) {
  return (
    <React.Fragment>
      <Chart
        width={"100%"}
        height={"34vh"}
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
    </React.Fragment>
  );
}
