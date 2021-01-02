import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { selectedProducts } from "../../../../actions/actions";
import BasketIcon from "../../../../images/Basket.svg";
import BasketMobileIcon from "../../../../images/BasketMobile.svg";
import ButtonWithIcon from "../../../atoms/ButtonWithIcon";
import ProductIcon from "../../ProductsContainer/Molecules/ProductIcon";
import ModalUI from "../../../atoms/ModalUI";

const SelectedProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  @media (max-width: 1000px) {
    grid-template-columns: repeat(7, 1fr);
  }
  @media (max-width: 760px) {
    grid-template-columns: repeat(6, 1fr);
  }
  @media (max-width: 660px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (max-width: 570px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 460px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 340px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 240px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const BasketButton = () => {
  const products = useSelector((state) => state.selectedProducts);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const AddOrDeleteProduct = (name, id, icon, isTrue) => {
    if (!isTrue) {
      dispatch(
        selectedProducts([...products, { id: id, name: name, graphics: icon }])
      );
    } else {
      dispatch(selectedProducts(products.filter((e) => e.id !== id)));
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div>
      <ButtonWithIcon
        onClick={handleOpen}
        icon={BasketIcon}
        size="45px auto"
        sizeMobile="35px auto"
        afterContent={products.length}
        mobileIcon={BasketMobileIcon}
      />
      <ModalUI setOpen={setOpen} open={open}>
        {products.length === 0 && (
          <p style={{ textAlign: "center" }}>Nie wybrano produktów</p>
        )}
        <SelectedProductContainer>
          {products.map((item, itemKey) => (
            <ProductIcon
              productName={item.name}
              productIcon={item.graphics}
              productID={item.id}
              secondary={true}
              addProduct={AddOrDeleteProduct}
              key={itemKey}
            />
          ))}
        </SelectedProductContainer>
      </ModalUI>
    </div>
  );
};

export default BasketButton;
