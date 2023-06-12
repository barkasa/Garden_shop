import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductList } from "../../requests/requests";
import s from "./ProductsListPage.module.css";
import Filter from "../../components/Filter/Filter";
import ProductsList from "../../components/ProductsList/ProductsList";
import PageWrapper from "../../components/PageWrapper/PageWrapper";

const ProductsListPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductList());
  }, [dispatch]);

  return (
    <PageWrapper title="All Products">
      <div className={s.products_wrapper}>
        <h2 className={s.products_list_title}>All Products</h2>
        <Filter />
        <ProductsList products={products} />
      </div>
    </PageWrapper>
  );
};

export default ProductsListPage;
