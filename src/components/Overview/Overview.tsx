import * as React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

import OverviewMeta from "./OverviewMeta";
import OverviewChart from "./OverviewChart";
import { CardContent } from "@material-ui/core";

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
          <OverviewMeta />
          <OverviewChart />
        </CardContent>
      </Card>
    </div>
  );
}
