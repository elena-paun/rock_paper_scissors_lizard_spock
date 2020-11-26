import React from "react";
import logo from "../images/logo-bonus.svg";
import styled from "styled-components";
import { Score } from "./Score";
import "../styles/header.styles.css";

const HeaderContainer = styled.div`
  margin: 40px;
  height: 150px;
  border-weight: 10px;
  border-color: hsl(217, 16%, 45%);
  border-radius: 20px;
  border-style: solid;
  padding: 32px;
  align-items: center;
  justify-content: space-between;
  display: flex;
`
const RockPaperScissors = styled.img`
  width: 100px;
  align-self: center;
`
export const Header = () => {
  return (
          <HeaderContainer>
              <RockPaperScissors
                src={logo}
                alt="rock paper scissors lizard spock"
              />
              <Score />
          </HeaderContainer>
  );
};
