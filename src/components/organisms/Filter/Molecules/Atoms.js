import styled from "styled-components";

export const WrapperFilter = styled.div`
  margin: 20px;
`;

export const FilterTitle = styled.p`
  margin-right: 5px;
  font-weight: 700;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.myGrey};
`;

export const StyledOption = styled.option`
  color: ${({ theme }) => theme.myGrey};
  font-size: 1.5rem;
`;

export const StyledSelect = styled.select`
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0 6px 8px;
  border: none;
  border-radius: 20px;
  padding: 10px;
  font-size: 1.5rem;
  width: 100%;
`;
