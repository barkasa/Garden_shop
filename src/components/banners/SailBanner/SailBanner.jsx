import React, { useState, useEffect } from "react";
import s from "./SailBanner.module.css";
import banerImage from "../../../images/banerImage_1.png";
import banerImage2 from "../../../images/banerImage_22.png";
import banerImage3 from "../../../images/banerImage_3.png";

import { Link } from "react-scroll";

import Button from "../../Button/Button";

// Определение изображений для баннеров
const images = [banerImage, banerImage2, banerImage3];

// Определение данных для каждого баннера
const banners = [
  {
    image: banerImage,
    backgroundColor: "#a1e2eb",
    textColor: "#ffffff",
    buttonColor: "blue",
    padding: "110px 0 20px 47.5px",
  },
  {
    image: banerImage2,
    backgroundColor: "#f5a7b8",
    textColor: "#ffffff",
    buttonColor: "red",
    padding: "110px 47.5px 20px 47.5px",
  },
  {
    image: banerImage3,
    backgroundColor: "#c7d2d8",
    textColor: "#000000",
    buttonColor: "green",
    padding: "110px 47.5px 20px 47.5px",
  },
];

export default function SailBanner() {
  // Использование состояния для отслеживания текущего индекса баннера
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    // Использование useEffect для установки интервала автоматического переключения баннеров
    const interval = setInterval(() => {
      setCurrentBannerIndex((prevIndex) =>
        prevIndex === banners.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    // Очистка интервала при размонтировании компонента
    return () => clearInterval(interval);
  }, []);

  // Получение текущего баннера на основе текущего индекса
  const currentBanner = banners[currentBannerIndex];

  return (
    <div
      className={s.banner_wrapper}
      style={{
        backgroundColor: currentBanner.backgroundColor,
        padding: currentBanner.padding,
      }}
    >
      <div className={s.sail_banner}>
        <div>
          {/* Отображение заголовков и кнопки */}
          <h1
            className={s.sale_heading}
            style={{ color: currentBanner.textColor }}
          >
            Sale
          </h1>
          <h2
            className={s.season_heading}
            style={{ color: currentBanner.textColor }}
          >
            New season
          </h2>
          <Link to="sail" smooth={true} duration={500}>
            <Button className="sale_btn" label="Sale" />
          </Link>
        </div>
      </div>
      <div className={s.baner_image}>
        {/* Отображение изображения текущего баннера */}
        <img
          src={images[currentBannerIndex]}
          alt="banerImage"
          className={s.baner_image_img}
        />
      </div>
    </div>
  );
}
