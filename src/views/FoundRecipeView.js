import React from "react";
import MainTemplate from "../templates/MainTemplate/MainTemplate";
import Filter from "../components/organisms/Filter/Filter";
import Recipes from "../components/organisms/Recipes/Recipes";

const FoundRecipeView = () => {
  return (
    <MainTemplate>
      <Filter />
      <Recipes />
    </MainTemplate>
  );
};

export default FoundRecipeView;
