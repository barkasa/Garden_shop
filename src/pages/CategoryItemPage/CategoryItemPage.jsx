import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategoryList,
  fetchProductsByCategory,
} from "../../requests/requests";
import ProductItem from "../../components/ProductItem/ProductItem";
import s from "./CategoryItemPage.module.css";
import Filter from "../../components/Filter/Filter";

const CategoryItemPage = () => {
  const { categoryId } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const categories = useSelector((state) => state.categories); //

  useEffect(() => {
    dispatch(fetchProductsByCategory(categoryId));
    dispatch(fetchCategoryList()); //
  }, [categoryId, dispatch]);

  const category = categories.find((cat) => cat.id === parseInt(categoryId)); //

  return (
    <div className={s.category_wrapper}>
      <h2 className={s.categories_list_title}>{category?.title}</h2>
      <Filter />
      <div className={s.card_container}>
        {products.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryItemPage;
