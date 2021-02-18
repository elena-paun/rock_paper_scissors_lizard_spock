import React from 'react';
import logo from '../../assets/logo-bonus.svg';
import { Score } from './score';
import '../../styles/header.styles.css';
import { HeaderContainer, RockPaperScissors } from '../../styles/header.styles';

export const Header = () => {
  return (
          <HeaderContainer>
              <RockPaperScissors
                src={logo}
                alt='rock paper scissors lizard spock'
              />
              <Score />
          </HeaderContainer>
  );
};
