import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { fetchProductsByCategory } from "../../requests/requests";
import s from "./CategoryItemPage.module.css";
import Filter from "../../components/Filter/Filter";
import ProductsList from "../../components/ProductsList/ProductsList";

const CategoryItemPage = () => {
  const { categoryId } = useParams();
  const dispatch = useDispatch();
  const categoryProducts = useSelector((state) => state.category);

  const title = categoryProducts.data ? categoryProducts.category.title : "";
  const products = categoryProducts.data ? categoryProducts.data : [];

  useEffect(() => {
    dispatch(fetchProductsByCategory(categoryId));
  }, [categoryId, dispatch]);

  return (
    <div className={s.category_wrapper}>
      <Helmet>
        <title>{`Garden-shop ${String.fromCharCode(183)} ${title}`}</title>
      </Helmet>
      <h2 className={s.categories_list_title}>{title}</h2>
      <Filter location={"category_item"} />
      <div className={s.card_container}>
        <ProductsList products={products} />
      </div>
    </div>
  );
};

export default CategoryItemPage;
