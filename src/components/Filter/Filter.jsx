import React, { useRef, useEffect } from "react";
import s from "../Filter/Filter.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  sortByDefaultAction,
  sortByPriceDescAction,
  sortByPriceAscAction,
  sortByRangeAction,
  sortByNameAscAction,
  sortByNameDescAction,
  filterBySaleAction,
} from "../../store/reducers/productsReducer";
import { log } from "react-modal/lib/helpers/ariaAppHider";
import { filterCategoryItemBySale, filterCategoryItemsByRange } from "../../store/reducers/categoryReducer";
import { useState } from "react";

export default function Filter({ location, showDiscountedItems = true }) {
  const refFrom = useRef();
  const refTo = useRef();
  const dispatch = useDispatch();
  // const saleFilterValue = useSelector((state) => state.products.saleFilter);

  // const filterBySale = useSelector((state) => state.products).filter(elem => elem.discont_price);

  // useEffect(() => {
  //   dispatch(filterBySaleAction(saleFilterValue));
  // }, [dispatch, saleFilterValue]);

  const handleFilterBySale = (e) => {
    dispatch(location === 'category_item' ? filterCategoryItemBySale(e.target.checked) : filterBySaleAction(e.target.checked))
    // console.log("Checkbox value:", filterBySale);
  };

  const handleSortOption = (e) => {
    e.preventDefault();
    console.log("Selected option:", e.target.value);

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
      case "nameAsc":
        dispatch(sortByNameAscAction());
        break;
      case "nameDesc":
        dispatch(sortByNameDescAction());
        break;
      default:
        break;
    }
  };

  const [fromValue, setFromValue] = useState('from');
  const [toValue, setToValue] = useState('to');

  const handleRange = (e) => {
    const range = {
      from: fromValue,
      to: toValue
    }
    const { value } = e.target;
    if (e.target.name === 'from') {
      range.from = +value
      setFromValue(Number(value))
    } else {
      range.to = +value
      setToValue(Number(value))
    }
    dispatch(location === 'category_item' ? filterCategoryItemsByRange(range) : sortByRangeAction(range))
    // const from = Number(refFrom.current.value) || null;
    // const to = Number(refTo.current.value) || null;

    // console.log("From:", from);
    // console.log("To:", to);

    // const range = {
    //   from,
    //   to,
    // };

    // dispatch(sortByRangeAction(range));
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
          // ref={refFrom}
          value={fromValue}
          onChange={handleRange}
        />
        <input
          className={s.input_toFrom}
          type="number"
          placeholder="to"
          name={"to"}
          // ref={refTo}
          value={toValue}
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
