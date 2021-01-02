import React, { useState } from "react";
import MainTemplate from "../templates/MainTemplate/MainTemplate";
import Input from "../components/atoms/Input";
import ProductsContainer from "../components/organisms/ProductsContainer/ProductsContainer";
import Button from "../components/atoms/Button";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ChooseProductsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 47px;
  margin: 40px auto 30px;
  width: 95%;
`;

const ChooseProductsView = () => {
  const [searchProduct, setSearchProduct] = useState("");

  const handleChange = (e) => {
    setSearchProduct(e.target.value);
  };

  return (
    <>
      <MainTemplate type="choose">
        <ChooseProductsHeader>
          <Input
            placeholder="Szukaj produktu"
            onChange={handleChange}
            width="70%"
          />
          <Button
            style={{ width: "25%", textDecoration: "none" }}
            color="grey"
            as={Link}
            to="/FoundRecipeView"
          >
            Szukaj Przepisów
          </Button>
        </ChooseProductsHeader>
        <ProductsContainer searchProduct={searchProduct} />
      </MainTemplate>
    </>
  );
};

export default ChooseProductsView;
