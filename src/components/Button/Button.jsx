import React from "react";

import classNames from "classnames";
import s from "./Button.module.css";

export default function Button({ label, className, onClick }) {
  const buttonClassName = classNames(s.button, {
    [s.button_large]: className === "large_btn",
    [s.button_small]: className === "small_btn",
    [s.sale_button]: className === "sale_btn",
    [s.allCategories_button]: className === "allCategories_btn",
    [s.add_to_cart_button]: className === "add_to_cart_btn",
    [s.order_button]: className === "order_btn",
  });

  return (
    <button className={buttonClassName} onClick={onClick}>
      {label}
    </button>
  );
}
