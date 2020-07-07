import React, { useState, useEffect } from "react";
import { Grid, makeStyles, Container } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(3),
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(10),
    height: theme.spacing(18),
    borderRadius: "20px",
    backgroundColor: "white",
  },
  text: {
    textAlign: "center",
    fontFamily: "Barlow Semi Condensed",
    paddingTop: theme.spacing(2),
    letterSpacing: "2px",
    color: "hsl(229, 64%, 46%)",
  },
}));
export const Score = () => {
  const getInitialScore = () => {
    let initialScore = 0;
    if (localStorage.getItem("basicGameScore")) {
      initialScore = parseInt(localStorage.getItem("basicGameScore"), 10);
    }
    return initialScore;
  };
  const [userScore, handleUserScore] = useState(() => {
    const initialScore = getInitialScore();
    return initialScore;
  });

  useEffect(() => {});
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <p className={classes.text}>SCORE</p>
      <p className={classes.score}>{userScore}</p>
    </div>
  );
};
