import React from "react";
import Oil from "../icons/Oil";
import Gas from "../icons/Gas";
import Analyst from "../icons/Analyst";
import Account from "../icons/Account";
import Laptop from "../icons/Laptop";
import Security from "../icons/Security";
import Health from "../icons/Health";
import Accounting from "../icons/Accounting";
import "../App.css";

export default function Categories() {
  const categories = [
    {
      id: 0,
      company: "Oil and Gas",
      number: "(10 new jobs)",
      logo: Oil,
    },
    {
      id: 1,
      company: "Healthcare",
      number: "(10 new jobs)",
      logo: Health,
    },
    {
      id: 2,
      company: "Education",
      number: "(10 new jobs)",
      logo: Analyst,
    },
    {
      id: 3,
      company: "Accounting",
      number: "(10 new jobs)",
      logo: Accounting,
    },
    {
      id: 4,
      company: "Design, Art and Multimedia",
      number: "(10 new jobs)",
      logo: Gas,
    },
    {
      id: 5,
      company: "Technology",
      number: "(10 new jobs)",
      logo: Laptop,
    },
    {
      id: 6,
      company: "Security",
      number: "(10 new jobs)",
      logo: Security,
    },
    {
      id: 7,
      company: "Data Analyst",
      number: "(10 new jobs)",
      logo: Account,
    },
  ];
  return (
    <div className="categories">
      <h3>Popular Categories</h3>
      <div className="category">
        {categories.map((category) => (
          <div className="sector">
            <div className="logo">
              <category.logo />
            </div>
            <p className="position">{category.company}</p>
            <p className="number">{category.number}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
