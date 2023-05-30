const initialState = [];
const GET_CATEGORY = "GET_CATEGORY";

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
};

export const getCategoryAction = (payload) => ({
  type: GET_CATEGORY,
  payload,
});
