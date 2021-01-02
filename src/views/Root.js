import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import HomeView from "./HomeView/HomeView";
import GlobalTemplate from "../templates/GlobalTemplate";
import ChooseProductsView from "./ChooseProductsView";
import FoundRecipeView from "./FoundRecipeView";
import RecipeView from "./RecipeView";

const Root = () => (
  <>
    <Router>
      <GlobalTemplate>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/ChooseProductsView" component={ChooseProductsView} />
          <Route path="/FoundRecipeView" component={FoundRecipeView} />
          <Route path="/RecipeView/:id" component={RecipeView} />
        </Switch>
      </GlobalTemplate>
    </Router>
  </>
);

export default Root;
