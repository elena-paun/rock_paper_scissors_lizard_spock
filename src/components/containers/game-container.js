import React, { useContext } from 'react';
import GameContext from '../provider/game-context'
import styled from 'styled-components'

import { Rules } from '../buttons/rules-button';
import { RuleSheet } from './rule-sheet';
import {
  StyledContainer,
  StyledLizard,
  StyledPaper,
  StyledPentagon,
  StyledRock,
  StyledScissors,
  StyledSpock,
} from '../../styles/game-components.styles';
import {
  StyledGame,
  PlayerContainer,
  OpponentContainer,
  SingleScissors,
  SingleSpock,
  SinglePaper,
  SingleLizard,
  SingleRock,
} from '../../styles/choices.styles';
import Continue from '../buttons/continue-button';
const GameMessage = styled.div`
  font-family: 'Barlow Semi Condensed';
  color: white;
  text-align: center;
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
       {playerChoice && 
       <OpponentContainer>
          {computerChoices[computerChoiceIndex]}
        </OpponentContainer>
       }
       <GameMessage>{message}</GameMessage>
      {showRules ? <RuleSheet /> : <Continue/> }
    </StyledGame>
  );
};
