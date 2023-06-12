import React, { useState } from "react";
import s from "./CartPage.module.css";
import { Link } from "react-router-dom";
import { HiChevronRight } from "react-icons/hi";
import { RiEmotionSadLine } from "react-icons/ri";
import Button from "../../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import CartList from "../../components/CartList/CartList";
import { send_order } from "../../requests/requests";
import {
  clearCartAction,
  resetCounterAction,
} from "../../store/reducers/cartReducer";
import PageWrapper from "../../components/PageWrapper/PageWrapper";

export default function CartPage() {
  const dispatch = useDispatch();

  const cart = useSelector((store) => store.cart);
  const total_sum = cart.reduce(
    (accum, elem) =>
      accum +
      elem.count * (elem.discont_price ? elem.discont_price : elem.price),
    0
  );

  const submit = (e) => {
    e.preventDefault();
    if (!isValidNumber) {
      return;
    }
    send_order(e.target.phone.value);
    e.target.reset();
    dispatch(resetCounterAction());
    dispatch(clearCartAction());
    localStorage.setItem("discountUsed", JSON.stringify(true));
  };

  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValidNumber, setIsValidNumber] = useState(true);

  const handlePhoneNumberChange = (event) => {
    const inputPhoneNumber = event.target.value;
    const onlyDigitsAndPlus = /^[+\d]+$/;

    if (onlyDigitsAndPlus.test(inputPhoneNumber)) {
      setIsValidNumber(true);
      setPhoneNumber(inputPhoneNumber);
    } else {
      setIsValidNumber(false);
      setPhoneNumber(inputPhoneNumber);
    }
  };

  const isCartEmpty = cart.length === 0;

  const hasCoupon = true; // Здесь нужно определить, получен ли купон
  const discountApplied =
    (hasCoupon &&
      JSON.parse(localStorage.getItem("discountApplied")) &&
      !JSON.parse(localStorage.getItem("discountUsed"))) ||
    false;

  const discountedTotal = discountApplied ? total_sum * 0.95 : total_sum;

  return (
    <PageWrapper title="Cart">
      <div className={s.cart_wrapper}>
        <h2 className={s.cart_title}>Shopping cart</h2>

        <div className={s.back_wrapper}>
          <Link to="/productsList" className={s.link}>
            <p>Back to the store</p>
          </Link>
          <HiChevronRight className={s.back_icon} />
        </div>

        <div className={s.cartList_wrapper}>
          {cart.length !== 0 ? (
            <CartList />
          ) : (
            <p className={s.message}>
              Cart Is Empty <RiEmotionSadLine className={s.smile_icon} />
            </p>
          )}
          <div
            className={`${s.orderBox_wrapper} ${isCartEmpty ? s.disabled : ""}`}
          >
            <div className={s.orderDetail_wrapper}>
              <h2
                className={`${s.orderDetail_title} ${
                  isCartEmpty ? s.disabled : ""
                }`}
              >
                Order details
              </h2>
              <div className={s.totall_wrapper}>
                <p className={s.tottal_text}>Total</p>
                <p
                  className={`${s.tottal_amount} ${
                    isCartEmpty ? s.disabled : ""
                  }`}
                >{`${discountedTotal.toFixed(2)}$`}</p>
              </div>
              {!isCartEmpty && (
                <form
                  onSubmit={submit}
                  className={isCartEmpty ? s.disabled : ""}
                >
                  <input
                    className={`${s.phone_input} ${
                      isValidNumber ? "" : s.error
                    }`}
                    type="text"
                    placeholder="+49"
                    name="phone"
                    value={phoneNumber}
                    required
                    onChange={handlePhoneNumberChange}
                  />
                  {!isValidNumber && (
                    <p className={s.error_message}>Enter valid number!</p>
                  )}
                  <Button className="order_btn" label="Order" />
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
