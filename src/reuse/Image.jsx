import React from "react";
import "./Image.css";

export default function Image({ source, content, place }) {
  return (
    <div className="work_images">
      <img src={source} alt="" className="work_image" />
      <p className="text">
        {content} <span className="place">{place}</span>
      </p>
    </div>
  );
}
