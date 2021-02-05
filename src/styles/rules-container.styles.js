import styled from 'styled-components';

export const RulesContainer = styled.div`
  @media only screen and (max-width: 600px) {
    left: 0%;
    top: -130%;
    padding-top: 150px;
    padding-bottom: 220px;
    padding-left: 40px;
    padding-right: 35px;
    width: 80%;
    max-width: 80%;
    height: auto;
    z-index: 10;
    position: absolute;
    background-color: white;
    text-align: center;
    display: inline-block;
  }
  @media (min-width: 600px) {
    border-radius: 50px;
    left: 12%;
    top: -40%;
    padding: 20px;
    width: 70%;
    max-width: 70%;
    height: auto;
    z-index: 10;
    position: absolute;
    background-color: white;
  }
  @media only screen and (min-width: 768px) {
    border-radius: 50px;
    left: 23%;
    top: -40%;
    padding: 20px;
    width: 50%;
    height: auto;
    z-index: 10;
    position: absolute;
    background-color: white;
  }
  @media only screen and (min-width: 992px) {
    border-radius: 50px;
    left: 29%;
    top: -40%;
    padding: 20px;
    width: 40%;
    height: auto;
    z-index: 10;
    position: absolute;
    background-color: white;
  }
  @media only screen and (min-width: 1200px) {
    border-radius: 50px;
    left: 32%;
    top: -30%;
    padding: 20px;
    padding-left: 50px;
    padding-right: 50px;
    width: 400px;
    height: auto;
    z-index: 10;
    position: absolute;
    background-color: white;
  }
  @media only screen and (min-width: 1500px) {
    border-radius: 50px;
    left: 37%;
    top: -30%;
    padding: 20px;
    padding-left: 50px;
    padding-right: 50px;
    width: 400px;
    height: auto;
    z-index: 10;
    position: absolute;
    background-color: white;
  }
`;