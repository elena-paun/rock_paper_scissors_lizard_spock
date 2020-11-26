import React, { useContext } from "react";
//import { Container, Grid, makeStyles, SvgIcon } from "@material-ui/core";
import GameContext from './GameContext'
import styled from 'styled-components'

import { Rules } from "./Rules";
import { RuleSheet } from "./RuleSheet";
// import { Algorithm, CalculateWhoWins } from "./Utilities/Algorithm";
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
  OpponentContainer,
  SingleScissors,
  SingleSpock,
  SinglePaper,
  SingleLizard,
  SingleRock,
} from "../styles/EachPlayer";
import Continue from './Continue';
const GameMessage = styled.div`
  font-family: "Barlow Semi Condensed";
  color: white;
`

export const Game = () => {
  const {
    playerChoice, 
    computerChoiceIndex, 
    computerChoices, 
    showGame, 
    showScissors, 
    showSpock, 
    showPaper, 
    showLizard, 
    showRock, 
    showRules, 
    handleRules, 
    handleScissors, 
    handleSpock, 
    handlePaper, 
    handleRock, 
    handleLizard,
    message
  } = useContext(GameContext)
  // const renderComputerChoice = computerChoices.map(el => <li>{el[computerChoiceIndex]}</li>)
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
          <Rules handleRules={handleRules} />
        </StyledContainer>
      )}
      <PlayerContainer>
        {showScissors && (
          <div>
            <SingleScissors />
          </div>
        )}
        {showSpock && (
          <div>
            <SingleSpock />
          </div>
        )}
        {showPaper && (
          <div>
            <SinglePaper />
          </div>
        )}
        {showLizard && (
          <div>
            <SingleLizard />
          </div>
        )}

        {showRock && (
          <div>
            <SingleRock />
          </div>
        )}
      </PlayerContainer>
      {/* {computerChoices.map((computerChoice, idx) =>  ( */}
       {playerChoice && 
       <OpponentContainer>
          {computerChoices[computerChoiceIndex]}
        </OpponentContainer>
       }
       <GameMessage>{message}</GameMessage>
      {/* )) */}
      {/* } */}
      {showRules ? <RuleSheet /> : <Continue/> }
    </StyledGame>
  );
};
