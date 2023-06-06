const initialState = [];
const GET_CATEGORY = "GET_CATEGORY";
const FILTER_BY_SALE = "FILTER_BY_SALE";
const FILTER_CATEGORY_BY_RANGE = "FILTER_CATEGORY_BY_RANGE"

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY:
      console.log(action.payload)
      action.payload.data = [...action.payload.data.map(elem => ({ ...elem, showBySale: true, rangeVisible: true }))]
      return { ...action.payload }

    case FILTER_BY_SALE:
      return {
        ...state,
        data: state.data.map((elem) => {
          if (elem.discont_price === null) {
            elem.showBySale = !action.payload;
          }
          return elem;
        }),
      };

    case FILTER_CATEGORY_BY_RANGE:
      console.log(action.payload)
      let { from, to } = action.payload;
      if (isNaN(to)) {
        to = Infinity;
      }
      if (isNaN(from)) {
        from = -Infinity;
      }
      return {
        ...state, data: state.data.map(elem => ({
          ...elem, rangeVisible:
            (elem.discont_price ? elem.discont_price : elem.price) >= from
            && (elem.discont_price ? elem.discont_price : elem.price) <= to
        })
        )
      }
    default:
      return state;
  }
};

export const getCategoryAction = (payload) => ({
  type: GET_CATEGORY,
  payload,
});
export const filterCategoryItemBySale = (payload) => ({ type: FILTER_BY_SALE, payload })
export const filterCategoryItemsByRange = (payload) => ({ type: FILTER_CATEGORY_BY_RANGE, payload })