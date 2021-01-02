import React from "react";
import TextArea from "../../../atoms/TextArea";
import { Title, ErrorLog } from "../NewRecipeStyled";
import styled from "styled-components";
import Input from "../../../atoms/Input";
import { useDispatch, useSelector } from "react-redux";
import { formNewRecipe } from "../../../../actions/actions";
import { useForm } from "react-hook-form";
import SubmitInput from "../../../atoms/SubmitInput";

const FormRecipe = styled.form`
  height: 100%;
  display: grid;
  flex-direction: column;
  grid-template-columns: 1fr;
  grid-template-rows: 30px 63px 1fr 83px 55px;
`;

const FirstNewRecipe = ({ setViewNumber }) => {
  const { register, handleSubmit, errors } = useForm();
  const form = useSelector((state) => state.formNewRecipe);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(
      formNewRecipe({
        ...form,
        name: data.name,
        preparation: data.preparation,
        time: data.time,
      })
    );
    setViewNumber(2);
  };

  return (
    <FormRecipe onSubmit={handleSubmit(onSubmit)}>
      <Title>Podaj podstawowe dane</Title>
      <div style={{ position: "relative" }}>
        <Input
          defaultValue={form.name}
          placeholder="Nazwa przepisu"
          name="name"
          type="text"
          margin="20px 0 0"
          ref={register({
            required: true,
            minLength: 3,
            pattern: /^[A-Z].*$/g,
          })}
        />
        {errors.name && errors.name.type === "required" && (
          <ErrorLog>Podaj nazwę przepisu!</ErrorLog>
        )}
        {errors.name && errors.name.type === "minLength" && (
          <ErrorLog>Nazwa jest za krótka!</ErrorLog>
        )}
        {errors.name && errors.name.type === "pattern" && (
          <ErrorLog>Nazwa powinna zaczynać się wielką literą!</ErrorLog>
        )}
      </div>
      <div style={{ position: "relative" }}>
        <TextArea
          defaultValue={form.preparation}
          placeholder="Opis przygotowania"
          name="preparation"
          type="text"
          ref={register({
            required: true,
            minLength: 250,
          })}
        />
        {errors.preparation && errors.preparation.type === "required" && (
          <ErrorLog>Podaj opis przepisu!</ErrorLog>
        )}
        {errors.preparation && errors.preparation.type === "minLength" && (
          <ErrorLog>Opis jest za krótki!</ErrorLog>
        )}
      </div>
      <div style={{ position: "relative" }}>
        <Input
          defaultValue={form.time}
          placeholder="Czas wykonania (min)"
          name="time"
          type="number"
          margin="20px 0"
          ref={register({ required: true })}
        />
        {errors.time && <ErrorLog>Podaj czas wykonania przepisu!</ErrorLog>}
      </div>
      <SubmitInput type="submit" value="Dalej" />
    </FormRecipe>
  );
};

export default FirstNewRecipe;
