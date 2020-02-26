import * as React from 'react';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

export interface IStatisticsProps {
}

export default function Statistics (props: IStatisticsProps) {
  return (
    <div>
      <Card
        style={{
          height: "330px"
        }}
      >
        <CardHeader
          title="STATISTICS"
          subheader="Publication Analysis"
          titleTypographyProps={{
            variant: "h5",
            color: "primary"
          }}
        />
      </Card>
    </div>
  );
}
