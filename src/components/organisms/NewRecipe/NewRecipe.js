import React, { useEffect, useState } from "react";
import AddRecipeIcon from "../../../images/AddRecipeIcon.svg";
import AddRecipeIconMobile from "../../../images/AddRecipeIconMobile.svg";
import ButtonWithIcon from "../../atoms/ButtonWithIcon";
import SecondPageNewRecipe from "./Molecules/SecondPageNewRecipe";
import ThirdPageNewRecipe from "./Molecules/ThirdPageNewRecipe";
import { useDispatch } from "react-redux";
import { formNewRecipe } from "../../../actions/actions";
import FirstNewRecipe from "./Molecules/FirstNewRecipe";
import ModalUI from "../../atoms/ModalUI";

const NewRecipe = () => {
  const dispatch = useDispatch();
  const [viewNumber, setViewNumber] = useState(1);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      setViewNumber(1);
      dispatch(
        formNewRecipe({
          name: "",
          preparation: "",
          time: "",
          ingredients: [],
          photo: {
            preview: "",
            raw: {},
          },
        })
      );
    }
  }, [dispatch, open]);
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <ButtonWithIcon
        onClick={handleOpen}
        icon={AddRecipeIcon}
        size="63px auto"
        sizeMobile="45px auto"
        mobileIcon={AddRecipeIconMobile}
      />
      <ModalUI setOpen={setOpen} open={open}>
        {viewNumber === 1 && <FirstNewRecipe setViewNumber={setViewNumber} />}
        {viewNumber === 2 && (
          <SecondPageNewRecipe setViewNumber={setViewNumber} />
        )}
        {viewNumber === 3 && (
          <>
            <ThirdPageNewRecipe
              setViewNumber={setViewNumber}
              setCloseModal={setOpen}
            />
          </>
        )}
      </ModalUI>
    </div>
  );
};

export default NewRecipe;
