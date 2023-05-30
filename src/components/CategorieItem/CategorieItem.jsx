import React from "react";
import { Link } from "react-router-dom";
import s from "./CategorieItem.module.css";

export default function CategorieItem({ title, image, id }) {
  const imageUrl = `http://localhost:3333${image}`;

  return (
    <div className={s.category_card}>
      <div>
        <Link to={`/categoryItem/${id}`}>
          <div className={s.card_img}>
            <img src={imageUrl} alt={title} />
          </div>
        </Link>
        <p>{title}</p>
      </div>
    </div>
  );
}
