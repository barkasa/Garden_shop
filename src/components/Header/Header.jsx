import { NavLink } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Button from "../Button/Button";
import CartCounter from "../CartCouter/CartCounter";
import logo from "../../images/logo.png";
import s from "./Header.module.css";
import React, { useCallback, useEffect, useState } from "react";
import Burger from "../Burger/Burger";
import Modal from "../Modal/Modal";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 810);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseModal = () => {
    setIsMenuOpen(false);
  };

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth <= 810);
    if (window.innerWidth > 810) {
      handleCloseModal();
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

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

        {isMobile ? (
          <Burger onClick={handleMenuToggle} />
        ) : (
          <div className={`${s.nav_item_wrapper} ${s.active}`}>
            <NavLink
              className={`${s.nav_link} ${s.mainPageLink}`}
              exact="true"
              to="/"
            >
              Main Page
            </NavLink>
            <NavLink className={s.nav_link} to="/productsList">
              All products
            </NavLink>
            <NavLink className={s.nav_link} to="/productsSailList">
              All sales
            </NavLink>
            <NavLink className={s.cart_link} to="/cart">
              <HiOutlineShoppingBag className={s.cart_icon} />
              <CartCounter />
            </NavLink>
          </div>
        )}
      </nav>
      <Modal isOpen={isMenuOpen} onClose={handleCloseModal} />
    </div>
  );
}
