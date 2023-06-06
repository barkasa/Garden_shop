// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";

// import s from "./ProductsList.module.css";

// import { fetchProductList } from "../../requests/requests";
// import ProductItem from "../ProductItem/ProductItem";

// export default function ProductsList({ count }) {
//   const dispatch = useDispatch();

//   const products = useSelector((state) => state.products);

//   //

//   //

//   useEffect(() => {
//     dispatch(fetchProductList());
//   }, [dispatch]);

//   let targetProducts;
//   if (count) {
//     targetProducts = products
//       .filter((product) => product.discont_price)
//       .sort(() => Math.random() - 0.5)
//       .slice(0, count);
//   } else {
//     targetProducts = products;
//   }

//   return (
//     <div className={s.card_container}>
//       {targetProducts
//         .filter((product) => product.rangeVisible)
//         .map((product) => (
//           <div className={s.card} key={product.id}>
//             <ProductItem {...product} />
//           </div>
//         ))}
//     </div>
//   );
// }
import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import s from "./ProductsList.module.css";

import { fetchProductList } from "../../requests/requests";
import ProductItem from "../ProductItem/ProductItem";
import { sortByDefaultAction } from "../../store/reducers/productsReducer";

export default function ProductsList({ products }) {
  products = products.filter(elem => elem.showBySale && elem.rangeVisible)
  const dispatch = useDispatch();

  console.log(products);

  // useEffect(() => {
  //   dispatch(sortByDefaultAction());
  //   dispatch(fetchProductList());
  // }, [dispatch]);

  return (
    <div className={s.card_container}>
      {/* <button onClick={handleFilterBySale}>
        {filterBySale ? "Disable Sale Filter" : "Enable Sale Filter"}
      </button> */}
      {products
        .filter((product) => product.rangeVisible)
        .map((product) => (
          <div className={s.card} key={product.id}>
            <ProductItem {...product} />
          </div>
        ))}
    </div>
  );
}
