import React from "react";
import "./App.css";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";

import LatestPublications from "./components/Latest/LatestPublications";
import Overview from "./components/Overview/Overview";
import CollaborationCountry from "./components/CollaborationCountry/CollaborationCountry";
import Keywords from "./components/Keywords/Keywords";
import Statistics from "./components/Statistics/Statistics";

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
      position: "relative"
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
        <div>
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
