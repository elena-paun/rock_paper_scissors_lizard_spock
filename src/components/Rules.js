import React from "react";
import styled from "styled-components";

const StyledRules = styled.button`
  font-family: "Barlow Semi Condensed";
  color: white;
  border: 2px solid white;
  padding: 5px 20px 5px 20px;
  border-radius: 5px;
  background: none;
  position: absolute;
  top: 0;
  display: inline-block;
  @media only screen and (max-height: 765px) {
    top: -45px;
    left: 51.5%;
    bottom: -50%;
    padding: 1px 10px 1px 10px;
    height: 30px;
  }
`;
const StyledContainer = styled.div`
  @media only screen and (max-height: 765px) {
    top: 60px;
  }
  @media only screen and (min-height: 600px) {
    top: 130px;
  }
  position: relative;
  top: 150px;
  left: -6vh;
  text-align: center;
`;
export const Rules = ({ handleClick }) => {
  return (
    <StyledContainer onClick={handleClick}>
      <StyledRules>RULES</StyledRules>
    </StyledContainer>
  );
};
