import React from "react";
import "../App.css";
import HeaderImg from "../assets/getajob_logo-removebg-preview.png";

export default function Header() {
  return (
    <div>
      <header className="header">
        <div>
          <img src={HeaderImg} alt="" />
        </div>
        <nav>
          <p>Companies</p>
          <p>Candidates</p>
          <p>Assessment</p>
          <p>Post a job</p>
          <p>Career Advice</p>
        </nav>
        <div className="actions">
          <div>Sign Up</div>
          <div className="login">Log In</div>
        </div>
      </header>
    </div>
  );
}
