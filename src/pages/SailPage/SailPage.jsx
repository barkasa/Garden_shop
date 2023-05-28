import React from "react";
import s from "./SailPage.module.css";
import ProductsList from "../../components/ProductsList/ProductsList";
// import

export default function SailPage() {
  return (
    <div>
      <div className={s.sail_wrapper}>
        <h2 className={s.sail_title}>Products with sale</h2>
        <ProductsList />
      </div>
    </div>
  );
}
