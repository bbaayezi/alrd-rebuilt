import * as React from "react";
import Grid from "@material-ui/core/Grid";
import OverviewTag from "./OverviewTag";

import { IOverview } from "../../interfaces/IData";

export interface IOverviewMetaProps {
  overview: IOverview;
}

export default function OverviewMeta(props: IOverviewMetaProps) {
  // funtion to create tags
  let createTag = (icon: string, title: string, subtitle: string) => (
    <OverviewTag icon={icon} title={title} subtitle={subtitle} />
  );

  return (
    <div>
      <Grid container justify="flex-start">
        <Grid item xs={6}>
          {createTag(
            "label",
            "Publications",
            props.overview.metadata.toString()
          )}
        </Grid>
        <Grid item xs={6}>
          {createTag(
            "account_box",
            "Authors",
            props.overview.authors.toString()
          )}
        </Grid>
        <Grid item xs={6}>
          {createTag(
            "date_range",
            "Years",
            `${props.overview.years.start} - ${props.overview.years.end}`
          )}
        </Grid>
        <Grid item xs={6}>
          {createTag(
            "school",
            "Total Citations",
            props.overview.citations.toString()
          )}
        </Grid>
      </Grid>
    </div>
  );
}
