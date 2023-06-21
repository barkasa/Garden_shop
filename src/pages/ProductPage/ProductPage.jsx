import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";

import s from "./ProductPage.module.css";
import Button from "../../components/Button/Button";
import { addToCartAction } from "../../store/reducers/cartReducer";

const ProductPage = () => {
  const { productId } = useParams();
  const products = useSelector((state) => state.products);
  const product = products.find((p) => p.id === parseInt(productId));
  const dispatch = useDispatch();
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!product) {
      navigate("/");
    }
  }, [product, navigate]);

  const handleAddToCart = () => {
    dispatch(addToCartAction(product));
  };

  const handleImageClick = () => {
    setModalOpen(true);
  };

  if (!product) {
    return <div>Товар не найден</div>;
  }

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
          <div onClick={handleImageClick}>
            <img
              src={`http://localhost:3333${product.image}`}
              alt={product.title}
              className={s.image}
            />
          </div>
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

      {isModalOpen && (
        <div className={s.modal}>
          <div className={s.modalContent}>
            <span className={s.close} onClick={() => setModalOpen(false)}>
              &times;
            </span>
            <img
              src={`http://localhost:3333${product.image}`}
              alt={product.title}
              className={s.modalImage}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
