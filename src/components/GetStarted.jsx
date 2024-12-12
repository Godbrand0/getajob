import React from "react";
import CoverRectangle from "../assets/Mask rectangle.png";

export default function GetStarted() {
  return (
    <div className="get_started">
      <img src={CoverRectangle} alt="" />
      <div className="get_text">
        <h3>Get a Job you actually like</h3>
        <p>Create an account and start applying</p>
        <button>Get started</button>
      </div>
    </div>
  );
}
