import * as React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";

import GeoChart from "./GeoChart";

export interface IPartnerCountryProps {
  data: Array<Object>;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    upper: {
      height: "60vh"
    }
  })
);

export default function PartnerCountry(props: IPartnerCountryProps) {
  const classes = useStyles();
  return (
    <Card className={classes.upper}>
      <CardHeader
        title="COLLABORATION NETWORK"
        subheader="Collaboration on Country Level"
        titleTypographyProps={{
          variant: "h5",
          color: "primary"
        }}
      />
      <CardContent>
        <GeoChart data={props.data} />
      </CardContent>
    </Card>
  );
}
