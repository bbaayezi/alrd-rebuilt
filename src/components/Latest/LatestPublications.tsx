import * as React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { Box } from "@material-ui/core";

import LatestListItem from "./LatestListItem";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxheight: "540px",
      height: "60vh"
    },
    hide: {
      overflow: "hidden"
    }
  })
);

export interface ILatestPublicationsProps {}

export default function LatestPublications(props: ILatestPublicationsProps) {
  const classes = useStyles();
  return (
    <div>
      <Card
        style={{
          height: "540px"
        }}
      >
        <CardHeader
          title="LATEST"
          subheader="Latest Publications by XJTLU Researchers"
          titleTypographyProps={{
            variant: "h5",
            color: "primary"
          }}
        />
        <CardContent
          style={{
            paddingTop: 0
          }}
        >
          <List>
            <LatestListItem />
            <Divider variant="middle" component="li" />
            <LatestListItem />
            <Divider variant="middle" component="li" />
            <LatestListItem />
            <Divider variant="middle" component="li" />
            <LatestListItem />
            <Divider variant="middle" component="li" />
            <LatestListItem />
          </List>
        </CardContent>
      </Card>
    </div>
  );
}
