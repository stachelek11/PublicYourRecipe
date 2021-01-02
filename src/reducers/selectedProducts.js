const selectedProducts = (
  state = JSON.parse(sessionStorage.getItem("ObjProducts")) === null
    ? []
    : JSON.parse(sessionStorage.getItem("ObjProducts")),
  action
) => {
  switch (action.type) {
    case "SUCCESS_SELECT_PRODUCTS":
      // return (state = [...state, action.payload]);
      return (state = action.payload);
    default:
      return state;
  }
};

export default selectedProducts;
