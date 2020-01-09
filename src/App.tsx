import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";

import Typography from "@material-ui/core/Typography";

import LatestPaperList from "./components/LatestPaperList";

// styles for basic layout
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    upper: {
      height: "60vh"
    },
    lower: {
      height: "40vh"
    }
  })
);

const App: React.FC = () => {
  const classes = useStyles();
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <React.Fragment>
      <CssBaseline />
      {/* layout using grid system from Material-UI */}
      <Paper className={classes.upper}>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <Typography variant="h3">LATEST</Typography>
            <LatestPaperList />
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardHeader
                avatar={<Avatar>Y</Avatar>}
                title="Yuxiao Fang"
                subheader="2020-05-01"
              />
              <CardContent>
                <Typography variant="h5">
                  Aqueous solution-processed AlOx dielectrics and their biased
                  radiation response investigated by an on-site technique
                </Typography>
                <Typography></Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Paper>
      <div className={classes.lower}>Lower parts</div>
    </React.Fragment>
  );
};

export default App;
