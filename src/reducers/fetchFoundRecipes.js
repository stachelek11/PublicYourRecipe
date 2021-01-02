const fetchFoundRecipes = (state = [], action) => {
  switch (action.type) {
    case "SUCCESS_FETCH_FOUND":
      return (state = action.payload);
    default:
      return state;
  }
};

export default fetchFoundRecipes;
