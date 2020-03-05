import * as React from "react";
import { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Skeleton from "@material-ui/lab/Skeleton";
import ReactWordcloud, { Word, OptionsProp, Scale } from "react-wordcloud";

import API from "../../service/api";

import { INumberedMap } from "../../interfaces/IData";

export interface IKeywordsProps {}

export default function Keywords(props: IKeywordsProps) {
  const [keywords, setKeywords] = useState<INumberedMap>({});
  useEffect(() => {
    API.get("authKeywords")
      .then(res => {
        if (res.data.status === "ok") {
          setKeywords(res.data.data);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  // setup word cloud array
  let wordcloudArray: Array<Word> = [];
  for (const key in keywords) {
    if (keywords.hasOwnProperty(key)) {
      const value = keywords[key];
      wordcloudArray.push({
        text: key,
        value: value
      });
    }
  }
  // setup wordcloud options
  let wordcloudOption: OptionsProp = {
    scale: Scale.Sqrt,
    fontFamily: "impact",
    fontSizes: [5, 60],
    rotations: 3,
    rotationAngles: [0, 90]
  };
  return (
    <div>
      <Card
        style={{
          height: "596px"
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
          {wordcloudArray.length > 0 ? (
            <div style={{ height: 500, width: "100%" }}>
              <ReactWordcloud
                words={wordcloudArray}
                options={wordcloudOption}
              />
            </div>
          ) : (
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
