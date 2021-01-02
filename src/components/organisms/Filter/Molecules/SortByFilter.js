import { filter } from "../../../../actions/actions";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  WrapperFilter,
  FilterTitle,
  StyledOption,
  StyledSelect,
} from "./Atoms";

const SortByFilter = () => {
  const filterValue = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  return (
    <WrapperFilter>
      <FilterTitle>Sortuj według:</FilterTitle>
      <StyledSelect
        name="sortBy"
        value={filterValue.sortBy}
        onChange={(e) =>
          dispatch(
            filter({
              ...filterValue,
              sortBy: e.target.value,
            })
          )
        }
      >
        <StyledOption value="popularity">popularności przepisu</StyledOption>
        <StyledOption value="time">czasu przygotowania</StyledOption>
      </StyledSelect>
    </WrapperFilter>
  );
};

export default SortByFilter;
