import * as React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

import data from "../statics/data.json";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      width: "100%",
      maxWidth: 360,
      maxHeight: "50vh",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper
    },
    inline: {
      display: "inline"
    }
  })
);

export interface ILatesetPaperListProps {}

export default function LatesetPaperList(props: ILatesetPaperListProps) {
  const classes = useStyles();

  const listItems = data.latest.map((item, index) => (
    <React.Fragment key={index}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={item.author} src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={item.title}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {item.author}
                <br />
                {item.date}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </React.Fragment>
  ));

  return <List className={classes.root}>{listItems}</List>;
}
