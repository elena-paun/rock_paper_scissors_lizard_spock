import React from "react";
import logo from "../images/logo-bonus.svg";
import { Grid, makeStyles, Container } from "@material-ui/core";
import { Score } from "./Score";
import "../styles/header.styles.css";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "auto",
    maxHeight: "80px",
  },
  img: {
    width: "100px",
    marginLeft: theme.spacing(5),
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(5),
  },
  rectangle: {
    marginTop: theme.spacing(5),
    height: "150px",
    borderWeight: "10px",
    borderColor: "hsl(217, 16%, 45%)",
    borderRadius: "20px",
    borderStyle: "solid",
  },
}));
export const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container fixed component="main" maxWidth="lg">
        <div className={classes.rectangle}>
          <Grid container direction="row">
            <Grid item xs={1} sm={4} md={7} lg={8}>
              <img
                src={logo}
                alt="rock paper scissors lizard spock"
                className={classes.img}
              />
            </Grid>
            <Grid item xs sm>
              <Score />
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};
