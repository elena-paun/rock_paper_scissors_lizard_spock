import React, { useEffect, useState } from "react";
import {
  ComputerScissors,
  ComputerSpock,
  ComputerPaper,
  ComputerLizard,
  ComputerRock,
} from "../../styles/EachPlayer";
import {
  SingleScissors,
  SingleSpock,
  SinglePaper,
  SingleLizard,
  SingleRock,
  HousePicked,
  YouPicked,
} from "../../styles/EachPlayer";
import styled from "styled-components";

export const Algorithm = ({ userChoice }) => {
  const computerChoices = [
    <ComputerRock />,
    <ComputerPaper />,
    <ComputerScissors />,
    <ComputerLizard />,
    <ComputerSpock />,
  ];
  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    //return Math.floor(Math.random(), );
  };
  //console.log(generateRandomNumber(0, 4));
  const [computerChoice, setComputerChoice] = useState(false);

  const generateComputerChoice = () => {
    return generateRandomNumber(0, computerChoices.length - 1);
  };

  let computerChoiceIndex = generateComputerChoice();

  // const humanChoices = [
  //   <SingleRock />,
  //   <SinglePaper />,
  //   <SingleScissors />,
  //   <SingleLizard />,
  //   <SingleSpock />,
  // ];
  // useEffect(() => {
  //   let timer = setTimeout(() => setComputerChoice(true), 2000);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, []);
  // setComputerChoice(true);
  const truthTable = [
    [0, 0, 1, 1, 0], // rock
    [1, 0, 0, 0, 1], // paper
    [0, 1, 0, 1, 0], // scissors
    [0, 1, 0, 0, 1], // lizard
    [1, 0, 1, 0, 0], // spock
  ];

  const getPlayerChoice = (choice) => {
    switch (choice) {
      case "rock":
        return 0;
      case "paper":
        return 1;
      case "scissors":
        return 2;
      case "lizard":
        return 3;
      case "spock":
        return 4;
      default:
        return 0;
    }
  };

  const playerScore =
    truthTable[getPlayerChoice(userChoice)][computerChoiceIndex];
  console.log("Player score is " + playerScore);
  // const computerScore =
  //   truthTable[computerChoiceIndex][getPlayerChoice(userChoice)];
  //console.log(generateComputerChoice());
  //   **
  //  * An array that represents how many points a player gets based on
  //  * what the computer chose and what the player chose.
  //  *.----------.------.-------.----------.
  //  *|          | Rock | Paper | Scissors |   Lizard   Spock
  //  *:----------+------+-------+----------:
  //  *| Rock     |    0 |     0 |        1 |     1         0
  //  *:----------+------+-------+----------:
  //  *| Paper    |   1  |     0 |        0 |     0         1
  //  *:----------+------+-------+----------:
  //  *| Scissors |    0 |     1 |        0 |     1         0
  //  *'----------'------'-------'----------'
  //     Lizard        0       1         0         0        1
  //*:----------+------+-------+----------:
  //   Spock         1       0          1       0         0
  //*:----------+------+-------+----------:
  //
  //  * @type {Array}
  //  */
  //
  //return <div></div>;
  return (
    //computerChoice && (
    <div>
      {computerChoices[computerChoiceIndex]}
      <YouPicked>YOU PICKED</YouPicked>;
      <HousePicked>THE HOUSE PICKED</HousePicked>
    </div>
  );
  // );
};
export const CalculateWhoWins = (playerChoice, computerChoice) => {
  const truthTable = [
    [0, 0, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 1, 0, 0, 1],
    [1, 0, 1, 0, 0],
  ];

  if (
    playerChoice < 0 ||
    playerChoice > 2 ||
    computerChoice < 0 ||
    computerChoice > 2
  )
    throw "Invalid inputs";
  const playerScore = truthTable[playerChoice][computerChoice];
  const computerScore = truthTable[computerChoice][playerChoice];

  if (playerScore > computerScore) {
    return "Player";
  } else if (computerScore > playerScore) {
    return "Computer";
  } else if (playerScore === computerScore) {
    return "Nobody";
  }
};
