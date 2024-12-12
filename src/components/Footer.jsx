import React from "react";
import LogoText from "../assets/logoText.png";
import Paragraph from "../reuse/Paragraph";
import Twitter from "../assets/twitter.png";
import LinkedIn from "../assets/Linkedin Icon.png";
import Vector from "../assets/Vector.png";
import Instagram from "../assets/Groups_1.png";
import "../App.css";

export default function Footer() {
  return (
    <div className="footer_section">
      <div className="footer_1">
        <img src={LogoText} alt="" />
        <Paragraph text="Getajobng provides a full online service for anyone looking for a new job. We're not a recruitment agency, we're a job site." />
      </div>
      <div className="footer_2">
        <h3>Information</h3>
        <ul>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Terms & Condition</li>
        </ul>
      </div>
      <div className="footer_3">
        <h3>Job Seekers</h3>
        <ul>
          <li>Create Account</li>
          <li>Job List</li>
          <li>FAQ</li>
        </ul>
      </div>
      <div className="footer_4">
        <h3>Employers</h3>
        <ul>
          <li>Create Account</li>
          <li>Post a Job</li>
          <li>FAQ</li>
        </ul>
      </div>
      <div className="footer_5">
        <h3>Social Media:</h3>
        <ul>
          <li>
            <img src={Instagram} alt="" />
          </li>
          <li>
            <img src={Twitter} alt="" />
          </li>
          <li>
            <img src={Vector} alt="" />
          </li>
          <li>
            <img src={LinkedIn} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
}
