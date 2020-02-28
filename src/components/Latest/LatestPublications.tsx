import * as React from "react";
import { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import API from "../../service/api";

import LatestListItem from "./LatestListItem";

import { ILatestItem } from "../../interfaces/IData";

export interface ILatestPublicationsProps {}

export default function LatestPublications(props: ILatestPublicationsProps) {
  // get
  const [latestList, setLatestList] = useState<Array<ILatestItem>>([]);
  useEffect(() => {
    API.get("latest")
      .then(res => {
        if (res.data.status === "ok") {
          setLatestList(res.data.data);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  let length = latestList.length;
  let latest = latestList.map((item, index) => {
    const divider = <Divider variant="middle" component="li" />;
    return (
      <React.Fragment key={index}>
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
