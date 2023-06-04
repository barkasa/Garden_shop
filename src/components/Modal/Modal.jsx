import React from "react";
import PropTypes from "prop-types";
import s from "./Modal.module.css";

import { TfiClose } from "react-icons/tfi";
import { NavLink } from "react-router-dom";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div className={s.modal}>
      <div className={s.modal_content}>
        <div className={s.modal_close} onClick={onClose}>
          <TfiClose className={s.close_icon} />
        </div>
        <div className={s.modal_links}>
          <NavLink
            className={s.nav_link}
            exact={true}
            to="/"
            activeClassName={s.active}
            onClick={handleLinkClick}
          >
            Main Page
          </NavLink>
          <NavLink
            className={s.nav_link}
            to="/productsList"
            activeClassName={s.active}
            onClick={handleLinkClick}
          >
            All products
          </NavLink>
          <NavLink
            className={s.nav_link}
            to="/productsSailList"
            activeClassName={s.active}
            onClick={handleLinkClick}
          >
            All sales
          </NavLink>
          <NavLink className={s.nav_link} to="/cart" onClick={handleLinkClick}>
            Cart
          </NavLink>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
