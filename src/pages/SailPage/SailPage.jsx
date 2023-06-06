import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductList } from "../../requests/requests";
import ProductItem from "../../components/ProductItem/ProductItem";
import s from "./SailPage.module.css";
import Filter from "../../components/Filter/Filter";

const SailPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductList());
  }, [dispatch]);

  const saleProducts = products.filter((product) => product.discont_price);

  return (
    <div className={s.sail_wrapper}>
      <h2 className={s.sail_page_title}>Products with sale</h2>
      <Filter location="sail_page" showDiscountedItems={false} />

      <div className={s.card_container}>
        {saleProducts.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default SailPage;
