import * as React from "react";
import { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import GeographicChart from "./GeographicChart";

import API from "../../service/api";
import { CardContent } from "@material-ui/core";
import { IPartnerCountry } from "../../interfaces/IData";

export interface ICollaborationCountryProps {}

export default function CollaborationCountry(
  props: ICollaborationCountryProps
) {
  const [partner, setPartner] = useState<IPartnerCountry>({});
  useEffect(() => {
    API.get("partnerCountry")
      .then(res => {
        if (res.data.status === "ok") {
          setPartner(res.data.data);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
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
          <GeographicChart data={partner} />
        </CardContent>
      </Card>
    </div>
  );
}
