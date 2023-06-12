import React, { useEffect } from "react";

const PageWrapper = ({ title, children }) => {
  // Формируем заголовок страницы с использованием переданного заголовка
  // или устанавливаем заголовок по умолчанию
  const pageTitle = title
    ? `Garden-shop ${String.fromCharCode(183)} ${title}`
    : "Garden-shop";

  // Изменяем заголовок документа при каждом изменении pageTitle
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return <div>{children}</div>;
};

export default PageWrapper;
