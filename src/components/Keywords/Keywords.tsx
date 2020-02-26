import * as React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Skeleton from "@material-ui/lab/Skeleton";

import data from "../../statics/data.json";

let keywords = data.keyword;
export interface IKeywordsProps {}

export default function Keywords(props: IKeywordsProps) {
  return (
    <div>
      <Card
        style={{
          height: "330px"
        }}
      >
        <CardHeader
          title="KEYWORDS"
          subheader="Top Keywords of Publications"
          titleTypographyProps={{
            variant: "h5",
            color: "primary"
          }}
        />
        <CardContent style={{ paddingTop: 0 }}>
          {keywords.length > 0 ? null : (
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
    </div>
  );
}
