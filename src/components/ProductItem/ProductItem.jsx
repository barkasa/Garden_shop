import React, { useState } from "react";

import s from "./ProductItem.module.css";
import Button from "../Button/Button";

export default function ProductItem({ title, price, discont_price, image }) {
  const imageUrl = "http://localhost:3333/" + image;
  const discountPercentage = Math.round(
    ((price - discont_price) / price) * 100
  );

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
        <img src={imageUrl} alt="foto" className={s.product_image} />
        {isHovered && (
          <Button className="add_to_cart_btn" label="Add to cart" />
        )}

        <div className={s.product_details}>
          <p className={s.discont_price}>{discont_price}$</p>
          <p className={s.price}>{price}$</p>
          <p className={s.discount_percentage}>{discountPercentage}%</p>
        </div>
        <h2 className={s.product_title}>{title}</h2>
      </div>
    </div>
  );
}
