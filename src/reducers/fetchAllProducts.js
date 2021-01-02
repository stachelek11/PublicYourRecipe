const fetchAllProducts = (state = [], action) => {
  switch (action.type) {
    case "SUCCESS_FETCH_ALL_PRODUCTS":
      return (state = action.payload);
    default:
      return state;
  }
};

export default fetchAllProducts;
