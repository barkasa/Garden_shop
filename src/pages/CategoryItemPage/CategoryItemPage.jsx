import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { fetchProductsByCategory } from "../../requests/requests";
import s from "./CategoryItemPage.module.css";
import Filter from "../../components/Filter/Filter";
import ProductsList from "../../components/ProductsList/ProductsList";
import notFoundProduct from "../../images/productsNotFoundImg.png"; // Импорт изображения

const CategoryItemPage = () => {
  const { categoryId } = useParams();
  const dispatch = useDispatch();
  const categoryProducts = useSelector((state) => state.category);

  const title = categoryProducts?.category?.title || "";

  const products = categoryProducts?.data || [];

  const renderContent = () => {
    if (products.length === 0) {
      return (
        <div className={s.no_products}>
          <img src={notFoundProduct} alt="productsNotFoundImg" />
        </div>
      );
    }

    return <ProductsList products={products} />;
  };

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
      <div className={s.card_container}>{renderContent()}</div>
    </div>
  );
};

export default CategoryItemPage;
