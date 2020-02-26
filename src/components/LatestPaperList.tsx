import * as React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";

import { ILatestItem } from "../interfaces/IData";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      width: "100%"
      // backgroundColor: theme.palette.background.paper
    },
    inline: {
      display: "inline"
    },
    upper: {
      height: "60vh"
    },
    listContent: {
      position: "relative",
      maxHeight: "500px",
      overflow: "auto"
    }
  })
);

export interface ILatesetPaperListProps {
  data: Array<ILatestItem>;
}

export default function LatesetPaperList(props: ILatesetPaperListProps) {
  const classes = useStyles();
  const length = props.data.length;
  const listItems = props.data.map((item, index) => {
    const divider = <Divider variant="middle" component="li" />;
    return (
      <React.Fragment key={index}>
        <ListItem alignItems="flex-start">
          <ListItemText
            primary={item.title}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="subtitle1"
                  // className={classes.inline}
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
        {index < length - 1 ? divider : null}
      </React.Fragment>
    );
  });

  return (
    <Card className={classes.upper}>
      <CardHeader
        title="LATEST"
        subheader="Latest Publications by XJTLU Researchers"
        titleTypographyProps={{
          variant: "h5",
          color: "primary"
        }}
      />
      <List className={classes.listContent}>{listItems}</List>
    </Card>
  );
}
