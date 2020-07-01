import React, { useState } from "react";
//import { Container, Grid, makeStyles, SvgIcon } from "@material-ui/core";
import { Pentagon } from "./Pentagon";
import { Scissors } from "./Scissors";
import { Spock } from "./Spock";
import { Paper } from "./Paper";
import { Lizard } from "./Lizard";
import { Rock } from "./Rock";
import { Rules } from "./Rules";
import { RuleSheet } from "./RuleSheet";
import styled from "styled-components";
const StyledContainer = styled.div`
  @media only screen and (max-height: 765px) {
    top: -70px;
  }
  position: relative;
  top: 50px;
  left: 0;
  height: 200px;
  width: auto;
  margin: 0 auto;
`;

const StyledPentagon = styled(Pentagon)`
  margin: 0 auto;
  margin-top: 200px;
  position: relative;
  max-width: 250px;
  height: auto;
  top: 0;
  left: 0;
  z-index: 0;
  @media only screen and (max-height: 765px) {
    position: relative;
    width: 250px;
    height: 250px;
  }
`;
const StyledScissors = styled(Scissors)`
  @media only screen and (max-height: 765px) {
    position: relative;
    width: 80px;
    border: 5px solid hsl(39, 89%, 49%);
    box-shadow: 0px 6px 0px -1px hsl(39, 90%, 27%);
    padding: 20px;

    padding-bottom: 30px;
    max-width: 15%;
    width: 80px;
    height: 28px;
    top: -620px;
    left: 80px;
  }
  padding: 25px;
  padding-bottom: 30px;
  z-index: 2;
  max-width: 20%;
  width: 80px;
  height: 45px;
  top: -50px;
  left: 29%;
  position: absolute;
  background-color: white;
  border-radius: 50%;
  display: block;
  text-align: center;
  border: 15px solid hsl(39, 89%, 49%);
  box-shadow: 0px 8px 0px -1px hsl(39, 90%, 27%);
`;
const StyledPaper = styled(Paper)`
  @media only screen and (max-height: 765px) {
    position: relative;
    width: 100px;
    border: 5px solid hsl(230, 89%, 62%);
    box-shadow: 0px 6px 0px -1px hsl(230, 54%, 34%);
    padding: 20px;
    padding-bottom: 27px;
    max-width: 15%;
    width: 80px;
    height: 30px;
    top: -180px;
    left: 175px;
  }
  padding: 25px;
  padding-bottom: 30px;
  max-width: 19%;
  width: 80px;
  height: 43px;
  top: 50px;
  left: 75%;
  position: absolute;
  background-color: white;
  border-radius: 50%;
  display: block;
  text-align: center;
  border: 15px solid hsl(230, 89%, 62%);
  box-shadow: 0px 8px 0px -1px hsl(230, 54%, 34%);
`;

const StyledSpock = styled(Spock)`
  @media only screen and (max-height: 765px) {
    position: relative;
    width: 100px;
    border: 5px solid hsl(189, 59%, 53%);
    box-shadow: 0px 6px 0px -1px hsl(189, 56%, 28%);
    padding-left: 20px;
    padding-top: 12px;
    padding-right: 19px;
    padding-bottom: 35px;
    max-width: 15%;
    width: 80px;
    height: 28px;
    top: -270px;
    left: -20px;
  }
  padding-left: 30px;
  padding-right: 25px;
  padding-top: 25px;
  padding-bottom: 50px;
  max-width: 19%;
  width: 70px;
  height: 30px;
  top: 40px;
  left: -20%;
  position: absolute;
  background-color: white;
  border-radius: 50%;
  display: block;
  text-align: center;
  border: 15px solid hsl(189, 59%, 53%);
  box-shadow: 0px 8px 0px -1px hsl(189, 56%, 28%);
`;

const StyledLizard = styled(Lizard)`
  @media only screen and (max-height: 765px) {
    position: relative;
    width: 100px;
    border: 5px solid hsl(261, 73%, 60%);
    box-shadow: 0px 6px 0px -1px hsl(261, 47%, 30%);
    padding: 20px;
    max-width: 17%;
    height: 42px;
    top: -240px;
    left: 5px;
  }
  padding-top: 20px;
  max-width: 30%;
  width: 70px;
  padding-left: 15px;
  padding-right: 15px;
  height: 80px;
  top: 200px;
  left: -10%;
  position: absolute;
  background-color: white;
  border-radius: 50%;
  display: block;
  text-align: center;
  border: 15px solid hsl(261, 73%, 60%);
  box-shadow: 0px 8px 0px -1px hsl(261, 47%, 30%);
`;
const StyledRock = styled(Rock)`
  @media only screen and (max-height: 765px) {
    position: relative;
    width: 100px;
    border: 5px solid hsl(349, 71%, 52%);
    box-shadow: 0px 6px 0px -1px rgba(171, 36, 63, 1);
    padding: 20px;
    padding-bottom: 10px;
    max-width: 15%;
    width: 89px;
    height: 47px;
    top: -330px;
  }
  padding-top: 25px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 25px;
  max-width: 50%;
  width: 60px;
  height: 70px;
  top: 200px;
  left: 60%;
  position: absolute;
  background-color: white;
  border-radius: 50%;
  text-align: center;
  border: 15px solid hsl(349, 71%, 52%);
  box-shadow: 0px 8px 0px -1px rgba(171, 36, 63, 1);
`;

export const Game = () => {
  const [showRules, setShowRules] = useState(false);
  // const handleClick = () => {
  //   setShowRules(!showRules);
  // };
  return (
    <div>
      <StyledContainer>
        {showRules && <RuleSheet />}

        <StyledPentagon>
          <StyledPaper />

          <StyledSpock />
          <StyledLizard />
          <StyledRock />
          <StyledScissors />
        </StyledPentagon>
        <Rules handleClick={() => setShowRules(!showRules)} />
      </StyledContainer>
    </div>
  );
};
// const useStyles = makeStyles((theme) => ({
//   root: {
//     position: "relative",

//     //   width: "100%",
//   },
//   pentagon: {
//     width: "100%",
//     height: "100px",
//     //  minWidth: "300px",
//     //  left: "15%",
//     marginTop: "200px",
//     // display: "flex",
//     zIndex: -1,
//     // flexDirection: "row",
//     //  flexWrap: "wrap",
//     position: "relative",
//     //alignItems: "flex-end",
//     // weight: "50%",
//     //height: "auto",
//     //  position: "relative",
//   },
//   paper: {
//     width: "3%",
//     // minWidth: "50px",
//     // height: "60px",
//     //minWidth: "5%",
//     // alignItems: "flex-end",
//     //display: "inline-flex",
//     //width: "7%",
//     // maxWidth: "50px",
//     // height: "5vh",
//     position: "absolute",
//     // marginTop: "-200px",
//     //left: "70%",
//     //left: 0,
//     // bottom: "10%",
//     // zIndex: 2,
//   },
// }));
