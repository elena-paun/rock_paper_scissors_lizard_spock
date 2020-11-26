/* eslint-disable no-mixed-operators */
import React, { createContext, useEffect, useState, useMemo } from 'react'
import {
    ComputerScissors,
    ComputerSpock,
    ComputerPaper,
    ComputerLizard,
    ComputerRock,
} from "../styles/EachPlayer";
// import {
//     SingleScissors,
//     SingleSpock,
//     SinglePaper,
//     SingleLizard,
//     SingleRock,
//     HousePicked,
//     YouPicked,
//   } from "../styles/EachPlayer";

const GameContext = createContext()


// const GameProvider = ({ userChoice }) => {
//     const [userScore, setUserScore] = useState(0)
//     const [computerScore, setComputerScore] = useState(0)
//     const computerChoices = [
//       <ComputerRock />,
//       <ComputerPaper />,
//       <ComputerScissors />,
//       <ComputerLizard />,
//       <ComputerSpock />,
//     ];
//     const generateRandomNumber = (min, max) => {
//       return Math.floor(Math.random() * (max - min + 1)) + min;
//       //return Math.floor(Math.random(), );
//     };
//     //console.log(generateRandomNumber(0, 4));
//     const [computerChoice, setComputerChoice] = useState(false);
  
//     const generateComputerChoice = useCallback(() => {
//       return generateRandomNumber(0, computerChoices.length - 1);
//     });
  
//     let computerChoiceIndex = generateComputerChoice();
  
//     // const humanChoices = [
//     //   <SingleRock />,
//     //   <SinglePaper />,
//     //   <SingleScissors />,
//     //   <SingleLizard />,
//     //   <SingleSpock />,
//     // ];
//     // useEffect(() => {
//     //   let timer = setTimeout(() => setComputerChoice(true), 2000);
//     //   return () => {
//     //     clearTimeout(timer);
//     //   };
//     // }, []);
//     // setComputerChoice(true);
//     const truthTable = [
//       [0, 0, 1, 1, 0], // rock
//       [1, 0, 0, 0, 1], // paper
//       [0, 1, 0, 1, 0], // scissors
//       [0, 1, 0, 0, 1], // lizard
//       [1, 0, 1, 0, 0], // spock
//     ]; // rock paper scissors lizard spock
  
//     const getPlayerChoice = (choice) => {
//       switch (choice) {
//         case "rock":
//           return 0;
//         case "paper":
//           return 1;
//         case "scissors":
//           return 2;
//         case "lizard":
//           return 3;
//         case "spock":
//           return 4;
//         default:
//           return 0;
//       }
//     };
//     useEffect(() => {
//         setUserScore(truthTable[getPlayerChoice(userChoice)][computerChoiceIndex])
//         setComputerScore(truthTable[generateComputerChoice()][getPlayerChoice(userChoice)])
//     }, [computerChoiceIndex, truthTable, userChoice, generateComputerChoice])
//     console.log("Player score is ", userScore);
//     console.log("Computer score is", computerScore)
//     // const computerScore =
//     //   truthTable[computerChoiceIndex][getPlayerChoice(userChoice)];
//     //console.log(generateComputerChoice());
//     //   **
//     //  * An array that represents how many points a player gets based on
//     //  * what the computer chose and what the player chose.
//     //  *.----------.------.-------.----------.
//     //  *|          | Rock | Paper | Scissors |   Lizard   Spock
//     //  *:----------+------+-------+----------:
//     //  *| Rock     |    0 |     0 |        1 |     1         0
//     //  *:----------+------+-------+----------:
//     //  *| Paper    |   1  |     0 |        0 |     0         1
//     //  *:----------+------+-------+----------:
//     //  *| Scissors |    0 |     1 |        0 |     1         0
//     //  *'----------'------'-------'----------'
//     //     Lizard        0       1         0         0        1
//     //*:----------+------+-------+----------:
//     //   Spock         1       0          1       0         0
//     //*:----------+------+-------+----------:
//     //
//     //  * @type {Array}
//     //  */
//     //
//     //return <div></div>;
//     return (
//       //computerChoice && (
//       <div>
//         {computerChoices[computerChoiceIndex]}
//         <YouPicked>YOU PICKED</YouPicked>;
//         <HousePicked>THE HOUSE PICKED</HousePicked>
//       </div>
//     );
//     // );
//   };
//   const calculateWhoWins = (playerChoice, computerChoice) => {
    
//     const truthTable = [
//       [0, 0, 1, 1, 0],
//       [1, 0, 0, 0, 1],
//       [0, 1, 0, 1, 0],
//       [0, 1, 0, 0, 1],
//       [1, 0, 1, 0, 0],
//     ];
  
//     if (
//       playerChoice < 0 ||
//       playerChoice > 2 ||
//       computerChoice < 0 ||
//       computerChoice > 2
//     )
//       // eslint-disable-next-line no-throw-literal
//       throw "Invalid inputs";
//       const playerScore = truthTable[playerChoice][computerChoice];
//       const computerScore = truthTable[computerChoice][playerChoice];
  
