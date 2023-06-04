const defaultState = [];

const ADD_TO_CART = "ADD_TO_CART";
const INCREMENT_COUNT = "INCREMENT_COUNT";
const DECREMENT_COUNT = "DECREMENT_COUNT";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
//
const RESET_COUNTER = "RESET_COUNTER";
const CLEAR_CART = "CLEAR_CART";
//

const checkProduct = (state, payload) => {
  if (payload && payload.id) {
    const productExist = state.find((el) => el.id === payload.id);
    if (productExist) {
      productExist.count++;
      return [...state];
    } else {
      return [...state, { ...payload, count: 1 }];
    }
  }
  return state;
};

export const cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return checkProduct(state, action.payload);
    case INCREMENT_COUNT:
      state.find((elem) => elem.id === action.payload).count++;
      return [...state];

    case DECREMENT_COUNT:
      const target = state.find((elem) => elem.id === action.payload);
      if (target.count > 1) {
        return state.map((elem) =>
          elem.id === action.payload ? { ...elem, count: elem.count - 1 } : elem
        );
      } else {
        return state.filter((elem) => elem.id !== action.payload);
      }

    case REMOVE_FROM_CART:
      return state.filter((elem) => elem.id !== action.payload);

    //
    case RESET_COUNTER:
      return { ...state, count: 0 }; // Обнуляем счетчик
    case CLEAR_CART:
      return []; // Очищаем корзину
    //

    default:
      return state;
  }
};

export const addToCartAction = (payload) => ({ type: ADD_TO_CART, payload });
export const incrementCountAction = (payload) => ({
  type: INCREMENT_COUNT,
  payload,
});
export const decrementCountAction = (payload) => ({
  type: DECREMENT_COUNT,
  payload,
});
export const removeFromCartAction = (payload) => ({
  type: REMOVE_FROM_CART,
  payload,
});
//

export const resetCounterAction = () => ({ type: RESET_COUNTER });
export const clearCartAction = () => ({ type: CLEAR_CART });

//
