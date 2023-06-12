import React from "react";
import s from "./NotFoundPage.module.css";
import notFoundPage from "../../images/notFoundPage.png";
import PageWrapper from "../../components/PageWrapper/PageWrapper";

export default function NotFoundPage() {
  return (
    <PageWrapper title="404">
      <div className={s.notFoundPage_section}>
        <img src={notFoundPage} alt="not_faund_page" />
      </div>
    </PageWrapper>
  );
}
