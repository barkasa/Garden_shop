import React, { useRef } from "react";
import s from "../Filter/Filter.module.css";
import { useDispatch } from "react-redux";

export default function Filter() {
  //   const refFrom = useRef();
  //   const refTo = useRef();
  //   const dispatch = useDispatch();

  //   const handleSortOption = (e) => {
  //     e.preventDefault();

  //     switch (e.target.value) {
  //       case "default":
  //         dispatch(sortByDefaultAction());
  //         break;
  //       case "priceDesc":
  //         dispatch(sortByPriceDescAction());
  //         break;
  //       case "priceAsc":
  //         dispatch(sortByPriceAscAction());
  //         break;
  //       default:
  //         break;
  //     }
  //   };

  //   const handleRange = () => {
  //     const from = refFrom.current.value || -Infinity;
  //     const to = refTo.current.value || Infinity;

  //     const range = {
  //       from,
  //       to,
  //     };

  //     dispatch(sortByRangeAction(range));
  //   };

  return (
    <div className={s.filter_wrapper}>
      <label className={s.filter_price}>
        Price
        <input
          className={s.input_toFrom}
          type="text"
          placeholder="to"
          //   onChange={handleRange}
          //   ref={refTo}
        />
        <input
          className={s.input_toFrom}
          type="text"
          placeholder="from"
          //   onChange={handleRange}
          //   ref={refFrom}
        />
      </label>
      <label className={s.filter_discountChek}>
        Discounted items
        <div>
          <input className={s.input_checkBox} type="checkbox" />
        </div>
      </label>
      <label className={s.filter_Sort_price}>
        Sorted
        {/* onChange={handleSortOption} */}
        <select className={s.input_select}>
          <option value="default">default</option>
          <option value="priceDesc">price descending</option>
          <option value="priceAsc">price ascending</option>
        </select>
      </label>
    </div>
  );
}
