import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Image from "../../atoms/Image";
import TimeIcon from "../../../images/TimeIcon.svg";
import BackIcon from "../../../images/BackIcon.svg";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 6px 6px 40px;
  margin: 70px 0;
  width: 100%;
  max-width: 1300px;
  border-radius: 50px;
  color: ${({ theme }) => theme.myGrey};
  position: relative;
  @media (max-width: 880px) {
    border-radius: 0;
    margin: 0;
  }
`;

const StyledImage = styled(Image)`
  @media (max-width: 880px) {
    border-radius: 0;
    height: 200px;
  }
`;

const Exit = styled.button`
  position: absolute;
  border: none;
  background-color: transparent;
  background-image: url(${BackIcon});
  background-size: 100px;
  width: 100px;
  height: 100px;
  top: 5px;
  right: 20px;
  @media (max-width: 1200px) {
    background-size: 75px;
    width: 75px;
    height: 75px;
  }
  @media (max-width: 880px) {
    background-size: 50px;
    width: 50px;
    height: 50px;
    right: 5px;
  }
`;

const Information = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledRating = styled(Rating)`
  margin: 10px 0 0 20px;
  font-size: 3rem !important;
`;

const Time = styled.div`
  font-size: 1.6rem;
  text-align: center;
  line-height: 2.2rem;
  margin: 10px 20px;
  &::before {
    content: "";
    display: block;
    background-image: url(${TimeIcon});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 25px;
    width: 25px;
    height: 25px;
    margin: 0 auto;
  }
  @media (max-width: 650px) {
    font-size: 1.4rem;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 3.5rem;
  font-weight: bold;
  margin: 5px 20px 20px 20px;
  @media (max-width: 880px) {
    font-size: 2.5rem;
  }
  @media (max-width: 650px) {
    font-size: 2rem;
    margin-bottom: 0;
  }
`;

const Contents = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 35px;
  padding: 15px 20px 30px;
  @media (max-width: 1150px) {
    grid-template-columns: 1.2fr 3fr;
  }
  @media (max-width: 1000px) {
    grid-template-columns: 1fr 2fr;
  }
  @media (max-width: 880px) {
    grid-template-columns: 1fr;
  }
`;

const Preparation = styled.div`
  white-space: pre-line;
  box-shadow: rgba(0, 0, 0, 0.1) 6px 6px 40px;
  border-radius: 25px;
  padding: 30px;
  font-size: 1.8rem;
  &::before {
    content: "Sposób przygotowania:";
    font-size: 2.4rem;
    font-weight: bold;
  }
`;

const Ingredients = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 6px 6px 40px;
  border-radius: 25px;
  padding: 30px;
  font-size: 1.8rem;
  background-color: ${({ theme }) => theme.myYellow};
  display: grid;
  grid-template-columns: 1fr;
  &::before {
    content: "Składniki:";
    font-size: 2.4rem;
    font-weight: bold;
    margin-bottom: 5px;
  }
  p {
    margin: 5px 0;
  }
  @media (max-width: 880px) {
    grid-template-columns: 1fr 1fr 1fr;
    font-size: 1.7rem;
    &::before {
      font-size: 2.2rem;
    }
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 550px) {
    p {
      margin: 2px 0;
    }
    font-size: 1.6rem;
    &::before {
      font-size: 2rem;
    }
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const DetailsRecipe = ({
  name,
  preparation,
  time,
  ingredients,
  photo,
  rating,
}) => {
  return (
    <Wrapper>
      <Exit as={Link} to="/FoundRecipeView" />
      <StyledImage
        image={"https://yourrecipe.pl:8000" + photo}
        height="500px"
      />
      <Information>
        <StyledRating
          value={rating}
          precision={0.5}
          emptyIcon={<StarBorderIcon style={{ fontSize: "3rem" }} />}
          readOnly
        />
        <Time>{time}&#39;</Time>
      </Information>
      <Title time={time}>{name}</Title>
      <Contents>
        <Ingredients>
          {ingredients.map((item) => (
            <p key={item.product}>
              {`- ${item.name} ${item.quantity} ${item.converter}`}
            </p>
          ))}
        </Ingredients>
        <Preparation>
          <p>{preparation}</p>
        </Preparation>
      </Contents>
    </Wrapper>
  );
};

DetailsRecipe.propTypes = {
  name: PropTypes.string.isRequired,
  preparation: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  ingredients: PropTypes.array.isRequired,
  photo: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default DetailsRecipe;
