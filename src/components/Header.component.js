import React from "react";
import logo from "../images/logo-bonus.svg";
import { Grid, makeStyles, Container, CardMedia } from "@material-ui/core";

import { Score } from "./Score.component";
import "../styles/header.styles.css";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: theme.spacing(2),
    marginTop: "10px",
    width: "auto",
    maxHeight: "auto",
  },
  img: {
    marginLeft: theme.spacing(5),
    margin: theme.spacing(5),
  },
  rectangle: {
    marginTop: theme.spacing(10),
    marginRight: theme.spacing(5),
    borderWeight: "10px",
    borderColor: "hsl(217, 16%, 45%)",
    borderRadius: "20px",
    borderStyle: "solid",
    width: theme.spacing(55),
  },
}));
export const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container fixed component="main" maxWidth="xs">
        <div className={classes.rectangle}>
          <Grid container spacing={2}>
            <Grid item xs={5}>
              <img
                src={logo}
                alt="rock paper scissors lizard spock"
                className={classes.img}
              />
            </Grid>
            <Grid item xs>
              <Score />
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};
