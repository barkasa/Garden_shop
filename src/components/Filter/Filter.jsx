import React, { useRef } from "react";
import s from "../Filter/Filter.module.css";
import { useDispatch } from "react-redux";
import {
  sortByDefaultAction,
  sortByPriceDescAction,
  sortByPriceAscAction,
  sortByRangeAction,
  sortByNameAscAction,
  filterProductsBySaleAction,
} from "../../store/reducers/productsReducer";

export default function Filter() {
  const refFrom = useRef();
  const refTo = useRef();
  const dispatch = useDispatch();

  const handleSortOption = (e) => {
    e.preventDefault();

    switch (e.target.value) {
      case "default":
        dispatch(sortByDefaultAction());
        break;
      case "priceDesc":
        dispatch(sortByPriceDescAction());
        break;
      case "priceAsc":
        dispatch(sortByPriceAscAction());
        break;
      case "name":
        dispatch(sortByNameAscAction());
        break;
      default:
        break;
    }
  };

  const handleRange = () => {
    const from = Number(refFrom.current.value) || null;
    const to = Number(refTo.current.value) || null;

    console.log("From:", from);
    console.log("To:", to);

    const range = {
      from,
      to,
    };

    console.log("Range:", range);

    dispatch(sortByRangeAction(range));
  };

  const handleFilterBySale = (e) => {
    const isChecked = e.target.checked;
    console.log("Filter by sale:", isChecked);
    dispatch(filterProductsBySaleAction(isChecked));
  };

  return (
    <div className={s.filter_wrapper}>
      <label className={s.filter_price}>
        Price
        <input
          className={s.input_toFrom}
          type="text"
          placeholder="from"
          ref={refFrom}
          onChange={handleRange}
        />
        <input
          className={s.input_toFrom}
          type="text"
          placeholder="to"
          ref={refTo}
          onChange={handleRange}
        />
      </label>
      <label className={s.filter_discountChek}>
        Discounted items
        <div>
          <input
            // onClick={handleDiscountedItems}
            onClick={(e) =>
              dispatch(filterProductsBySaleAction(e.target.checked))
            }
            className={s.input_checkBox}
            type="checkbox"
            onChange={handleFilterBySale}
          />
        </div>
      </label>
      <label className={s.filter_Sort_price}>
        Sorted
        <select className={s.input_select} onChange={handleSortOption}>
          <option value="default">Default</option>
          <option value="priceDesc">Price (low to high)</option>
          <option value="priceAsc">Price (high to low)</option>
          <option value="name">Name (A to Z)</option>
        </select>
      </label>
    </div>
  );
}
