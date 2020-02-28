import * as React from "react";
import { useEffect, useState } from "react";
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

import API from "../../service/api";

import { INumberedMap, IStatistics } from "../../interfaces/IData";

export interface IStatisticsProps {}

let publisherList: Array<INumberedMap> = [];
let contentTypeList: Array<INumberedMap> = [];

export default function Statistics(props: IStatisticsProps) {
  const [statistics, setStatistics] = useState<IStatistics>({
    publisher: {},
    contentType: {}
  });

  useEffect(() => {
    (async () => {
      try {
        let pubRes = await API.get("publisher");
        let contentRes = await API.get("contentType");
        if (pubRes.data.status === "ok") {
          if (contentRes.data.status === "ok") {
            // set state
            setStatistics({
              publisher: pubRes.data.data,
              contentType: contentRes.data.data
            });
          }
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  // iterate through publisher
  for (const key in statistics.publisher) {
    const value = statistics.publisher[key];
    publisherList.push({
      [key]: value
    });
  }
  // sort
  publisherList.sort((a, b) =>
    Object.values(a)[0] > Object.values(b)[0] ? -1 : 1
  );
  // iterate through content type
  for (const key in statistics.contentType) {
    const value = statistics.contentType[key];
    contentTypeList.push({
      [key]: value
    });
  }
  // sort
  contentTypeList.sort((a, b) =>
    Object.values(a)[0] > Object.values(b)[0] ? -1 : 1
  );

  let tableContent = publisherList.map((item, index) => {
    if (contentTypeList.length - 1 > index) {
      let contentTypeItem = contentTypeList[index];
      return (
        <TableRow key={index}>
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
        <TableRow key={index}>
          <TableCell>{Object.keys(item)[0]}</TableCell>
          <TableCell>
            <Chip label={Object.values(item)[0]} size="small" />
          </TableCell>
        </TableRow>
      );
    }
  });

  let publisherTable = () => {};
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
        <CardContent
          style={{
            paddingTop: 0
          }}
        >
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography variant="h6">Source</Typography>
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
