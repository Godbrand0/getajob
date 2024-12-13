import React from "react";
import "./Image.css";

export default function Image({ source, content, place, work_style }) {
  return (
    <div className="work_images">
      <img src={source} alt="" className={work_style} />
      <p className="text">
        {content} <span className="place">{place}</span>
      </p>
    </div>
  );
}
