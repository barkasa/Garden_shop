import { Route, Routes, Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import HomePage from "./pages/HomePage/HomePage";
import CartPage from "./pages/CartPage/CartPage";
import CategoriesListPage from "./pages/CategoriesListPage/CategoriesListPage";
import CategoryItemPage from "./pages/CategoryItemPage/CategoryItemPage";
import ProductsListPage from "./pages/ProductsListPage/ProductsListPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import SailPage from "./pages/SailPage/SailPage";
import { useEffect } from "react";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <div className="wrapper_app">
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/categoriesList" element={<CategoriesListPage />} />

        <Route path="/productsList" element={<ProductsListPage />} />

        <Route
          path="/categoryItem/:categoryId"
          element={<CategoryItemPage />}
        />
        <Route
          path="/productsList/:categoryId"
          element={<ProductsListPage />}
        />

        <Route path="/productsSailList" element={<SailPage />} />

        <Route path="/products/:productId" element={<ProductPage />} />

        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Outlet />
      <Footer />
    </div>
  );
}
export default App;
