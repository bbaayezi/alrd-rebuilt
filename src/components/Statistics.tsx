import * as React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import Skeleton from "@material-ui/lab/Skeleton";

// Import data interface for statistics
import { IStatistics } from "../interfaces/IData";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    lower: {
      height: "36vh"
    },
    chip: {
      margin: "0 10px 10px 0"
    },
    badge: {
      right: 0
    }
  })
);

export interface IStatisticsProps {
  data: IStatistics;
}

export default function Statistics(props: IStatisticsProps) {
  const classes = useStyles();
  const language = props.data.language;
  const publisherChip = props.data.publisher.map((obj, index) => {
    return (
      <Badge
        badgeContent={Object.values(obj)[0]}
        color="primary"
        className={classes.badge}
        key={index}
      >
        <Chip
          size="small"
          label={Object.keys(obj)[0]}
          className={classes.chip}
        />
      </Badge>
    );
  });

  const contentTypeChip = props.data.contentType.map((obj, index) => {
    return (
      <Badge
        badgeContent={Object.values(obj)[0]}
        color="primary"
        className={classes.badge}
        key={index}
      >
        <Chip
          size="small"
          label={Object.keys(obj)[0]}
          className={classes.chip}
        />
      </Badge>
    );
  });
  return (
    <Card className={classes.lower}>
      <CardHeader
        title="STATISTICS"
        subheader="Publication Analysis"
        titleTypographyProps={{
          variant: "h5",
          color: "primary"
        }}
      />
      <CardContent>
        <Grid container>
          <Grid item xs={12} md={7}>
            <Typography variant="h6">Publisher</Typography>
            {publisherChip}
          </Grid>
          <Grid item xs={12} md={5}>
            <Typography variant="h6">Content Type</Typography>
            {contentTypeChip}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
