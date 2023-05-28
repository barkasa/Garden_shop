import React from "react";
import s from "./HomePage.module.css";

import GetSailBanner from "../../components/banners/GetSailBanner/GetSailBanner";
import SailBanner from "../../components/banners/SailBanner/SailBanner";

import ProductsList from "../../components/ProductsList/ProductsList";
import CategoriesList from "../../components/CategoriesList/CategoriesList";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
import Button from "../../components/Button/Button";
// import { Link } from "react-scroll";

export default function HomePage() {
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
          <ProductsList count={3} />
        </div>
      </Element>
    </div>
  );
}
