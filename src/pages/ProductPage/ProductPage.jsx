import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import s from "./ProductPage.module.css";
import Button from "../../components/Button/Button";

const ProductPage = () => {
  const { productId } = useParams();
  const products = useSelector((state) => state.products);
  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <div>Товар не найден</div>;
  }

  return (
    <div className={s.product_page}>
      <div className={s.product_info}>
        <div>
          <h1 className={s.title}>{product.title}</h1>
          <img
            src={`http://localhost:3333${product.image}`}
            alt={product.title}
            className={s.image}
          />
        </div>
        <div className={s.price_wrapper}>
          {product.discont_price ? (
            <div className={s.product_details}>
              <p className={s.discont_price}>{product.discont_price}$</p>
              <p className={s.price}>{product.price}$</p>
              <p className={s.discount_percentage}>
                {Math.round(
                  ((product.price - product.discont_price) / product.price) *
                    100
                )}
                %
              </p>
            </div>
          ) : (
            <div className={`${s.no_discount_price} ${s.product_details}`}>
              <p className={s.price}>{product.price}$</p>
            </div>
          )}
          {/* <Button className={s.button} label="Add to Cart" /> */}
          <Button className="large_btn" label="Add to Cart" />
          <div className={s.divider}></div>
          <h2 className={s.description_title}>Description</h2>
          <p className={s.description}>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
