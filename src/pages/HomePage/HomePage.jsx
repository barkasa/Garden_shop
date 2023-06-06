import React from "react";
import s from "./HomePage.module.css";

import GetSailBanner from "../../components/banners/GetSailBanner/GetSailBanner";
import SailBanner from "../../components/banners/SailBanner/SailBanner";

import ProductsList from "../../components/ProductsList/ProductsList";
import CategoriesList from "../../components/CategoriesList/CategoriesList";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
import Button from "../../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductList } from "../../requests/requests";
import { useEffect } from "react";
// import { Link } from "react-scroll";

export default function HomePage() {
  const products = useSelector(store => store.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProductList())
    window.scrollTo(0, 0);
  }, [])

  let targetProducts = products
    .filter((product) => product.discont_price)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  console.log(targetProducts);

  return (
    <div>
      <SailBanner />
      <div className={s.categories_wrapper}>
        <div className={s.wrapper_title}>
          <h2>Catalog</h2>
          <Link to="/categoriesList">
            <Button className="allCategories_btn" label="All categories">
              All categories{" "}
            </Button>
          </Link>
        </div>
        <CategoriesList count={4} />
      </div>
      <GetSailBanner />
      <Element name="sail" className={s.sail_section}>
        <div className={s.sail_wrapper}>
          <h2 className={s.sail_title}>Sale</h2>
          <ProductsList products={targetProducts} />
        </div>
      </Element>
    </div>
  );
}
