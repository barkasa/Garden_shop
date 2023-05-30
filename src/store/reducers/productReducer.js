export const getProductAction = (product) => ({
  type: "GET_PRODUCT",
  payload: product,
});

const initialState = {
  product: null,
  loading: false,
  error: null,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCT_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "GET_PRODUCT_SUCCESS":
      return {
        ...state,
        loading: false,
        product: action.payload,
      };
    case "GET_PRODUCT_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
