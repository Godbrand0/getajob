import React from "react";
import "../App.css";
import Logo from "../icons/Logo";

export default function Header() {
  return (
    <div>
      <header className="header">
        <div>
          <Logo />
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
