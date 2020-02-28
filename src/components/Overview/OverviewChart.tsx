import * as React from "react";
import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

import { IYearlySummary } from "../../interfaces/IData";

import API from "../../service/api";

export interface IOverviewChartProps {}

export default function OverviewChart(props: IOverviewChartProps) {
  const [byYear, setByYear] = useState<IYearlySummary>({});
  useEffect(() => {
    API.get("byYear")
      .then(res => {
        if (res.data.status === "ok") {
          setByYear(res.data.data);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  let dataPairs = [];
  for (const key in byYear) {
    if (byYear.hasOwnProperty(key)) {
      const value = byYear[key];
      dataPairs.push([key, value]);
    }
  }
  return (
    <Chart
      width={"100%"}
      height={"300px"}
      chartType="ColumnChart"
      loader={<div>Loading Chart</div>}
      data={[["Years", "Papers"], ...dataPairs]}
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
