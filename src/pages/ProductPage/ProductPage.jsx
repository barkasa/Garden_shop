import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../requests/requests";
import s from "./ProductPage.module.css";

export default function ProductPage() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const productState = useSelector((store) => store.product);
  const { product, loading, error } = productState;

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [productId, dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
}
