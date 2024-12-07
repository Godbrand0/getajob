import React from "react";
import "./paragraph.css";
export default function Paragraph({ styleClass, text }) {
  return <p className={styleClass}> {text}</p>;
}
