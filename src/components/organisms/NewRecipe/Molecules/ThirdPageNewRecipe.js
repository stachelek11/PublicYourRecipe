import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Back, Title } from "../NewRecipeStyled";
import add_photo from "../../../../images/AddPhoto.png";
import { useForm } from "react-hook-form";
import SubmitInput from "../../../atoms/SubmitInput";

const ErrorLog = styled.p`
  color: red;
  font-size: 1.2rem;
  top: 4px;
  left: 20px;
  margin: 0;
`;

export const FormRecipe = styled.form`
  height: 100%;
  display: grid;
  flex-direction: column;
  grid-template-columns: 1fr;
  grid-template-rows: 30px 1fr 40px 30px;
`;

const BoxImage = styled.label`
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.4);
  text-align: center;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  min-height: 100px;
  height: 100px;
  cursor: pointer;
  overflow: hidden;
`;

const ThirdPageNewRecipe = ({ setViewNumber, setCloseModal }) => {
  const { register, handleSubmit, errors } = useForm();
  const form = useSelector((state) => state.formNewRecipe);
  const [image, setImage] = useState({
    preview: form.photo.preview,
    raw: form.photo.raw,
  });

  const handleChange = (e) => {
    e.target.files[0] !== undefined &&
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
  };

  const onSubmit = () => {
    const formPost = new FormData();

    formPost.append("name", form.name);
    formPost.append("preparation", form.preparation);
    formPost.append("time", form.time);
    formPost.append("photo", image.raw, image.raw.name);
    form.ingredients.map((item, index) => {
      formPost.append(`ingredients[${index}]quantity`, item.quantity);
      formPost.append(`ingredients[${index}]converter`, item.converter);
      formPost.append(`ingredients[${index}]product`, item.id);
    });

    fetch("https://yourrecipe.pl:8000/api/przepisy/", {
      method: "POST",
      body: formPost,
    })
      .then((response) => {
        alert("Przepis został dodany! :)");
      })
      .catch((error) => {
        alert("Coś poszło nie tak... :(");
      });
    setCloseModal(false);
  };

  const handleChangeNumberPage = () => {
    form.photo.preview = image.preview;
    form.photo.raw = image.raw;
    setViewNumber(2);
  };

  return (
    <FormRecipe onSubmit={handleSubmit(onSubmit)}>
      <Title>Dodaj zdjęcia</Title>
      <div style={{ margin: "15px auto 25px", position: "relative" }}>
        <BoxImage>
          <input
            type="file"
            name="image"
            style={{ display: "none" }}
            ref={register({ required: true })}
            onChange={handleChange}
          />
          {image.preview ? (
            <img alt="" src={image.preview} height={"100px"} />
          ) : (
            <img alt="" src={add_photo} height={"100px"} />
          )}
        </BoxImage>
        {errors.image && <ErrorLog>Dodaj zdjęcie!</ErrorLog>}
      </div>
      <SubmitInput marginBottom="0" type="submit" value="Dodaj przepis" />
      <Back onClick={() => handleChangeNumberPage()}>wróć</Back>
    </FormRecipe>
  );
};

export default ThirdPageNewRecipe;
