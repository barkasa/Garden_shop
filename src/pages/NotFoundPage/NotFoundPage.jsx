import React from "react";
import s from "./NotFoundPage.module.css";
import notFoundPage from "../../images/notFoundPage.png";

export default function NotFoundPage() {
  return (
    <div>
      <div className={s.notFoundPage_section}>
        <img src={notFoundPage} alt="not_faund_page" />
      </div>
    </div>
  );
}
