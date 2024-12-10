import React from "react";
import "../reuse/CustomerImage.css";
export default function CustomerImage({ Cust, CustStyle, cust_image }) {
  return (
    <div className={CustStyle}>
      <img src={Cust} alt="" className={cust_image} />
    </div>
  );
}
