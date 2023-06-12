import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import s from "./ProductPage.module.css";
import Button from "../../components/Button/Button";
import { addToCartAction } from "../../store/reducers/cartReducer";
import { Helmet } from "react-helmet";

const ProductPage = () => {
  // Получение параметра productId из URL с помощью хука useParams()
  const { productId } = useParams();
  // Получение списка продуктов из глобального состояния с помощью хука useSelector()
  const products = useSelector((state) => state.products);
  // Нахождение продукта по его id
  const product = products.find((p) => p.id === parseInt(productId));
  // Получение экземпляра dispatch из react-redux
  const dispatch = useDispatch();
  // Проверка, найден ли продукт
  if (!product) {
    return <div>Товар не найден</div>;
  }
  // Обработчик добавления продукта в корзину
  const handleAddToCart = () => {
    dispatch(addToCartAction(product));
  };

  return (
    <div className={s.product_page}>
      <Helmet>
        <title>{`Garden-shop ${String.fromCharCode(183)} ${
          product.title
        }`}</title>
      </Helmet>
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
                {Math.floor(
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

          <Button
            className="large_btn"
            label="Add to Cart"
            onClick={handleAddToCart}
          />
          <div className={s.divider}></div>
          <h2 className={s.description_title}>Description</h2>
          <p className={s.description}>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
