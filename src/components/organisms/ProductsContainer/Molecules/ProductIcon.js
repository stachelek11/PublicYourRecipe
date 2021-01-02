import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import ExitICon from "../../../../images/ExitIcon.svg";
import Zoom from "@material-ui/core/Zoom";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Product = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  background-color: transparent;
  text-align: center;
  position: relative;
  border-radius: 6px;
  width: 90px;
  height: 150px;
  @media (max-width: 1000px) {
    transform: scale(0.75);
  }
`;

const Border = styled.div`
  cursor: pointer;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  border: ${({ theme }) => theme.myGrey} solid 1px;
  margin: 5px;
  padding: 12px;
  line-height: 70px;
  box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 4px;
  &:hover {
    background-color: lightgrey;
    &::before {
      content: "";
      ${({ secondary }) =>
        secondary &&
        css`
          position: absolute;
          width: 20px;
          height: 20px;
          background-color: red;
          background-image: url(${ExitICon});
          background-size: 12px 12px;
          background-repeat: no-repeat;
          background-position: center;
          top: 0;
          right: 0;
          border-radius: 50%;
        `};
    }
  }
`;

const Name = styled.p`
  text-align: center;
`;

const ProductIcon = ({
  productName,
  productIcon,
  productID,
  secondary,
  addProduct,
}) => (
  <Zoom in={true} timeout={400}>
    {secondary ? (
      <Wrapper>
        <Product>
          <Border
            secondary
            onClick={() =>
              addProduct(productName, productID, productIcon, secondary)
            }
          >
            {productIcon && (
              <img
                src={`https://yourrecipe.pl:8000${productIcon}`}
                alt={productName}
                style={{ width: "44px", height: "44px" }}
              />
            )}
          </Border>
          <Name>{productName}</Name>
        </Product>
      </Wrapper>
    ) : (
      <Wrapper>
        <Product>
          <Border
            onClick={() =>
              addProduct(productName, productID, productIcon, secondary)
            }
          >
            {productIcon && (
              <img
                src={`https://yourrecipe.pl:8000${productIcon}`}
                alt={productName}
                style={{ width: "44px", height: "44px" }}
              />
            )}
          </Border>
          <Name>{productName}</Name>
        </Product>
      </Wrapper>
    )}
  </Zoom>
);

ProductIcon.propTypes = {
  productName: PropTypes.string.isRequired,
  productIcon: PropTypes.string.isRequired,
  productID: PropTypes.number.isRequired,
  secondary: PropTypes.bool,
  addProduct: PropTypes.func.isRequired,
};

export default ProductIcon;
