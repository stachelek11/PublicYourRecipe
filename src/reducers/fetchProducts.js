const fetchProducts = (state = [], action) => {
  switch (action.type) {
    case "SUCCESS_FETCH_PRODUCTS":
      return (state = action.payload);
    default:
      return state;
  }
};

export default fetchProducts;
