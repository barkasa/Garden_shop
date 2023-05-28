import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import s from "./ProductsList.module.css";

import { fetchProductList } from "../../requests/requests";
import ProductItem from "../ProductItem/ProductItem";

export default function ProductsList({ count }) {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products);

  useEffect(() => {
    dispatch(fetchProductList());
  }, [dispatch]);

  let targetProducts;
  if (count) {
    targetProducts = products
      .filter((product) => product.discont_price)
      .sort(() => Math.random() - 0.5)
      .slice(0, count);
  } else {
    targetProducts = products.filter((product) => product.discont_price);
  }

  return (
    <div className={s.card_container}>
      {targetProducts.map((elem, index) => (
        <div className={s.card} key={index}>
          <ProductItem {...elem} />
        </div>
      ))}
    </div>
  );
}
