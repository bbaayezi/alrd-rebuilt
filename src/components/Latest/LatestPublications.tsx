import * as React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

import LatestListItem from "./LatestListItem";

import data from "../../statics/data.json";
import { ILatestItem } from "../../interfaces/IData";

let latestList: Array<ILatestItem> = data.latest;

export interface ILatestPublicationsProps {}

export default function LatestPublications(props: ILatestPublicationsProps) {
  let length = latestList.length;
  let latest = latestList.map((item, index) => {
    const divider = <Divider variant="middle" component="li" />;
    return (
      <React.Fragment>
        <LatestListItem
          title={item.title}
          author={item.author}
          date={item.date}
        />
        {index < length - 1 ? divider : null}
      </React.Fragment>
    );
  });
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
          <List>{latest}</List>
        </CardContent>
      </Card>
    </div>
  );
}
