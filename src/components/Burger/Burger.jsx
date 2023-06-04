import React from "react";
import PropTypes from "prop-types";
import s from "./Burger.module.css";
import { RxHamburgerMenu } from "react-icons/rx";

const Burger = ({ onClick }) => {
  return (
    <div className={s.burger_menu} onClick={onClick}>
      <RxHamburgerMenu className={s.hamburger_icon} size={42} />
    </div>
  );
};

Burger.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Burger;
