const defaultState = [];

const GET_PRODUCTS = "GET_PRODUCTS";
const SORT_BY_DEFAULT = "SORT_BY_DEFAULT";
const SORT_BY_PRICE_DESC = "SORT_BY_PRICE_DESC";
const SORT_BY_RANGE = "SORT_BY_RANGE";
const SORT_BY_PRICE_ASC = "SORT_BY_PRICE_ASC";
const SORT_BY_NAME_ASC = "SORT_BY_NAME_ASC";
const FILTER_PRODUCTS_BY_SALE = "FILTER_PRODUCTS_BY_SALE";
//
const FILTER_PRODUCTS_BY_RANGE = "FILTER_PRODUCTS_BY_RANGE";

export const productsReducer = (state = defaultState, action) => {
  switch (action.type) {
    // productsReducer.js
    case GET_PRODUCTS:
      return [
        ...action.payload.map((product) => ({
          ...product,
          rangeVisible: true,
          showBySale: true, // Добавлено новое свойство
        })),
      ];

    case SORT_BY_DEFAULT:
      return [...state].sort((a, b) => a.id - b.id);

    case SORT_BY_PRICE_DESC:
      return [...state].sort((a, b) => a.price - b.price);

    case SORT_BY_PRICE_ASC:
      return [...state].sort((a, b) => b.price - a.price);

    case SORT_BY_NAME_ASC:
      return [...state].sort((a, b) => {
        const titleA = a.title || "";
        const titleB = b.title || "";
        return titleA.localeCompare(titleB);
      });

    // case FILTER_PRODUCTS_BY_SALE:
    //   const filteredProducts = state.map((product) => {
    //     if (action.payload && !product.discounted) {
    //       return { ...product, rangeVisible: false };
    //     }
    //     return { ...product, rangeVisible: true };
    //   });
    //   return filteredProducts;
    //
    case FILTER_PRODUCTS_BY_SALE:
      if (action.payload) {
        return state.map((elem) => {
          if (elem.discont_price === null) {
            elem.showBySale = false;
          }
          return elem;
        });
      } else {
        return state.map((elem) => ({ ...elem, showBySale: true }));
      }
    // ...

    // case SORT_BY_RANGE:
    //   const { from, to } = action.payload;

    // Фильтрация товаров по диапазону цен
    // const filteredProductsByRange = state.map((product) => {
    //   if (
    //     (from !== null && product.price < from) ||
    //     (to !== null && product.price > to)
    //   ) {
    //     return { ...product, rangeVisible: false };
    //   }
    //   return { ...product, rangeVisible: true };
    // });
    // // return filteredProductsByRange;

    // // Возвращаем исходное состояние, если диапазон не задан
    // // return state.map((product) => ({
    // //   ...product,
    // //   rangeVisible: true,
    // // }));
    // if (from === null && to === null) {
    //   return state.map((product) => ({
    //     ...product,
    //     rangeVisible: true,
    //   }));
    // } else {
    //   return filteredProductsByRange;
    // }
    case FILTER_PRODUCTS_BY_RANGE:
      console.log(action.payload);
      let { from, to } = action.payload;
      if (isNaN(to)) {
        to = Infinity;
      }
      if (isNaN(from)) {
        from = -Infinity;
      }
      return [...state].map((product) => ({
        ...product,
        showByRange:
          (product.discont_price ? product.discont_price : product.price) >=
            from &&
          (product.discont_price ? product.discont_price : product.price) <= to,
      }));

    default:
      return state;
  }
};

export const getProductsAction = (payload) => ({ type: GET_PRODUCTS, payload });
export const sortByDefaultAction = () => ({ type: SORT_BY_DEFAULT });
export const sortByPriceDescAction = () => ({ type: SORT_BY_PRICE_DESC });
export const sortByRangeAction = (payload) => ({
  type: SORT_BY_RANGE,
  payload,
});
export const sortByPriceAscAction = () => ({ type: SORT_BY_PRICE_ASC });
export const sortByNameAscAction = () => ({ type: SORT_BY_NAME_ASC });
export const filterProductsBySaleAction = (payload) => ({
  type: FILTER_PRODUCTS_BY_SALE,
  payload,
});
//
export const filterByRangeAction = (payload) => ({
  type: FILTER_PRODUCTS_BY_RANGE,
  payload,
});
