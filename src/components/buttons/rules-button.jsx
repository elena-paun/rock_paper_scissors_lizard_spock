import React from 'react';
import { StyledContainer, StyledButtonRules } from '../../styles/rules-button.styles'

export const Rules = ({ handleRules }) => {
  return (
    <StyledContainer onClick={handleRules}>
      <StyledButtonRules>RULES</StyledButtonRules>
    </StyledContainer>
  );
};
