import React from "react";
import { Link } from "react-router-dom";
import MainTemplate from "../../templates/MainTemplate/MainTemplate";
import { HiUser, StyledButton } from "./HomeViewStyle";

const HomeView = () => (
  <>
    <MainTemplate type="home">
      <HiUser beforeStr="Cześć, " afterStr=" widzę!">
        cieszę się, że Cię
      </HiUser>
      <StyledButton as={Link} to="/ChooseProductsView" color="green">
        Zaczynamy!
      </StyledButton>
    </MainTemplate>
  </>
);

export default HomeView;
