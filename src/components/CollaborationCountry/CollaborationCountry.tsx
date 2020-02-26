import * as React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import GeographicChart from "./GeographicChart";

import data from "../../statics/data.json";
import { CardContent } from "@material-ui/core";

export interface ICollaborationCountryProps {}

export default function CollaborationCountry(
  props: ICollaborationCountryProps
) {
  return (
    <div>
      <Card
        style={{
          height: "540px"
        }}
      >
        <CardHeader
          title="COLLABORATION NETWORK"
          subheader="Collaboration on Country Level"
          titleTypographyProps={{
            variant: "h5",
            color: "primary"
          }}
        />
        <CardContent>
          <GeographicChart data={data.partnerCountry} />
        </CardContent>
      </Card>
    </div>
  );
}
