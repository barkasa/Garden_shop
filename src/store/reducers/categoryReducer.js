const initialState = [];
const GET_CATEGORY = "GET_CATEGORY";
// const FILTER_BY_SALE = "FILTER_BY_SALE";

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };

    // case FILTER_BY_SALE:
    //   return {
    //     ...state,
    //     data: state.data.map((elem) => {
    //       if (elem.discont_price === null) {
    //         elem.showBySale = !action.payload;
    //       }
    //       return elem;
    //     }),
    //   };

    default:
      return state;
  }
};

export const getCategoryAction = (payload) => ({
  type: GET_CATEGORY,
  payload,
});
