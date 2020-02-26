import * as React from 'react';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

export interface IKeywordsProps {
}

export default function Keywords (props: IKeywordsProps) {
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
      </Card>
    </div>
  );
}
