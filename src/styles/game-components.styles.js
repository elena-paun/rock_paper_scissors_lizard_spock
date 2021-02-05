import styled from 'styled-components';
import { Pentagon } from '../components/choices/pentagon';
import { Scissors } from '../components/choices/scissors';
import { Spock } from '../components/choices/spock';
import { Paper } from '../components/choices/paper';
import { Lizard } from '../components/choices/lizard';
import { Rock } from '../components/choices/rock';

export const StyledContainer = styled.div`
  @media only screen and (max-height: 765px) {
    top: -60px;
  }
  position: relative;
  top: 50px;
  left: 0;
  height: 200px;
  width: auto;
  margin: 0 auto;
`;

export const StyledPentagon = styled(Pentagon)`
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
export const StyledScissors = styled(Scissors)`
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
export const StyledPaper = styled(Paper)`
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

export const StyledSpock = styled(Spock)`
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
  width: 73px;
  height: 27px;
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

export const StyledLizard = styled(Lizard)`
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
export const StyledRock = styled(Rock)`
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
