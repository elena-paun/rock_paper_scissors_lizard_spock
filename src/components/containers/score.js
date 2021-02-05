import React, { useContext } from 'react';
import GameContext from '../provider/game-context'
import { Container, Text, ScoreNumber, ScoreBox } from '../../styles/score-table.styles';


export const Score = () => {
  const {userScore, computerScore} = useContext(GameContext)
  return (
    <Container>
      <ScoreBox>
        <Text>YOUR SCORE</Text>
        <ScoreNumber>{userScore}</ScoreNumber>
      </ScoreBox>
      <ScoreBox>
        <Text>HOUSE'S SCORE</Text>
        <ScoreNumber>{computerScore}</ScoreNumber>
      </ScoreBox>
    </Container>
  );
};
