import React, { useRef } from "react";
import s from "../Filter/Filter.module.css";
import { useDispatch } from "react-redux";
import {
  sortByDefaultAction,
  sortByPriceDescAction,
  sortByPriceAscAction,
  sortByRangeAction,
  sortByNameAscAction,
  sortByNameDescAction,
  filterBySaleAction,
} from "../../store/reducers/productsReducer";

import {
  filterCategoryItemBySale,
  filterCategoryItemsByRange,
  sortCategoryProductsByDefaultAction,
  sortCategoryProductsByPriceDescAction,
  sortCategoryProductsByPriceAscAction,
  sortCategoryProductsByNameAscAction,
  sortCategoryProductsByNameDescAction,
} from "../../store/reducers/categoryReducer";

export default function Filter({ location, showDiscountedItems = true }) {
  const dispatch = useDispatch();

  const handleFilterBySale = (e) => {
    dispatch(
      location === "category_item"
        ? filterCategoryItemBySale(e.target.checked)
        : filterBySaleAction(e.target.checked)
    );
  };

  const handleSortOption = (e) => {
    e.preventDefault();
    console.log("Selected option:", e.target.value);

    switch (e.target.value) {
      case "default":
        dispatch(
          location === "category_item"
            ? sortCategoryProductsByDefaultAction()
            : sortByDefaultAction()
        );
        break;
      case "priceDesc":
        dispatch(
          location === "category_item"
            ? sortCategoryProductsByPriceDescAction()
            : sortByPriceDescAction()
        );
        break;
      case "priceAsc":
        dispatch(
          location === "category_item"
            ? sortCategoryProductsByPriceAscAction()
            : sortByPriceAscAction()
        );
        break;
      case "nameAsc":
        dispatch(
          location === "category_item"
            ? sortCategoryProductsByNameAscAction()
            : sortByNameAscAction()
        );
        break;
      case "nameDesc":
        dispatch(
          location === "category_item"
            ? sortCategoryProductsByNameDescAction()
            : sortByNameDescAction()
        );
        break;
      default:
        break;
    }
  };

  const fromValueRef = useRef("");
  const toValueRef = useRef("");

  const handleRange = () => {
    const range = {
      from:
        fromValueRef.current.value !== ""
          ? Number(fromValueRef.current.value)
          : undefined,
      to:
        toValueRef.current.value !== ""
          ? Number(toValueRef.current.value)
          : undefined,
    };
    dispatch(
      location === "category_item"
        ? filterCategoryItemsByRange(range)
        : sortByRangeAction(range)
    );
  };

  return (
    <div className={s.filter_wrapper}>
      <label className={s.filter_price}>
        Price
        <input
          className={s.input_toFrom}
          type="number"
          placeholder="from"
          name={"from"}
          ref={fromValueRef}
          onChange={handleRange}
        />
        <input
          className={s.input_toFrom}
          type="number"
          placeholder="to"
          name={"to"}
          ref={toValueRef}
          onChange={handleRange}
        />
      </label>
      {showDiscountedItems && (
        <label className={s.filter_discountChek}>
          Discounted items
          <div>
            <input
              className={s.input_checkBox}
              onChange={handleFilterBySale}
              type="checkbox"
            />
          </div>
        </label>
      )}

      <label className={s.filter_Sort_price}>
        Sorted
        <select className={s.input_select} onChange={handleSortOption}>
          <option value="default">Default</option>
          <option value="priceDesc">Price (low to high)</option>
          <option value="priceAsc">Price (high to low)</option>
          <option value="nameAsc">Name (A to Z)</option>
          <option value="nameDesc">Name (Z to A)</option>
        </select>
      </label>
    </div>
  );
}
