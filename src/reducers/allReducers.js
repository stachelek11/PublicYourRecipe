import { combineReducers } from "redux";
import fetchProducts from "./fetchProducts";
import selectedProducts from "./selectedProducts";
import fetchFoundRecipes from "./fetchFoundRecipes";
import fetchAllProducts from "./fetchAllProducts";
import formNewRecipe from "./formNewRecipe";
import filter from "./filter";

const allReducers = combineReducers({
  fetchProducts: fetchProducts,
  selectedProducts: selectedProducts,
  fetchFoundRecipes: fetchFoundRecipes,
  fetchAllProducts: fetchAllProducts,
  formNewRecipe: formNewRecipe,
  filter: filter,
});

export default allReducers;
