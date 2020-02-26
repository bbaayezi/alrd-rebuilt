import * as React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Chip from "@material-ui/core/Chip";

import data from "../../statics/data.json";

let contentType = data.statistics.contentType;
let publisher = data.statistics.publisher;

export interface IStatisticsProps {}

export default function Statistics(props: IStatisticsProps) {
  let tableContent = publisher.map((item, index) => {
    if (contentType.length - 1 > index) {
      let contentTypeItem = contentType[index];
      return (
        <TableRow>
          <TableCell>{Object.keys(item)[0]}</TableCell>
          <TableCell>
            <Chip label={Object.values(item)[0]} size="small" />
          </TableCell>
          <TableCell>{Object.keys(contentTypeItem)[0]}</TableCell>
          <TableCell>
            <Chip label={Object.values(contentTypeItem)[0]} size="small" />
          </TableCell>
        </TableRow>
      );
    } else {
      return (
        <TableRow>
          <TableCell>{Object.keys(item)[0]}</TableCell>
          <TableCell>
            <Chip label={Object.values(item)[0]} size="small" />
          </TableCell>
        </TableRow>
      );
    }
  });
  return (
    <div>
      <Card
        style={{
          minHeight: "330px"
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
        <CardContent style={{ paddingTop: 0 }}>
          {/* <Grid container>
            <Grid item xs={12} md={7}>
              <Typography variant="h6">Publisher</Typography>
              publisher data
            </Grid>
            <Grid item xs={12} md={5}>
              <Typography variant="h6">Content Type</Typography>
              content type data
            </Grid>
          </Grid> */}
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography variant="h6">Publisher</Typography>
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell>
                    <Typography variant="h6">Content Type</Typography>
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{tableContent}</TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </div>
  );
}
