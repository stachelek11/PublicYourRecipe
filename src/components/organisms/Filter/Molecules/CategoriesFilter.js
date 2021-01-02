import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filter } from "../../../../actions/actions";
import styled from "styled-components";
import { FilterTitle, WrapperFilter } from "./Atoms";

const CategoriesArray = [
  "inne",
  "owoce",
  "warzywa",
  "zboża",
  "nabiał",
  "mięso",
  "ryby",
  "przyprawy",
];

const Category = styled.div`
  width: 100%;
  padding: 5px;
`;

const StyledLabel = styled.label`
  &::first-letter {
    text-transform: uppercase;
  }
`;

const Box = styled.div`
  background-color: white;
  padding: 5px 10px;
  z-index: 10;
  left: 25px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 20px;
`;

const CategoriesFilter = () => {
  const filterValue = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const value = e.target.checked;
    const name = e.target.name;
    dispatch(
      filter({
        ...filterValue,
        categories: { ...filterValue.categories, [name]: value },
      })
    );
  };

  return (
    <WrapperFilter>
      <FilterTitle>Kategorie:</FilterTitle>
      <Box>
        {CategoriesArray.map((item) => (
          <Category key={item}>
            <StyledLabel htmlFor={item}>
              <input
                type="checkbox"
                id={item}
                name={item}
                checked={filterValue.categories[item]}
                onChange={handleInputChange}
              />
              {item}
            </StyledLabel>
          </Category>
        ))}
      </Box>
    </WrapperFilter>
  );
};

export default CategoriesFilter;
