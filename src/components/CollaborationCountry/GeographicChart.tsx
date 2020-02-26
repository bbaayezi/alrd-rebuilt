import * as React from "react";
import { Chart } from "react-google-charts";

export interface IGeographicChartProps {
  data: Array<Object>;
}

export default function GeographicChart(props: IGeographicChartProps) {
  const partnerCountry = props.data;
  const arrayPairs = partnerCountry.map(obj => {
    for (let key in obj) {
      return [key, Object.values(obj)[0]];
    }
  });
  return (
    <React.Fragment>
      <Chart
        width={"100%"}
        height={"400px"}
        chartType="GeoChart"
        data={[["Country", "Papers"], ...arrayPairs]}
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        mapsApiKey="AIzaSyAmxDlCLxIrNWJMWeXAyWje9AfsONnQjuk"
      />
    </React.Fragment>
  );
}
