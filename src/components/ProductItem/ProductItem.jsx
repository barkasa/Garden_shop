import React, { useState } from "react";
import s from "./ProductItem.module.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

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

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={s.product_item}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={s.card}>
        {/* // */}
        <Link to={`/products/${id}`} className={s.product_link}>
          {/* // */}
          <img src={imageUrl} alt="foto" className={s.product_image} />
        </Link>
        {isHovered && (
          <Button className="add_to_cart_btn" label="Add to cart" />
        )}

        <div className={s.text_wrapper}>
          {discont_price ? (
            <div className={s.product_details}>
              <p className={s.discont_price}>{discont_price}$</p>
              <p className={s.price}>{price}$</p>
              <p className={s.discount_percentage}>
                {Math.round(((price - discont_price) / price) * 100)}%
              </p>
            </div>
          ) : (
            <div className={`${s.no_discount_price} ${s.product_details}`}>
              <p className={s.price}>{price}$</p>
            </div>
          )}
        </div>

        <h2 className={s.product_title}>{title}</h2>
        {/* // */}

        {/* // */}
      </div>
    </div>
  );
}
