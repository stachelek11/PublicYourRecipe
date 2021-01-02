import React, { useEffect, useState } from "react";
import MainTemplate from "../templates/MainTemplate/MainTemplate";
import DetailsRecipe from "../components/organisms/DetailsRecipe/DetailsRecipe";
import CircularProgress from "@material-ui/core/CircularProgress";
import styled from "styled-components";

const StyledCircularProgress = styled.div`
  margin-top: 100px;
  .MuiCircularProgress-colorPrimary {
    color: ${({ theme }) => theme.myGrey};
  }
`;

const RecipeView = (props) => {
  const [loadingRecipeData, setLoadingRecipeData] = useState(true);
  const [recipeData, setRecipeData] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        const response = await fetch(
          `https://yourrecipe.pl:8000/api/recipe-detail/${props.match.params.id}`
        );
        const json = await response.json();
        setRecipeData(json);
        setLoadingRecipeData(false);
      } catch {
        setRecipeData([]);
      }
    })();
  }, [props.match.params.id]);
  if (loadingRecipeData) {
    return (
      <MainTemplate>
        <StyledCircularProgress>
          <CircularProgress />
        </StyledCircularProgress>
      </MainTemplate>
    );
  } else {
    return (
      <>
        <MainTemplate>
          <DetailsRecipe
            name={recipeData.name}
            photo={recipeData.photo}
            preparation={recipeData.preparation}
            time={recipeData.time}
            ingredients={recipeData.ingredients}
            rating={recipeData.rate}
          />
        </MainTemplate>
      </>
    );
  }
};

export default RecipeView;
