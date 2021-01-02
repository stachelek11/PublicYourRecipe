import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Image from "../../../atoms/Image";

const Container = styled.button`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 0;
  border: none;
  border-radius: 50px;
  box-shadow: rgba(0, 0, 0, 0.2) 6px 6px 20px;
  color: ${({ theme }) => theme.myGrey};
  position: relative;
`;

const AdditionalProducts = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  font-weight: 700;
  font-size: 1.7rem;
  text-align: center;
  line-height: 35px;
  color: white;
  background-color: ${({ theme }) => theme.myGreen};
  box-shadow: rgba(0, 0, 0, 0.2) 3px 3px 5px;
`;

const Tooltip = styled.span`
  visibility: hidden;
  max-width: 300px;
  position: fixed;
  background-color: gray;
  color: white;
  padding: 5px;
  border-radius: 6px;
  z-index: 1;
`;

const TooltipCard = styled.div`
  & ${AdditionalProducts}:hover + ${Tooltip} {
    visibility: visible;
  }
`;

const Title = styled.div`
  font-size: 2.4rem;
  font-weight: bold;
  padding: 5px 25px;
  text-align: center;
`;

const Description = styled.div`
  font-size: 1.6rem;
  text-align: justify;
  border-radius: 0 0 50px 50px;
  padding: 10px 25px 25px;
`;

const Recipe = ({
  id,
  title,
  description,
  image,
  additionalProducts,
  tooltip,
}) => {
  const [coursorPositionX, setCoursorPositionX] = useState(0);
  const [coursorPositionY, setCoursorPositionY] = useState(0);

  return (
    <Container as={Link} to={`/RecipeView/${id}`}>
      {additionalProducts > 0 && (
        <TooltipCard>
          <AdditionalProducts
            onMouseMove={
              (AdditionalProducts.onmousemove = function (e) {
                setCoursorPositionX(e.clientX - 50);
                setCoursorPositionY(e.clientY + 25);
              })
            }
          >
            {additionalProducts}
          </AdditionalProducts>
          <Tooltip
            style={{
              top: coursorPositionY + "px",
              left: coursorPositionX + "px",
            }}
          >
            {tooltip}
          </Tooltip>
        </TooltipCard>
      )}
      <Image image={image} height="220px" />
      <div>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </div>
    </Container>
  );
};

export default Recipe;
