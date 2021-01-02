import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { formNewRecipe } from "../../../../actions/actions";

const SelectedProductsWrapper = styled.div`
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.2) 6px 6px 20px;
  min-height: 200px;
  margin: 20px 0;
  flex-grow: 1;
  text-align: center;
  padding: 5px;
  overflow-y: auto;
  height: calc(100% - 40px);
  ::-webkit-scrollbar-track {
    margin: 30px 0;
  }
  ::-webkit-scrollbar {
    width: 0.7rem;
    height: 0.7rem;
  }
  &::before {
    content: "Wybrane produkty";
    font-weight: 600;
    color: ${({ theme }) => theme.myGrey};
  }
`;

const SelectedProductsContainer = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
  grid-gap: 3px 20px;
  padding: 0 20px 20px;
`;

const SelectedProduct = styled.div`
  padding: 8px;
  border-radius: 2px;
  position: relative;
  margin: 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.myGreen};
    color: white;
    text-decoration: line-through;
  }
`;

const AddedProducts = () => {
  const form = useSelector((state) => state.formNewRecipe);
  const dispatch = useDispatch();

  const handleDeleteSelectProduct = (id) => {
    dispatch(
      formNewRecipe({
        ...form,
        ingredients: form.ingredients.filter((e) => e.id !== id),
      })
    );
  };

  return (
    <SelectedProductsWrapper>
      <SelectedProductsContainer>
        {form.ingredients.map((item) => {
          return (
            <SelectedProduct
              key={item.id}
              onClick={() => handleDeleteSelectProduct(item.id)}
            >
              <p style={{ margin: 0 }}>{item.name}</p>
              <p style={{ margin: 0 }}>
                {item.quantity} {item.converter}
              </p>
            </SelectedProduct>
          );
        })}
      </SelectedProductsContainer>
    </SelectedProductsWrapper>
  );
};

export default AddedProducts;
