// const initialState = {
//   category: null,
//   loading: false,
//   error: null,
// };

// const categoryReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "FETCH_CATEGORY_REQUEST":
//       return {
//         ...state,
//         loading: true,
//         error: null,
//       };
//     case "FETCH_CATEGORY_SUCCESS":
//       return {
//         ...state,
//         category: action.payload,
//         loading: false,
//       };
//     case "FETCH_CATEGORY_ERROR":
//       return {
//         ...state,
//         error: action.payload,
//         loading: false,
//       };
//     default:
//       return state;
//   }
// };

// export default categoryReducer;
const defaultState = [];
const GET_CATEGORY = "GET_CATEGORY";

export const categoryReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_CATEGORY:
      return [...action.payload];

    default:
      return state;
  }
};

export const getCategoryAction = (payload) => ({
  type: GET_CATEGORY,
  payload,
});

// export default categoryReducer;
