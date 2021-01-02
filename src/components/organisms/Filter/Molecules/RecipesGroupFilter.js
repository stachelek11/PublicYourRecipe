import { filter } from "../../../../actions/actions";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  WrapperFilter,
  FilterTitle,
  StyledOption,
  StyledSelect,
} from "./Atoms";

const RecipeGroupFilter = () => {
  const filterValue = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  return (
    <WrapperFilter>
      <FilterTitle>Wyszukiwane przepisy:</FilterTitle>
      <StyledSelect
        name="selectedGroupRecipes"
        value={filterValue.selectedGroupRecipes}
        onChange={(e) =>
          dispatch(
            filter({
              ...filterValue,
              selectedGroupRecipes: e.target.value,
            })
          )
        }
      >
        <StyledOption value="lista-przepisow">
          wszystkie kombinacje
        </StyledOption>
        <StyledOption value="lista-wybrane">
          tylko wybrane produkty
        </StyledOption>
        <StyledOption value="lista-all-wybrane-dodatkowe">
          wszystkie wybrane + dodatkowe
        </StyledOption>
        <StyledOption value="lista-dodatkowe">wybrane + dodatkowe</StyledOption>
      </StyledSelect>
    </WrapperFilter>
  );
};
export default RecipeGroupFilter;