//     if (playerScore > computerScore) {
//       return "Player";
//     } else if (computerScore > playerScore) {
//       return "Computer";
//     } else if (playerScore === computerScore) {
//       return "Nobody";
//     }
//   };
  export const GameProvider = ({children}) => {
    const [showRules, setShowRules] = useState(false);
    const [showGame, setShowGame] = useState(false);
    const [playerChoice, setPlayerChoice] = useState()
    const [showScissors, setShowScissors] = useState(false);
    const [showPaper, setShowPaper] = useState(false);
    const [showSpock, setShowSpock] = useState(false);
    const [showLizard, setShowLizard] = useState(false);
    const [showRock, setShowRock] = useState(false);
    const [message, setMessage] = useState('')
    const [userScore, setUserScore] = useState(0)
    const [computerScore, setComputerScore] = useState(0)
    const computerChoices = [
      <ComputerRock />,
      <ComputerPaper />,
      <ComputerScissors />,
      <ComputerLizard />,
      <ComputerSpock />,
    ];
    const generateRandomNumber = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    const computerChoiceIndex = useMemo(() => generateRandomNumber(0, computerChoices.length - 1), [computerChoices.length]);
    console.log({computerChoiceIndex})
    const handleRules = () => {
      setShowRules(!showRules);
    };
  
    const handleScissors = () => {
      setPlayerChoice('scissors')
      setShowScissors(!showScissors);
      setShowGame(!showGame);
    };
    const handlePaper = () => {
      setPlayerChoice('paper')
      setShowPaper(!showPaper);
      setShowGame(!showGame);
    };
    const handleSpock = (e) => {
      setPlayerChoice('spock')
      setShowSpock(!showSpock);
      setShowGame(!showGame);
    };
    const handleLizard = () => {
      setPlayerChoice('lizard')
      setShowLizard(!showLizard);
      setShowGame(!showGame);
    };
    const handleRock = () => {
      setPlayerChoice('rock')
      setShowRock(!showRock);
      setShowGame(!showGame);
    };
   
   
    
    // const generateComputerChoice = useMemo(() => {
    //   return generateRandomNumber(0, computerChoices.length - 1);
    // }, [computerChoices.length]);
  
   

    const truthTable = [
        [0, 0, 1, 1, 0], // rock
        [1, 0, 0, 0, 1], // paper
        [0, 1, 0, 1, 0], // scissors
        [0, 1, 0, 0, 1], // lizard
        [1, 0, 1, 0, 0], // spock
      ]; // rock paper scissors lizard spock
    
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
      const playerIndex = useMemo(() => getPlayerChoice(playerChoice), [playerChoice]);
      
      useEffect(() => {
        if (playerChoice) {
          setUserScore(truthTable[getPlayerChoice(playerChoice)][computerChoiceIndex])
          setComputerScore(truthTable[computerChoiceIndex][getPlayerChoice(playerChoice)])
        } 
        
      }, [computerChoiceIndex, playerChoice, truthTable])
      useEffect(() => {
        if (playerChoice === 'rock' && computerChoiceIndex === 1 ||
            playerChoice === 'paper' && computerChoiceIndex === 0 ) {
          setMessage('Paper covers rock. ')
        }
        if (playerChoice === 'paper' && computerChoiceIndex === 2 || 
            playerChoice === 'scissors' && computerChoiceIndex === 1 ) {
          setMessage('Scissors cuts paper.')
        }
        if (playerChoice === 'scissors' && computerChoiceIndex === 3 ||
            playerChoice === 'lizard' && computerChoiceIndex === 2) {
          setMessage('Scissors decapitates lizard.')
        }
        if (playerChoice === 'lizard' && computerChoiceIndex === 4 ||
            playerChoice === 'spock' && computerChoiceIndex === 3) {
          setMessage('Lizard poisons Spock.')
        }
        if (playerChoice === 'spock' && computerChoiceIndex === 0 ||
            playerChoice === 'rock' && computerChoiceIndex === 4) {
          setMessage('Spock vaporizes rock.')
        }
        if (playerChoice === 'lizard' && computerChoiceIndex === 1 ||
            playerChoice === 'paper' && computerChoiceIndex === 3) {
          setMessage('Lizard eats paper.')
        }
        if (playerChoice === 'rock' && computerChoiceIndex === 3 ||
            playerChoice === 'lizard' && computerChoiceIndex === 0) {
          setMessage('Rock crushes lizard.')
        }
        if (playerChoice === 'rock' && computerChoiceIndex === 2 ||
            playerChoice === 'scissors' && computerChoiceIndex === 0) {
          setMessage('Rock crushes scissors.')
        }
        if (playerChoice === 'paper' && computerChoiceIndex === 4 ||
            playerChoice === 'spock' && computerChoiceIndex === 1) {
          setMessage('Paper disproves Spock.')
        }
        if (playerChoice === 'spock' && computerChoiceIndex === 2 ||
            playerChoice === 'scissors' && computerChoiceIndex === 4) {
          setMessage('Spock smashes scissors. ')
        }
          else if (playerIndex === computerChoiceIndex && playerChoice) setMessage('Equal power. Nobody wins.')
      }, [computerChoiceIndex, playerChoice, playerIndex])
  
      return (
        <GameContext.Provider 
          value={{
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
            setComputerScore, 
            setUserScore, 
            truthTable, 
            computerChoiceIndex, 
            getPlayerChoice, 
            userScore, 
            computerScore,
            computerChoices,
            playerChoice,
            message
        }}>
            {children}
        </GameContext.Provider>

      )
  }

  export default GameContext