import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchProducts, selectedProducts } from "../../../actions/actions";
import HeaderProductsContainer from "./Molecules/HeaderProductsContainer";
import ProductIcon from "./Molecules/ProductIcon";
import CircularProgress from "@material-ui/core/CircularProgress";

const Wrapper = styled.div`
  min-height: 500px;
  height: calc(100vh - 187px - 25px - 15px);
  width: 95%;
  border-radius: 30px 30px 0 0;
  box-shadow: rgba(0, 0, 0, 0.2) 6px 6px 20px;
  background-color: white;
  margin: 0 auto 15px;
  @media (max-width: 1000px) {
    margin: 0;
    width: 100%;
    border-radius: 0;
    height: calc(100vh - 187px);
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  grid-template-rows: repeat(5, 1fr);
  min-height: 416px;
  height: calc(100vh - 259px - 39px - 15px);
  overflow-y: auto;
  margin: 7px 0;
  @media (max-width: 1600px) {
    grid-template-columns: repeat(13, 1fr);
  }
  @media (max-width: 1350px) {
    grid-template-columns: repeat(11, 1fr);
  }
  @media (max-width: 1150px) {
    grid-template-columns: repeat(9, 1fr);
  }
  //scale icon 0.75
  @media (max-width: 1000px) {
    grid-template-columns: repeat(9, 1fr);
    height: calc(100vh - 259px);
    margin: 0;
  }
  @media (max-width: 840px) {
    grid-template-columns: repeat(8, 1fr);
  }
  @media (max-width: 740px) {
    grid-template-columns: repeat(7, 1fr);
  }
  @media (max-width: 650px) {
    grid-template-columns: repeat(6, 1fr);
  }
  @media (max-width: 560px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (max-width: 470px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 380px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 290px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StyledCircularProgress = styled.div`
  grid-column: 1 / 17;
  display: flex;
  margin-top: 50px;
  justify-content: center;
  .MuiCircularProgress-colorPrimary {
    color: ${({ theme }) => theme.myGrey};
  }
`;

const ProductsContainer = ({ searchProduct }) => {
  const data = useSelector((state) => state.fetchProducts);
  const products = useSelector((state) => state.selectedProducts);
  products !== [] &&
    sessionStorage.setItem("ObjProducts", JSON.stringify(products));
  const dispatch = useDispatch();
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(
      () =>
        (async function () {
          try {
            setLoading(true);
            dispatch(fetchProducts([]));
            const response = await fetch(
              `https://yourrecipe.pl:8000/api/produkty-${category}`
            );
            const json = await response.json();
            dispatch(fetchProducts(json));
            setLoading(false);
          } catch {
            dispatch(fetchProducts([]));
          }
        })(),
      250
    );
  }, [dispatch, category]);

  const ProductList = data.filter((e) => {
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === e.id) {
        return false;
      }
    }
    return true;
  });

  const handleSearch = ProductList.filter((product) => {
    return product.name.toLowerCase().includes(searchProduct.toLowerCase());
  });

  const AddProduct = (name, id, icon, isTrue) => {
    if (!isTrue) {
      dispatch(
        selectedProducts([...products, { id: id, name: name, graphics: icon }])
      );
    } else {
      dispatch(selectedProducts(products.filter((e) => e.id !== id)));
    }
  };
  return (
    <Wrapper>
      <HeaderProductsContainer takeCategory={setCategory} />
      <Container>
        {loading ? (
          <StyledCircularProgress>
            <CircularProgress />
          </StyledCircularProgress>
        ) : (
          handleSearch.map((item) => {
            return (
              <ProductIcon
                key={item.id}
                productIcon={item.graphics}
                productName={item.name}
                productID={item.id}
                secondary={false}
                addProduct={AddProduct}
              />
            );
          })
        )}
      </Container>
    </Wrapper>
  );
};

export default ProductsContainer;
