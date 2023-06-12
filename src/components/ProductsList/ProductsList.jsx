import React from "react";
import s from "./ProductsList.module.css";
import ProductItem from "../ProductItem/ProductItem";

export default function ProductsList({ products }) {
  products = products.filter((elem) => elem.showBySale && elem.rangeVisible);
  // console.log(products);
  return (
    <div className={s.card_container}>
      {products
        .filter((product) => product.rangeVisible)
        .map((product) => (
          <div className={s.card} key={product.id}>
            <ProductItem {...product} />
          </div>
        ))}
    </div>
  );
}
