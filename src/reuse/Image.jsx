import React from "react";

export default function Image({ source, content, place }) {
  return (
    <div className="images">
      <img src={source} alt="" />
      <p>
        {content} <span className="place">{place}</span>
      </p>
    </div>
  );
}
