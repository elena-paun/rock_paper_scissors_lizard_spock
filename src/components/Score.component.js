import React from "react";
import { makeStyles} from "@material-ui/core";
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
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <p className={classes.text}>SCORE</p>
    </div>
  );
};
