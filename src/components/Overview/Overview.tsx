import * as React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

import OverviewMeta from "./OverviewMeta";
import OverviewChart from "./OverviewChart";
import { CardContent } from "@material-ui/core";

import data from "../../statics/data.json";

let overview = data.overview

export interface IOverviewProps {}

export default function Overview(props: IOverviewProps) {
  return (
    <div>
      <Card
        style={{
          height: "540px"
        }}
      >
        <CardHeader
          title="OVERVIEW"
          subheader="Overview of Papers"
          titleTypographyProps={{
            variant: "h5",
            color: "primary"
          }}
        />
        <CardContent>
          <OverviewMeta overview={overview}/>
          <OverviewChart />
        </CardContent>
      </Card>
    </div>
  );
}
