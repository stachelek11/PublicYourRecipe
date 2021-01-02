import React, { useState } from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "./../../atoms/Button";
import RecipeGroupFilter from "./Molecules/RecipesGroupFilter";
import SortByFilter from "./Molecules/SortByFilter";
import CategoriesFilter from "./Molecules/CategoriesFilter";
import styled from "styled-components";

const StyledSwipeableDrawer = styled(SwipeableDrawer)`
  .MuiDrawer-paper {
    background-color: ${({ theme }) => theme.myGreen};
  }
`;

const SwipeableFilter = () => {
  const [show, setShow] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setShow(open);
  };

  return (
    <div>
      <React.Fragment key={"right"}>
        <Button color="grey" onClick={toggleDrawer(true)}>
          Filtry
        </Button>
        <StyledSwipeableDrawer
          anchor="right"
          open={show}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <div role="presentation" onKeyDown={toggleDrawer(false)}>
            <RecipeGroupFilter />
            <SortByFilter />
            <CategoriesFilter />
          </div>
        </StyledSwipeableDrawer>
      </React.Fragment>
    </div>
  );
};

export default SwipeableFilter;
