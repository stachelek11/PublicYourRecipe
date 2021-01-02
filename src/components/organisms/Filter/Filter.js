import Button from "../../atoms/Button";
import { Link } from "react-router-dom";
import ReplyIcon from "@material-ui/icons/Reply";
import React from "react";
import styled from "styled-components";
import SwipeableFilter from "./SwipeableFilter";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.myGreen};
  border-radius: 0 0 10px 10px;
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Filter = () => {
  return (
    <Wrapper>
      <Button
        as={Link}
        to="/ChooseProductsView"
        color="grey"
        padding="8px 15px"
      >
        <ReplyIcon style={{ color: "white", fontSize: "3.4rem" }} />
      </Button>
      <SwipeableFilter />
    </Wrapper>
  );
};

export default Filter;
