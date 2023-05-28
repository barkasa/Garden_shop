import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../../requests/requests";
import ProductItem from "../../components/ProductItem/ProductItem";
import { initializeUseSelector } from "react-redux/es/hooks/useSelector";

export default function CategoryItemPage({ match }) {
  const { categoryId } = match.params;
  const dispatch = useDispatch();
  const categoryState = useSelector((store) => store.category);
  const { category, loading, error } = categoryState;

  useEffect(() => {
    dispatch(fetchCategory(categoryId));
  }, [categoryId, dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!category) {
    return <div>Category not found</div>;
  }

  const products = initializeUseSelector((store) =>
    store.products.filter(
      (product) => product.categoryId === Number(categoryId)
    )
  );

  return (
    <div>
      <h2>{category.title}</h2>
      {products.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </div>
  );
}
