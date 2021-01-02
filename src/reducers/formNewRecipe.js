const formNewRecipe = (
  state = {
    name: "",
    preparation: "",
    time: "",
    ingredients: [],
    photo: {
      preview: "",
      raw: {},
    },
  },
  action
) => {
  switch (action.type) {
    case "SUCCESS_FORM_NEW_DATA":
      return (state = action.payload);
    default:
      return state;
  }
};

export default formNewRecipe;
