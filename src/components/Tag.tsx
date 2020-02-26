import * as React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tag: {
      position: "relative",
      height: "50px",
      marginBottom: "10px"
      //   display: "inline"
    },
    iconContainer: {
      height: "100%",
      width: "50%"
    },
    icon: {
      fontSize: "3rem",
      color: "#57c984",
      flow: "left"
    },
    title: {
      flow: "right"
    },
    metadata: {
      fontSize: "1rem"
    },
    number: {
      fontSize: "1.1rem",
      fontWeight: "bold"
    }
  })
);

export interface ITagProps {
  icon: string;
  title: string;
  subtitle: string;
}

export default function Tag(props: ITagProps) {
  const classes = useStyles();
  return (
    <Grid container direction="row" spacing={0} className={classes.tag}>
      <Grid item xs={4} className={classes.iconContainer}>
        <Icon className={classes.icon}>{props.icon}</Icon>
      </Grid>
      <Grid item xs={8}>
        <Grid container direction="column" spacing={0}>
          <Grid item className={classes.metadata}>
            {props.title}
          </Grid>
          <Grid item className={classes.number}>
            {props.subtitle}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
