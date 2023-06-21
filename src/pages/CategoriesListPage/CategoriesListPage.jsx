import React from "react";
import s from "./CategoriesListPage.module.css";

import CategoriesList from "../../components/CategoriesList/CategoriesList";

export default function CategoriesListPage() {
  return (
    <div className={s.categories_list_wrapper}>
      <h2 className={s.categories_list_title}>Categories</h2>
      <div className={s.categories_grid}>
        <CategoriesList />
      </div>
    </div>
  );
}
