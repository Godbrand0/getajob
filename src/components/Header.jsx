import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import Logo from "../icons/Logo";

export default function Header() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div>
      <header>
        <div className="header">
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
          <FontAwesomeIcon
            icon={faBars}
            className="icon_1"
            onClick={showSidebar}
          />
        </div>
        <div className={sidebar ? "side_menu active" : "side_menu"}>
          <FontAwesomeIcon
            icon={faXmark}
            className="icon_2"
            onClick={showSidebar}
          />
          <p className="side_text">Companies</p>
          <p className="side_text">Candidates</p>
          <p className="side_text">Assessment</p>
          <p className="side_text">Post a job</p>
          <p className="side_text">Career Advice</p>
        </div>
      </header>
    </div>
  );
}
