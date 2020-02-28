import * as React from "react";
import { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

import OverviewMeta from "./OverviewMeta";
import OverviewChart from "./OverviewChart";
import { CardContent } from "@material-ui/core";

import API from "../../service/api";
import { IOverview } from "../../interfaces/IData";

export interface IOverviewProps {}
let nullOverview: IOverview = {
  publications: 0,
  authors: 0,
  citations: 0,
  startYear: "",
  endYear: ""
};

export default function Overview(props: IOverviewProps) {
  const [overview, setOverview] = useState<IOverview>(nullOverview);
  useEffect(() => {
    API.get("overview")
      .then(res => {
        if (res.data.status === "ok") {
          setOverview(res.data.data);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
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
          <OverviewMeta overview={overview} />
          <OverviewChart />
        </CardContent>
      </Card>
    </div>
  );
}
