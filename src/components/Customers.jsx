import React from "react";
import CustomerImage from "../reuse/CustomerImage";
import CustImage from "../assets/Rectangle 9.1.png";
import Paragraph from "../reuse/Paragraph";
import Quotes from "../assets/“.png";
import nextArrow from "../assets/Next Arrow.png";
import PrevArrow from "../assets/Prev Arrow.png";

export default function Customers() {
  return (
    <div className="customer_section">
      <h2>
        What are our customers <br /> saying
      </h2>
      <div className="customer_container">
        <div>
          <CustomerImage
            Cust={CustImage}
            CustStyle="cust_style"
            cust_image="cust_image"
          />
        </div>
        <div className="customer_texts">
          <div className="customer_images">
            <img src={Quotes} alt="" className="quotes" />
            <div className="arrows">
              <img src={PrevArrow} alt="" /> <img src={nextArrow} alt="" />
            </div>
          </div>
          <Paragraph text="The platform is really convenient to reach out to companies & I have managed to secure 2 interviews already! I can also track my application status instead of wondering whether the company has seen or shortlisted me" />
          <h4>Irma Black</h4>
          <p className="tex">HR Manager at MasterCard</p>
        </div>
      </div>
    </div>
  );
}
