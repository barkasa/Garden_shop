import React from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Button from "../Button/Button";
import CartCounter from "../CartCouter/CartCounter";
import logo from "../../images/logo.png";
import s from "./Header.module.css";

export default function Header() {
  return (
    <div className={s.header_wrapper}>
      <nav className={s.nav_wrapper}>
        <div className={s.logo_button_wrapper}>
          <NavLink className={s.logo_link} to="/">
            <img src={logo} alt="logo" />
          </NavLink>
          <NavLink to="/categoriesList">
            <Button className="small_btn" label="Catalog" />
          </NavLink>
        </div>

        <div className={s.nav_item_wrapper}>
          <NavLink
            className={`${s.nav_link} ${s.mainPageLink}`}
            exact="true"
            to="/"
            activeclassname={s.active}
          >
            Main Page
          </NavLink>
          <NavLink
            className={s.nav_link}
            to="/productsList"
            activeclassname={s.active}
          >
            All products
          </NavLink>
          <NavLink
            className={s.nav_link}
            to="/productsSailList"
            activeclassname={s.active}
          >
            All sales
          </NavLink>
          <NavLink className={s.cart_link} to="/cart">
            <HiOutlineShoppingBag
              className={`${s.cart_icon} ${s.activeCartIcon}`}
            />
            <CartCounter />
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
