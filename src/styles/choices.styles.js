import styled from 'styled-components';
import { Spock } from '../components/choices/spock';
import { Paper } from '../components/choices/paper';
import { Scissors } from '../components/choices/scissors';
import { Lizard } from '../components/choices/lizard';
import { Rock } from '../components/choices/rock';
export const SingleScissors = styled(Scissors)`
  @media only screen and (max-height: 765px) {
    border: 5px solid hsl(39, 89%, 49%);
    box-shadow: 0px 6px 0px -1px hsl(39, 90%, 27%);
    padding-left: 25px;
    padding-top: 18px;
    padding-right: 19px;
    padding-bottom: 53px;
    max-width: 15%;
    width: 45px;
    height: 17px;
  }
  padding-left: 35px;
  padding-right: 25px;
  padding-top: 23px;
  padding-bottom: 45px;
  max-width: 20%;
  width: 60px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: block;
  margin: auto;
  text-align: center;

  border: 15px solid hsl(39, 89%, 49%);
  box-shadow: 0px 8px 0px -1px hsl(39, 90%, 27%);
`;
export const SingleSpock = styled(Spock)`
  @media only screen and (max-height: 765px) {
    border: 5px solid hsl(189, 59%, 53%);
    box-shadow: 0px 6px 0px -1px hsl(189, 56%, 28%);
    padding-left: 25px;
    padding-top: 13px;
    padding-right: 19px;
    padding-bottom: 60px;
    max-width: 15%;
    width: 47px;
    height: 17px;
  }
  padding-left: 35px;
  padding-right: 25px;
  padding-top: 20px;
  padding-bottom: 50px;
  max-width: 19%;
  width: 60px;
  height: 47px;
  background-color: white;
  border-radius: 50%;
  display: block;
  margin: auto;
  text-align: center;
  border: 15px solid hsl(189, 59%, 53%);
  box-shadow: 0px 8px 0px -1px hsl(189, 56%, 28%);
`;

export const SinglePaper = styled(Paper)`
  @media only screen and (max-height: 765px) {
    border: 5px solid hsl(230, 89%, 62%);
    box-shadow: 0px 6px 0px -1px hsl(230, 54%, 34%);
    padding-left: 25px;
    padding-top: 13px;
    padding-right: 19px;
    padding-bottom: 60px;
    max-width: 15%;
    width: 47px;
    height: 17px;
  }
  padding-left: 35px;
  padding-right: 25px;
  padding-top: 20px;
  padding-bottom: 50px;
  max-width: 19%;
  width: 60px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: block;
  margin: auto;
  text-align: center;
  border: 15px solid hsl(230, 89%, 62%);
  box-shadow: 0px 8px 0px -1px hsl(230, 54%, 34%);
`;
export const SingleLizard = styled(Lizard)`
  @media only screen and (max-height: 765px) {
    border: 5px solid hsl(261, 73%, 60%);
    box-shadow: 0px 6px 0px -1px hsl(261, 47%, 30%);
    padding-left: 24px;
    padding-top: 22px;
    padding-right: 19px;
    padding-bottom: 50px;
    max-width: 15%;
    width: 47px;
    height: 17px;
  }
  padding-left: 15px;
  padding-right: 25px;
  padding-top: 23px;
  padding-bottom: 40px;
  max-width: 20%;
  width: 70px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: block;
  margin: auto;
  text-align: center;

  border: 15px solid hsl(261, 73%, 60%);
  box-shadow: 0px 8px 0px -1px hsl(261, 47%, 30%);
`;
export const SingleRock = styled(Rock)`
  @media only screen and (max-height: 765px) {
    border: 5px solid hsl(349, 71%, 52%);
    box-shadow: 0px 6px 0px -1px rgba(171, 36, 63, 1);
    padding-left: 25px;
    padding-top: 20px;
    padding-right: 22px;
    padding-bottom: 55px;
    max-width: 15%;
    width: 50px;
    height: 17px;
  }
  padding-left: 15px;
  padding-right: 25px;
  padding-top: 23px;
  padding-bottom: 40px;
  max-width: 20%;
  width: 70px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: block;
  margin: auto;
  text-align: center;

  border: 15px solid hsl(349, 71%, 52%);
  box-shadow: 0px 8px 0px -1px rgba(171, 36, 63, 1);
`;
export const ComputerScissors = styled(SingleScissors)`
  @media only screen and (max-height: 765px) {
    left: 30%;
    top: -100px;
  }
  left: 40%;
  top: -140px;
  position: relative;
`;
export const ComputerSpock = styled(SingleSpock)`
  @media only screen and (max-height: 765px) {
    left: 30%;
    top: -100px;
  }
  left: 40%;
  top: -140px;
  position: relative;
`;
export const ComputerPaper = styled(SinglePaper)`
  @media only screen and (max-height: 765px) {
    left: 30%;
    top: -100px;
  }
  left: 40%;
  top: -140px;
  position: relative;
`;
export const ComputerRock = styled(SingleRock)`
  @media only screen and (max-height: 765px) {
    left: 30%;
    top: -100px;
  }
  left: 40%;
  top: -140px;
  position: relative;
`;
export const ComputerLizard = styled(SingleLizard)`
  @media only screen and (max-height: 765px) {
    left: 30%;
    top: -100px;
  }
  left: 40%;
  top: -140px;
  position: relative;
`;

export const PlayerContainer = styled.div`
  @media only screen and (max-height: 768px) {
    top: 100px;
    margin-top: 180px;
    left: -15%;
  }
  left: -20%;
  text-align: center;
  justify-content: space-around;
  position: relative;
  margin-top: 350px;
  width: auto;
`;
export const OpponentContainer = styled.div`
  @media only screen and (max-height: 768px) {
    top: 100px;
    margin-top: 180px;
    left: -15%;
  }
  left: -20%;
  text-align: center;
  justify-content: space-around;
  position: relative;
  width: auto;
`;
export const StyledGame = styled.div`
  position: relative;
  width: auto;
  margin: auto;
  height: fit-content;
`;
export const HousePicked = styled.p`
  font-family: 'Barlow Semi Condensed';
  color: white;
  @media only screen and (max-height: 765px) {
    left: 30%;
    top: -150px;
    font-size: 15px;
  }
  font-size: 20px;

  left: 40%;
  top: -207px;
  position: relative;
`;
export const YouPicked = styled(HousePicked)`
  @media only screen and (max-height: 765px) {
    left: -12px;
    top: -83px;
  }
  top: -120px;
  left: -10px;
`;
