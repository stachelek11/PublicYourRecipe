import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import Button from "../../../atoms/Button";
import { formNewRecipe } from "../../../../actions/actions";
import { ErrorLog, Title } from "../NewRecipeStyled";
import styled from "styled-components";
import Input from "../../../atoms/Input";
import { Opacity } from "../../../atoms/Keyframes";
import { useForm } from "react-hook-form";
import SubmitInput from "../../../atoms/SubmitInput";

const ChangeQuantityBackground = styled.div`
  animation: ${Opacity} 0.8s both;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: rgba(252, 197, 67, 0.95);
`;

const Converters = styled.select`
  border: none;
  box-shadow: rgba(0, 0, 0, 0.2) 6px 6px 20px;
  font-size: 1.4rem;
  font-weight: 400;
  border-radius: 30px;
  padding: 13.5px 22px;
  outline: none;
`;

const Converter = styled.option`
  border: none;
  box-shadow: rgba(0, 0, 0, 0.2) 6px 6px 20px;
  font-size: 1.4rem;
  font-weight: 400;
  padding: 8px;
`;

const ChangeQuantity = styled.form`
  display: grid;
  grid-gap: 20px;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.2) 6px 6px 20px;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 15px;
  z-index: 11;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const AddProductDetails = ({ id, name, graphics, setClickSearchProduct }) => {
  const { register, handleSubmit, errors } = useForm();
  const form = useSelector((state) => state.formNewRecipe);
  const dispatch = useDispatch();
  const [converter, setConverter] = useState("g");

  const onSubmit = (data) => {
    dispatch(
      formNewRecipe({
        ...form,
        ingredients: [
          ...form.ingredients,
          {
            id: id,
            name: name,
            graphics: graphics,
            converter: converter,
            quantity: data.quantity,
          },
        ],
      })
    );
    setClickSearchProduct(0);
  };

  return (
    <ChangeQuantityBackground>
      <ChangeQuantity onSubmit={handleSubmit(onSubmit)}>
        <Title>Podaj ilość</Title>
        <div style={{ position: "relative" }}>
          <Input
            placeholder="Ilość"
            type="number"
            name="quantity"
            ref={register({ required: true })}
          />
          {errors.quantity && (
            <ErrorLog style={{ top: "-16px" }}>Podaj ilość!</ErrorLog>
          )}
        </div>
        <Converters
          name="converter"
          value={converter}
          onChange={(e) => setConverter(e.target.value)}
          id="converter"
        >
          <Converter value="g">gram</Converter>
          <Converter value="kg">kilogram</Converter>
          <Converter value="szt">sztuka</Converter>
          <Converter value="ml">mililitr</Converter>
          <Converter value="l">litr</Converter>
        </Converters>
        <SubmitInput type="submit" value="Dodaj" />
      </ChangeQuantity>
    </ChangeQuantityBackground>
  );
};

AddProductDetails.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  graphics: PropTypes.string.isRequired,
  setClickSearchProduct: PropTypes.func.isRequired,
};

export default AddProductDetails;
