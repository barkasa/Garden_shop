import React from "react";
import s from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { FiPlus } from "react-icons/fi";
import { BiMinus } from "react-icons/bi";
import {
  decrementCountAction,
  incrementCountAction,
  removeFromCartAction,
} from "../../store/reducers/cartReducer";

export default function CartItem({
  id,
  title,
  image,
  count,
  discont_price,
  price,
}) {
  const imageUrl = "http://localhost:3333/" + image;
  const dispatch = useDispatch();

  const incrOnclick = () => {
    dispatch(incrementCountAction(id));
  };
  const decrOnclick = () => {
    dispatch(decrementCountAction(id));
  };
  const removeOnclick = () => {
    dispatch(removeFromCartAction(id));
  };

  return (
    <div className={s.cartItem_wrapper}>
      <img src={imageUrl} alt={title} className={s.product_image} />

      <div className={s.counter_wrapper}>
        <p className={s.cartItem_title}>{title}</p>
        <div className={s.counter_box}>
          <BiMinus className={s.minus} onClick={decrOnclick} />

          <p className={s.counter}>{count}</p>

          <FiPlus className={s.plus} onClick={incrOnclick} />
        </div>
      </div>
      <div className={s.priceBlock_wrapper}>
        <RxCross2 className={s.closeBtn} onClick={removeOnclick} />
        <div className={s.price_wrapper}>
          <h2 className={s.discount}>
            {discont_price ? discont_price : price}$
          </h2>
          {discont_price && <h3 className={s.price}>{price}$</h3>}
        </div>
      </div>
    </div>
  );
}
