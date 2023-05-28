import React from "react";
import s from "./Header.module.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

import { HiOutlineShoppingBag } from "react-icons/hi";
import Button from "../Button/Button";

export default function Header() {
  return (
    <div className={s.header_wrapper}>
      <nav className={s.nav_wrapper}>
        <div className={s.logo_button_wrapper}>
          <Link className={s.logo_link} to="/">
            <img src={logo} alt="logo" />
          </Link>
          <Link to="/categoriesList">
            <Button className="small_btn" label="Catalog" />
            {/* Маленькая кнопка в Header */}
          </Link>
        </div>

        <div className={s.nav_item_wrapper}>
          <Link className={s.nav_link} to="/">
            Main Page
          </Link>
          <Link className={s.nav_link} to="/productsList">
            All products
          </Link>
          <Link className={s.nav_link} to="/productsSailList">
            All sales
          </Link>
          <Link className={s.cart_link} to="/cart">
            <HiOutlineShoppingBag className={s.cart_icon} />
          </Link>
        </div>
      </nav>
    </div>
  );
}
