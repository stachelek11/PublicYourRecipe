import React, { useState } from "react";
import Button from "../../../atoms/Button";
import { Back, Title, ErrorLog } from "../NewRecipeStyled";
import styled from "styled-components";
import Input from "../../../atoms/Input";
import AddedProducts from "./AddedProducts";
import AddProductDetails from "./AddProductDetails";
import ProductsList from "./ProductsList";
import { useSelector } from "react-redux";

const Wrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 30px 63px 1fr 40px 30px;
`;

const SecondPageNewRecipe = ({ setViewNumber }) => {
  const [searchProduct, setSearchProduct] = useState("");
  const [clickSearchProduct, setClickSearchProduct] = useState(0);
  const [selectProduct, setSelectProduct] = useState({});
  const form = useSelector((state) => state.formNewRecipe);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setSearchProduct(e.target.value);
  };

  const handleBlur = (e) => {
    const currentTarget = e.currentTarget;
    setTimeout(() => {
      if (!currentTarget.contains(document.activeElement)) {
        setClickSearchProduct(0);
      }
    }, 0);
  };

  const handleChangeNumberPage = () => {
    setViewNumber(1);
  };

  const onSubmit = () => {
    if (form.ingredients.length === 0) {
      setError(true);
    } else {
      setViewNumber(3);
    }
  };

  return (
    <Wrapper>
      <Title>Podaj produkty</Title>
      <div tabIndex="1" onBlur={handleBlur}>
        {clickSearchProduct === 3 && (
          <AddProductDetails
            name={selectProduct.name}
            graphics={selectProduct.graphics}
            id={selectProduct.id}
            setClickSearchProduct={setClickSearchProduct}
          />
        )}
        <div style={{ position: "relative" }}>
          <Input
            placeholder="Wpisz nazwę produktu"
            margin="20px 0 0"
            type="text"
            onChange={handleChange}
            onFocus={() => setClickSearchProduct(1)}
          />
          {clickSearchProduct === 1 && (
            <ProductsList
              setClickSearchProduct={setClickSearchProduct}
              searchProduct={searchProduct}
              setSelectProduct={setSelectProduct}
            />
          )}
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <AddedProducts />
        {error && <ErrorLog>Dodaj co najmniej jeden składnik!</ErrorLog>}
      </div>
      <Button color="green" onClick={onSubmit}>
        Dalej
      </Button>
      <Back onClick={handleChangeNumberPage}>wróć</Back>
    </Wrapper>
  );
};

export default SecondPageNewRecipe;
