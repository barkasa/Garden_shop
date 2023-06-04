//////////
import React, { useState, useEffect } from "react";
import s from "./SailBanner.module.css";
import banerImage from "../../../images/banerImage.png";
import banerImage2 from "../../../images/banerImage_2.png";
import banerImage3 from "../../../images/banerImage_3.png";

import { Link } from "react-scroll";

import Button from "../../Button/Button";
const images = [banerImage, banerImage2, banerImage3];
const banners = [
  {
    image: banerImage,
    backgroundColor: "#a1e2eb",
    textColor: "#ffffff",
    buttonColor: "blue",
  },
  {
    image: banerImage2,
    backgroundColor: "#f5a7b8",
    textColor: "#ffffff",
    buttonColor: "red",
  },
  {
    image: banerImage3,
    backgroundColor: "#c7d2d8",
    textColor: "#000000",
    buttonColor: "green",
  },
];

export default function SailBanner() {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prevIndex) =>
        prevIndex === banners.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentBanner = banners[currentBannerIndex];

  return (
    <div
      className={s.banner_wrapper}
      style={{ backgroundColor: currentBanner.backgroundColor }}
    >
      <div className={s.sail_banner}>
        <div>
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
            <Button
              className="sale_btn"
              label="Sale"
              // style={{ backgroundColor: currentBanner.buttonColor }}
            />
          </Link>
        </div>
        <div className={s.baner_image}>
          <img
            src={images[currentBannerIndex]}
            alt="banerImage"
            className={s.baner_image_img}
          />
        </div>
      </div>
    </div>
  );
}
