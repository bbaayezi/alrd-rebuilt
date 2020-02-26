import * as React from "react";
import CardContent from "@material-ui/core/CardContent";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Grid, ListItemIcon, Box } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";
import OverviewTag from "./OverviewTag";

import data from "../../statics/data.json";

export interface IOverviewMetaProps {}

export default function OverviewMeta(props: IOverviewMetaProps) {
  let overview = data.overview;
  // funtion to create tags
  let createTag = (icon: string, title: string, subtitle: string) => (
    <OverviewTag icon={icon} title={title} subtitle={subtitle} />
  );

  return (
    <div>
      <Grid container justify="flex-start">
        <Grid item xs={6}>
          {createTag("label", "Publications", overview.metadata.toString())}
        </Grid>
        <Grid item xs={6}>
          {createTag("account_box", "Authors", overview.authors.toString())}
        </Grid>
        <Grid item xs={6}>
          {createTag(
            "date_range",
            "Years",
            `${overview.years.start} - ${overview.years.end}`
          )}
        </Grid>
        <Grid item xs={6}>
          {createTag(
            "school",
            "Total Citations",
            overview.citations.toString()
          )}
        </Grid>
      </Grid>
    </div>
  );
}
