import * as React from "react";
import { Chart } from "react-google-charts";
import { IPartnerCountry } from "../../interfaces/IData";

export interface IGeographicChartProps {
  data: IPartnerCountry;
}

export default function GeographicChart(props: IGeographicChartProps) {
  const partnerCountry = props.data;
  let arrayPairs = [];
  for (const key in partnerCountry) {
    if (partnerCountry.hasOwnProperty(key)) {
      const value = partnerCountry[key];
      arrayPairs.push([key, value]);
    }
  }
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
