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
import ProductsList from "../../components/ProductsList/ProductsList";

const CategoryItemPage = () => {
  const { categoryId } = useParams();
  const dispatch = useDispatch();
  const categoryProducts = useSelector((state) => state.category);
  // const categories = useSelector((state) => state.categories); //

  const title = categoryProducts.data ? categoryProducts.category.title : '';
  const products = categoryProducts.data ? categoryProducts.data : [];

  useEffect(() => {
    dispatch(fetchProductsByCategory(categoryId));
    // dispatch(fetchCategoryList()); //
  }, []);

  // const category = categories.find((cat) => cat.id === parseInt(categoryId)); 

  return (
    <div className={s.category_wrapper}>
      <h2 className={s.categories_list_title}>{title}</h2>
      <Filter location={'category_item'} />
      <div className={s.card_container}>
        <ProductsList products={products} />
        {/* {products.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))} */}
      </div>
    </div>
  );
};

export default CategoryItemPage;
