import React from "react";
import "./App.css";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";

import LatestPaperList from "./components/LatestPaperList";
import PartnerCountry from "./components/PartnerCountry";
import Keyword from "./components/Keyword";
// import Statistics from "./components/Statistics";

import LatestPublications from "./components/Latest/LatestPublications";
import Overview from "./components/Overview/Overview";
import CollaborationCountry from "./components/CollaborationCountry/CollaborationCountry";
import Keywords from "./components/Keywords/Keywords";
import Statistics from "./components/Statistics/Statistics";

// TODO: get data asynchronously
const data = require("./statics/data.json");

// styles for basic layout
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: "22px",
      paddingTop: "10px",
      paddingLeft: "2px",
      height: "900px"
    },
    upper: {
      position: "relative",
    },
    lower: {
    }
  })
);

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      {/* layout using grid system from Material-UI */}
      <div className={classes.container}>
        {/* <Grid container spacing={1}>
          <Grid item xs={12} md={4}> */}
        {/* Latest */}
        {/* <LatestPaperList data={data.latest} />
          </Grid>
          <Grid item xs={12} md={4}> */}
        {/* Overview */}
        {/* <Overview data={data.overview} />
          </Grid>
          <Grid item xs={12} md={4}> */}
        {/* Partner Country */}
        {/* <PartnerCountry data={data.partnerCountry} />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12} md={4}> */}
        {/* keywords */}
        {/* <Keyword keywords={data.keyword} />
          </Grid>
          <Grid item xs={12} md={8}> */}
        {/* Statistics */}
        {/* <Statistics data={data.statistics} />
          </Grid>
        </Grid> */}
        <div className={classes.upper}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={4}>
              <LatestPublications />
            </Grid>
            <Grid item xs={12} md={4}>
              <Overview />
            </Grid>
            <Grid item xs={12} md={4}>
              <CollaborationCountry />
            </Grid>
          </Grid>
        </div>
        <div className={classes.lower}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={4}>
              <Keywords />
            </Grid>
            <Grid item xs={12} md={8}>
              <Statistics />
            </Grid>
          </Grid>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
