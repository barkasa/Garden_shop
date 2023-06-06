import React, { useState } from "react";
import s from "./ProductItem.module.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { addToCartAction } from "../../store/reducers/cartReducer";
import { useDispatch } from "react-redux";

export default function ProductItem({
  title,
  price,
  discont_price,
  image,
  description,
  id,
}) {
  const imageUrl = "http://localhost:3333/" + image;
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleAddToCart = () => {
    console.log("Button clicked");
    dispatch(
      addToCartAction({
        title,
        price,
        discont_price,
        image,
        description,
        id,
      })
    );
  };

  return (
    <div
      className={s.product_item}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={s.card}>
        <div>
          <Link to={`/products/${id}`} className={s.product_link}>
            <img src={imageUrl} alt={title} className={s.product_image} />
          </Link>
          {isHovered && (
            <Button
              className="add_to_cart_btn"
              label="Add to cart"
              onClick={handleAddToCart}
            />
          )}
        </div>
        <div className={s.text_wrapper}>
          {discont_price ? (
            <div className={s.product_details}>
              <p className={s.discont_price}>{discont_price}$</p>
              <p className={s.price}>{price}$</p>
              <p className={s.discount_percentage}>
                {Math.floor(((price - discont_price) / price) * 100)}%
              </p>
            </div>
          ) : (
            <div className={`${s.no_discount_price} ${s.product_details}`}>
              <p className={s.price}>{price}$</p>
            </div>
          )}
        </div>
        <h2 className={s.product_title}>{title}</h2>
      </div>
    </div>
  );
}
