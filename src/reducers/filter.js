const filter = (
  state = {
    selectedGroupRecipes: "lista-dodatkowe",
    products: [],
    sortBy: "popularity",
    categories: {
      inne: true,
      owoce: true,
      warzywa: true,
      zboża: true,
      nabiał: true,
      mięso: true,
      ryby: true,
      przyprawy: true,
    },
  },
  action
) => {
  switch (action.type) {
    case "SUCCESS_FILTER":
      return (state = action.payload);
    default:
      return state;
  }
};

export default filter;
