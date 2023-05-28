import { useDispatch, useSelector } from "react-redux";
import { fetchCategoryList } from "../../requests/requests";
import CategorieItem from "../CategorieItem/CategorieItem";
import { useEffect } from "react";
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
          <CategorieItem key={elem.id} {...elem} />
        ))}
      </div>
    </div>
  );
}
