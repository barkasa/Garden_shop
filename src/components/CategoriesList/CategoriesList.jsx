import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoryList } from "../../requests/requests";
import { Link } from "react-router-dom";
import CategorieItem from "../CategorieItem/CategorieItem";
import s from "./CategoriesList.module.css";

export default function CategoriesList({ count }) {
  const dispatch = useDispatch();
  const categories = useSelector((store) => store.categories);

  useEffect(() => {
    dispatch(fetchCategoryList());
  }, [dispatch]);

  return (
    <div className={s.categories_wrapper}>
      <div className={s.category_card}>
        {categories.slice(0, count).map((elem) => (
          <div key={elem.id}>
            <Link to={`/categoryItem/${elem.id}`}>{elem.name}</Link>
            <CategorieItem {...elem} />
          </div>
        ))}
      </div>
    </div>
  );
}
