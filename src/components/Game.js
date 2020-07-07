import React, { useState } from "react";
//import { Container, Grid, makeStyles, SvgIcon } from "@material-ui/core";
import { Rules } from "./Rules";
import { RuleSheet } from "./RuleSheet";
import { Algorithm, CalculateWhoWins } from "./Utilities/Algorithm";
import {
  StyledContainer,
  StyledLizard,
  StyledPaper,
  StyledPentagon,
  StyledRock,
  StyledScissors,
  StyledSpock,
} from "../styles/GameComponents";
import {
  StyledGame,
  PlayerContainer,
  SingleScissors,
  SingleSpock,
  SinglePaper,
  SingleLizard,
  SingleRock,
  YouPicked,
} from "../styles/EachPlayer";

export const Game = () => {
  const [showRules, setShowRules] = useState(false);
  const [showGame, setShowGame] = useState(false);

  const [showScissors, setShowScissors] = useState(false);
  const [showPaper, setShowPaper] = useState(false);
  const [showSpock, setShowSpock] = useState(false);
  const [showLizard, setShowLizard] = useState(false);
  const [showRock, setShowRock] = useState(false);

  const handleClick = () => {
    setShowRules(!showRules);
  };

  const handleScissors = () => {
    setShowScissors(!showScissors);
    setShowGame(!showGame);
  };
  const handlePaper = () => {
    setShowPaper(!showPaper);
    setShowGame(!showGame);
  };
  const handleSpock = (e) => {
    setShowSpock(!showSpock);
    setShowGame(!showGame);
  };
  const handleLizard = () => {
    setShowLizard(!showLizard);
    setShowGame(!showGame);
  };
  const handleRock = () => {
    setShowRock(!showRock);
    setShowGame(!showGame);
  };
  return (
    <StyledGame>
      {!showGame && (
        <StyledContainer>
          <StyledPentagon>
            <StyledPaper handlePaper={handlePaper} />
            <StyledSpock handleSpock={handleSpock} />
            <StyledLizard handleLizard={handleLizard} />
            <StyledRock handleRock={handleRock} />
            <StyledScissors handleScissors={handleScissors} />
          </StyledPentagon>
          <Rules handleClick={handleClick} />
        </StyledContainer>
      )}
      <PlayerContainer>
        {showScissors && (
          <div>
            <SingleScissors />
            <Algorithm />
          </div>
        )}
        {showSpock && (
          <div>
            <SingleSpock />
            <Algorithm />
          </div>
        )}
        {showPaper && (
          <div>
            <SinglePaper />
            <Algorithm userChoice="paper" />
          </div>
        )}
        {showLizard && (
          <div>
            <SingleLizard />
            <Algorithm />
          </div>
        )}

        {showRock && (
          <div>
            <SingleRock />
            <Algorithm />
          </div>
        )}
      </PlayerContainer>
      {showRules && <RuleSheet />}
    </StyledGame>
  );
};
