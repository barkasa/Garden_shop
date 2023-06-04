import React from "react";
import s from "./Footer.module.css";
import { IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5";
import { Element, Link } from "react-scroll";
import Map from "../Map/Map";

export default function Footer() {
  return (
    <div className={s.footer_wrapper}>
      <div className={s.contacts_wrapper}>
        <div className={s.contacts}>
          <p className={s.contact_title}>Contact</p>
          <p className={s.contact_phone}>+49 999 999 99 99</p>

          <div className={s.contact_logo}>
            <div
              className={`${s.contactItem_logo} ${s.first_contactItem_logo}`}
            >
              <a
                href="https://www.instagram.com/your_username"
                className={s.social_link}
              >
                <IoLogoInstagram className={s.social_icon} />
              </a>
              <p>Instagram</p>
            </div>
            <div className={s.contactItem_logo}>
              <a
                href="https://wa.me/your_phone_number"
                className={s.social_link}
              >
                <IoLogoWhatsapp className={s.social_icon} />
              </a>
              <p>WhatsApp</p>
            </div>
          </div>
        </div>
        <div className={s.adress_wrapper}>
          <p className={s.adress_title}>Address</p>
          <a
            className={s.adress_link}
            href="https://www.google.com/search?q=telranDE"
          >
            <p className={s.adress_text}>
              Linkstraße 2, 8 OG, 10785, Berlin, Deutschland
            </p>
          </a>
          <p className={s.working_hours_title}>Working Hours:</p>
          <p className={s.working_hours_text}>24 hours a day</p>
        </div>
      </div>
      <Element name="map">
        <div className={s.map_wrapper}>
          <Map />
        </div>
      </Element>
    </div>
  );
}
