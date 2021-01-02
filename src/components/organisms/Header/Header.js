import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import BasketButton from "./Molecules/BasketButton";
import LogoButton from "../../atoms/LogoButton";
import NewRecipe from "../NewRecipe/NewRecipe";
import { MoveDown } from "../../atoms/Keyframes";

const Wrapper = styled.header`
  ${({ type }) =>
    type === "choose" &&
    css`
      animation: ${MoveDown} 1s both;
    `};
  z-index: 5;
  position: fixed;
  background-color: ${({ theme }) => theme.myYellow};
  display: flex;
  justify-content: center;
  height: 95px;
  width: 100%;
  padding: 0 30px;
  @media (max-width: 880px) {
    padding: 0;
  }
  @media (max-width: 1000px) {
    height: 70px;
  }
`;

const Contents = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = ({ type }) => {
  return (
    <Wrapper type={type}>
      <Contents>
        <BasketButton />
        <LogoButton as={Link} to="/" />
        <NewRecipe />
      </Contents>
    </Wrapper>
  );
};

export default Header;
