export const fetchProducts = (data) => {
  return {
    type: "SUCCESS_FETCH_PRODUCTS",
    payload: data,
  };
};

export const fetchAllProducts = (data) => {
  return {
    type: "SUCCESS_FETCH_ALL_PRODUCTS",
    payload: data,
  };
};

export const selectedProducts = (products) => {
  return {
    type: "SUCCESS_SELECT_PRODUCTS",
    payload: products,
  };
};

export const fetchFoundRecipes = (recipes) => {
  return {
    type: "SUCCESS_FETCH_FOUND",
    payload: recipes,
  };
};

export const formNewRecipe = (form) => {
  return {
    type: "SUCCESS_FORM_NEW_DATA",
    payload: form,
  };
};

export const filter = (value) => {
  return {
    type: "SUCCESS_FILTER",
    payload: value,
  };
};
