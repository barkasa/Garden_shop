import React from "react";
import { useSelector } from "react-redux";
import s from "./CartCounter.module.css";

export default function CartCounter() {
  const cart = useSelector((store) => store.cart);
  const counter = cart.reduce((accum, elem) => accum + elem.count, 0);

  return (
    <>
      {counter > 0 && (
        <div className={s.cart_counter}>
          <p>{counter}</p>
        </div>
      )}
    </>
  );
}
