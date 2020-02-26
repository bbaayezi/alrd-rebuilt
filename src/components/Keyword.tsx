import * as React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import Skeleton from "@material-ui/lab/Skeleton";

export interface IKeywordProps {
  keywords: Array<string>;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    lower: {
      height: "36vh"
    }
  })
);

export default function Keyword(props: IKeywordProps) {
  const classes = useStyles();
  return (
    <Card className={classes.lower}>
      <CardHeader
        title="KEYWORDS"
        subheader="Top Keywords of Publications"
        titleTypographyProps={{
          variant: "h5",
          color: "primary"
        }}
      />
      <CardContent>
        {props.keywords.length > 0 ? null : (
          <React.Fragment>
            <Typography variant="subtitle1">Currently Unavailable</Typography>
            <Skeleton variant="text" />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
          </React.Fragment>
        )}
      </CardContent>
    </Card>
  );
}
