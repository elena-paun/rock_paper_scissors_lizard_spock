import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import GameContext from './GameContext'
const Container = styled.div`
  padding: 24px;
  height: 80px;
  border-radius: 20px;
  background-color: white;
  width: 30%;
  min-width: 4rem;
  text-align: center;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  font-family: "Barlow Semi Condensed";
  @media (max-width:  )
`;
const Text = styled.div`
  text-align: center;
  padding-top: 8px;
  letter-spacing: 2px;
  color: hsl(229, 64%, 46%);
`
const ScoreNumber = styled.div`
  font-size: 40px;
  position: relative;
`
const ScoreBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`

export const Score = () => {
  const {userScore, computerScore} = useContext(GameContext)
  // const getInitialScore = () => {
  //   let initialScore = 0;
  //   if (localStorage.getItem("basicGameScore")) {
  //     initialScore = parseInt(localStorage.getItem("basicGameScore"), 10);
  //   }
  //   return initialScore;
  // };
  // const [userScore, handleUserScore] = useState(() => {
  //   const initialScore = getInitialScore();
  //   return initialScore;
  // });
  useEffect(() => {});
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
