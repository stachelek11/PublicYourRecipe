import CircularProgress from "@material-ui/core/CircularProgress";
import Recipe from "./Molecules/Recipe";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { fetchFoundRecipes } from "../../../actions/actions";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 70px 70px;
  margin: 70px 30px;
  min-width: 95%;
  @media (max-width: 1600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
    margin: 70px 100px;
  }
  @media (max-width: 770px) {
    grid-template-columns: repeat(1, 1fr);
    margin: 70px 30px;
  }
`;

const StyledCircularProgress = styled.div`
  margin-top: 10vh;
  .MuiCircularProgress-colorPrimary {
    color: ${({ theme }) => theme.myGrey};
  }
`;

const Recipes = () => {
  const recipes = useSelector((state) => state.fetchFoundRecipes);
  const products = useSelector((state) => state.selectedProducts);
  const [searchingRecipes, setSearchingRecipes] = useState(true);
  const filterValue = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  //Jak rozwiązać sortowanie ? back czy front ? sortowanie produktami musi byc jeszcze
  // function compareLength(a, b) {
  //   return a.time - b.time;
  // }
  // console.log(recipes.sort(compareLength));

  useEffect(() => {
    (async function () {
      try {
        if (products.length > 0) {
          const Data = {
            products: filterValue.products,
            sortBy: filterValue.sortBy,
            categories: filterValue.categories,
          };
          products.map((product) => filterValue.products.push(product.id));
          setSearchingRecipes(true);
          const response = await fetch(
            `https://yourrecipe.pl:8000/api/${filterValue.selectedGroupRecipes}`,
            {
              method: "OPTIONS",
              body: JSON.stringify(Data),
            }
          );
          const json = await response.json();
          dispatch(fetchFoundRecipes(json));
          setSearchingRecipes(false);
        } else {
          dispatch(fetchFoundRecipes([]));
          setSearchingRecipes(false);
        }
      } catch {
        dispatch(fetchFoundRecipes([]));
      }
    })();
  }, [dispatch, filterValue, products]);
  return (
    <>
      {searchingRecipes ? (
        <StyledCircularProgress>
          <CircularProgress />
        </StyledCircularProgress>
      ) : (
        <Wrapper>
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <Recipe
                id={recipe.id}
                image={"https://yourrecipe.pl:8000" + recipe.photo}
                key={recipe.name}
                title={recipe.name}
                description={recipe.preparation}
                additionalProducts={recipe.quantity_additional}
                tooltip={recipe.additional}
              />
            ))
          ) : products.length > 0 ? (
            <p style={{ fontSize: "3rem" }}>
              Brak przepisów do wyświetlenia... :(
            </p>
          ) : (
            <p style={{ fontSize: "3rem" }}>Nie wybrano produktów...</p>
          )}
        </Wrapper>
      )}
    </>
  );
};

export default Recipes;
