import React from "react";
// import styled from "styled-components";
import { StyledContainer, StyledRules } from './Button'

export const Rules = ({ handleClick }) => {
  return (
    <StyledContainer onClick={handleClick}>
      <StyledRules>RULES</StyledRules>
    </StyledContainer>
  );
};
