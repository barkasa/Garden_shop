import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { productsReducer } from "./reducers/productsReducer";
import { categoriesReducer } from "./reducers/categoriesReducer";
import { categoryReducer } from "./reducers/categoryReducer";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  category: categoryReducer,
  products: productsReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
