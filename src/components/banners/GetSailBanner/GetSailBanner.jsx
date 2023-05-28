import React, { useState } from "react";
import s from "./GetSailBanner.module.css";
import dwarf from "../../../images/dwarf.png";

export default function GetSailBanner() {
  const [phone, setPhone] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);
  const [formError, setFormError] = useState(false);
  const [discountReceived, setDiscountReceived] = useState(false);

  const handlePhoneChange = (e) => {
    const inputValue = e.target.value;

    if (!/^[0-9+]*$/g.test(inputValue)) {
      setFormError(true);
      return;
    }

    setFormError(false);

    const numericValue = inputValue.replace(/\D/g, "");
    setPhone(numericValue);
  };

  const handleGetDiscount = () => {
    if (!phone || phone.length < 5) {
      setFormError(true);
      return;
    }

    setFormError(false);
    console.log("Button clicked");

    // Имитация отправки запроса с задержкой в 1 секунду
    setTimeout(() => {
      console.log("Discount request processed");
      setDiscountApplied(true);
      setPhone("");
      setDiscountReceived(true); // Обновление состояния при удачном сабмите
      setTimeout(() => {
        setDiscountReceived(false); // Сброс состояния через некоторое время
      }, 3000);
    }, 1000);
  };

  return (
    <div className={s.get_sail_banner}>
      <div className={s.getSail_img}>
        <img src={dwarf} alt="dwarf" className={s.dwarf} />
      </div>
      <div className={s.oder_wrapper}>
        <h3 className={s.oder_sail}>5% off</h3>
        <h4 className={s.oder_sail_h4}>on the first order</h4>

        <input
          className={
            formError ? `${s.tel_input} ${s.tel_input_error}` : s.tel_input
          }
          type="text"
          placeholder="+49"
          value={phone}
          onChange={handlePhoneChange}
        />
        <div className={s.message_wrapper}>
          {formError && (
            <p className={s.error_message}>Please enter a valid phone number</p>
          )}
          {discountReceived && (
            <p className={s.success_message}>Discount of 5% received!</p>
          )}
        </div>
        <button
          className={
            formError
              ? `${s.get_discount_btn} ${s.get_discount_btn_error}`
              : s.get_discount_btn
          }
          onClick={handleGetDiscount}
          disabled={discountApplied}
        >
          {formError ? "Error" : "Get a discount"}
        </button>
      </div>
    </div>
  );
}
