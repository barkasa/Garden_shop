import { ggetCategoriesAction } from "../store/reducers/categoriesReducer";
import { getProductsAction } from "../store/reducers/productsReducer";

const base_url = "http://localhost:3333";

const products_url = base_url + "/products/all";
const categories_url = base_url + "/categories/all";
// const category_url = base_url + "/categories/";

//
const getDiscount_url = base_url + "/sale/send";
const sendOder_url = base_url + "/order/send";
//

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

export const fetchProductsByCategory = (categoryId) => {
  const url = `${base_url}/categories/${categoryId}`;

  return function (dispatch) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => dispatch(getProductsAction(data.data)))
      .catch((error) => console.log(error));
  };
};

export const fetchProduct = (productId) => {
  const url = `${base_url}/products/${productId}`;

  return function (dispatch) {
    dispatch({ type: "GET_PRODUCT_REQUEST" });

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "GET_PRODUCT_SUCCESS", payload: data });
      })
      .catch((error) => {
        dispatch({ type: "GET_PRODUCT_ERROR", payload: error });
        console.log(error);
      });
  };
};

export const send_coupon_request = (phone) => {
  return (dispatch) => {
    // Имитация отправки запроса и получения ответа
    const response = {
      status: "OK",
      message: "request processed",
    };

    // Имитация задержки ответа
    setTimeout(() => {
      console.log("Request sent", response);
      dispatch({ type: "COUPON_REQUEST_SUCCESS", payload: response });
    }, 1000);
  };
};

////
export const send_order = (phone) => {
  fetch(sendOder_url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(phone),
  })
    .then((res) => res.json())
    .then((data) => console.log("Request sent", data))
    .catch((error) => console.error("Error:", error));
};
