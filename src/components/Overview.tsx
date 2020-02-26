import * as React from "react";
import Tag from "./Tag";
import {
  Theme,
  createStyles,
  makeStyles,
  createMuiTheme
} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";

import { IOverview } from "../interfaces/IData";

import ColumnChart from "./ColumnChart";

import data from "../statics/data.json";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    upper: {
      height: "60vh"
    },
    overviewContent: {
      position: "relative",
      height: "600px"
    },
    overviewMeta: {
      position: "relative",
      height: "20%"
    },
    overviewGraph: {
      marginTop: "10px",
      position: "relative",
      height: "60%"
    }
  })
);

export interface IOverviewProps {
  data: IOverview;
}

export default function Overview(props: IOverviewProps) {
  const classes = useStyles();
  const overview = props.data;
  // funtion to create tags
  let createTag = (icon: string, title: string, subtitle: string) => (
    <Tag icon={icon} title={title} subtitle={subtitle} />
  );
  return (
    <Card className={classes.upper}>
      <CardHeader
        title="OVERVIEW"
        subheader="Overview of Papers"
        titleTypographyProps={{
          variant: "h5",
          color: "primary"
        }}
      />
      <CardContent className={classes.overviewContent}>
        <React.Fragment>
          <div className={classes.overviewMeta}>
            <React.Fragment>
              <Grid container justify="flex-start">
                <Grid item xs={6}>
                  {createTag("label", "Publications", overview.metadata.toString())}
                </Grid>
                <Grid item xs={6}>
                  {createTag(
                    "account_box",
                    "Authors",
                    overview.authors.toString()
                  )}
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
            </React.Fragment>
          </div>
          <div className={classes.overviewGraph}>
            <ColumnChart />
          </div>
        </React.Fragment>
      </CardContent>
    </Card>
  );
}
