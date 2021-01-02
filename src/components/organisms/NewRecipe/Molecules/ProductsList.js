import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../../../../actions/actions";
import styled from "styled-components";

const ProductsContainer = styled.div`
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0 6px 8px;
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: 5;
  width: 90%;
  margin: 0 5% 0;
  border-radius: 0 0 20px 20px;
  overflow: hidden;
`;

const ProductItem = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px 25px;
  color: grey;
  font-size: 1.5rem;
  &:hover {
    background-color: ${({ theme }) => theme.myGreen};
    color: white;
    font-weight: bold;
  }
`;

const ProductsList = ({
  searchProduct,
  setClickSearchProduct,
  setSelectProduct,
}) => {
  const allProducts = useSelector((state) => state.fetchAllProducts);
  const form = useSelector((state) => state.formNewRecipe);
  const dispatch = useDispatch();
  useEffect(() => {
    (async function () {
      try {
        const response = await fetch(
          `https://yourrecipe.pl:8000/api/produkty-all`
        );
        const json = await response.json();
        dispatch(fetchAllProducts(json));
      } catch {
        dispatch(fetchAllProducts([]));
      }
    })();
  }, [dispatch]);

  const ProductList = allProducts.filter((e) => {
    for (let i = 0; i < form.ingredients.length; i++) {
      if (form.ingredients[i].id === e.id) {
        return false;
      }
    }
    return true;
  });

  const handleSearch = ProductList.filter((product) => {
    return product.name.toLowerCase().includes(searchProduct.toLowerCase());
  });

  const handleSelectProduct1 = (id, name, graphics) => {
    setSelectProduct({ id: id, name: name, graphics: graphics });
    setClickSearchProduct(3);
  };

  return (
    <ProductsContainer>
      {handleSearch.slice(0, 5).map((item) => {
        return (
          <ProductItem
            key={item.id}
            onClick={() =>
              handleSelectProduct1(item.id, item.name, item.graphics)
            }
          >
            {item.name}
          </ProductItem>
        );
      })}
    </ProductsContainer>
  );
};

export default ProductsList;
