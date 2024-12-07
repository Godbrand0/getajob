import React from "react";
import "../App.css";
import Paragraph from "../reuse/Paragraph";
import "../reuse/paragraph.css";
import SearchIcon from "../icons/SearchIcon";
import payStack from "../assets/paystack-removebg-preview.png";
import google from "../assets/google-removebg-preview.png";
import kpmg from "../assets/kpmg-removebg-preview.png";
import bigImage from "../assets/Mask Group.png";

export default function HeroSection() {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>
          Find a <span>job</span> easily
        </h1>
        <Paragraph
          text=" With verified, up-to-date job listings directly from employer
          websites, we create a premium experience for job seekers, employers,
          and data seekers alike."
          styleClass="default-paragraph"
        />
        <div className="search-input">
          <input
            type="text"
            placeholder="Search for products,brands and categories"
          />
          <SearchIcon styleIcon="icon" />
        </div>
        <div>
          <p>Trusted by:</p>
          <div>
            <img src={payStack} alt="" />
            <img src={google} alt="" />
            <img src={kpmg} alt="" />
          </div>
        </div>
      </div>
      <div>
        <img src={bigImage} alt="" />
      </div>
    </div>
  );
}
