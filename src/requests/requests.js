import { ggetCategoriesAction } from "../store/reducers/categoriesReducer";
import { getProductsAction } from "../store/reducers/productsReducer";
import { getCategoryAction } from "../store/reducers/categoryReducer";
// import {
//   fetchCategoryRequest,
//   fetchCategorySuccess,
//   fetchCategoryError,
// } from "../actions/action";

const base_url = "http://localhost:3333";

const products_url = base_url + "/products/all";
const categories_url = base_url + "/categories/all";
const category_url = base_url + "/categories/";

export const fetchProductList = () => {
  return function (dispatch) {
    fetch(products_url)
      .then((res) => res.json())
      .then((data) => dispatch(getProductsAction(data)));
  };
};

//
export const fetchCategoryList = () => {
  return function (dispatch) {
    fetch(categories_url)
      .then((res) => res.json())
      .then((data) => dispatch(ggetCategoriesAction(data)))
      .catch((error) => console.log(error));
  };
};
//post запрос
export function discountRequest(discount) {
  return fetch("/discount", {
    method: "POST",
    body: JSON.stringify(discount),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
}

export const fetchCategory = () => {
  return function (dispatch) {
    fetch(category_url)
      .then((res) => res.json())
      .then((data) => dispatch(getCategoryAction(data)))
      .catch((error) => console.log(error));
  };
};
