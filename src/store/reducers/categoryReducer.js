const initialState = [];
const GET_CATEGORY = "GET_CATEGORY";
const FILTER_BY_SALE = "FILTER_BY_SALE";
const FILTER_CATEGORY_BY_RANGE = "FILTER_CATEGORY_BY_RANGE";

const SORT_CATEGORY_BY_DEFAULT = "SORT_CATEGORY_BY_DEFAULT";
const SORT_CATEGORY_BY_PRICE_DESC = "SORT_CATEGORY_BY_PRICE_DESC";

const SORT_CATEGORY_BY_PRICE_ASC = "SORT_CATEGORY_BY_PRICE_ASC";
const SORT_CATEGORY_BY_NAME_ASC = "SORT_CATEGORY_BY_NAME_ASC";
const SORT_CATEGORY_BY_NAME_DESC = "SORT_CATEGORY_BY_NAME_DESC";

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY:
      console.log(action.payload);
      action.payload.data = [
        ...action.payload.data.map((elem) => ({
          ...elem,
          showBySale: true,
          rangeVisible: true,
        })),
      ];
      return { ...action.payload };

    case SORT_CATEGORY_BY_DEFAULT:
      return {
        ...state,
        data: [...state.data].sort((a, b) => a.id - b.id),
      };

    case SORT_CATEGORY_BY_PRICE_DESC:
      return {
        ...state,
        data: [...state.data].sort((a, b) => a.price - b.price),
      };

    case SORT_CATEGORY_BY_PRICE_ASC:
      return {
        ...state,
        data: [...state.data].sort((a, b) => b.price - a.price),
      };

    case SORT_CATEGORY_BY_NAME_ASC:
      return {
        ...state,
        data: [...state.data].sort((a, b) => {
          const titleA = a.title || "";
          const titleB = b.title || "";
          return titleA.localeCompare(titleB);
        }),
      };

    case SORT_CATEGORY_BY_NAME_DESC:
      return {
        ...state,
        data: [...state.data].sort((a, b) => {
          const titleA = a.title || "";
          const titleB = b.title || "";
          return titleB.localeCompare(titleA);
        }),
      };

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
      console.log(action.payload);
      let { from, to } = action.payload;
      if (isNaN(to)) {
        to = Infinity;
      }
      if (isNaN(from)) {
        from = -Infinity;
      }
      return {
        ...state,
        data: state.data.map((elem) => ({
          ...elem,
          rangeVisible:
            (elem.discont_price ? elem.discont_price : elem.price) >= from &&
            (elem.discont_price ? elem.discont_price : elem.price) <= to,
        })),
      };

    default:
      return state;
  }
};

export const getCategoryAction = (payload) => ({
  type: GET_CATEGORY,
  payload,
});
export const filterCategoryItemBySale = (payload) => ({
  type: FILTER_BY_SALE,
  payload,
});
export const filterCategoryItemsByRange = (payload) => ({
  type: FILTER_CATEGORY_BY_RANGE,
  payload,
});
export const sortCategoryProductsByDefaultAction = () => ({
  type: SORT_CATEGORY_BY_DEFAULT,
});

export const sortCategoryProductsByPriceDescAction = () => ({
  type: SORT_CATEGORY_BY_PRICE_DESC,
});

export const sortCategoryProductsByPriceAscAction = () => ({
  type: SORT_CATEGORY_BY_PRICE_ASC,
});

export const sortCategoryProductsByNameAscAction = () => ({
  type: SORT_CATEGORY_BY_NAME_ASC,
});

export const sortCategoryProductsByNameDescAction = () => ({
  type: SORT_CATEGORY_BY_NAME_DESC,
});
