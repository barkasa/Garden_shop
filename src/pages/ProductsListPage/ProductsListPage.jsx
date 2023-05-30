import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductList } from "../../requests/requests";
import ProductItem from "../../components/ProductItem/ProductItem";
import s from "./ProductsListPage.module.css";
import Filter from "../../components/Filter/Filter";

const ProductsListPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductList());
  }, [dispatch]);

  return (
    <div className={s.products_wrapper}>
      <h2 className={s.products_list_title}>All Products</h2>
      <Filter />
      <div className={s.card_container}>
        {products.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsListPage;
