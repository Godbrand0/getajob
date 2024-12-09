import React from "react";
import Paragraph from "../reuse/Paragraph";
import UberLogo from "../assets/Rectangle (2).png";
import ZapierLogo from "../assets/Rectangle (4).png";
import GoogleLogo from "../assets/Rectangle (1).png";
import AirtelLogo from "../assets/image 3 (1).png";
import McKinseyLogo from "../assets/Rectangle (3).png";
import AccentureLogo from "../assets/image 3 (2).png";
import BeeLogo from "../assets/image (2).png";
import NineMobileLogo from "../assets/image 3.png";
import "../App.css";

export default function Network() {
  const logos = [
    { id: 1, src: UberLogo, alt: "Uber" },
    { id: 2, src: ZapierLogo, alt: "Zapier" },
    { id: 3, src: GoogleLogo, alt: "Google" },
    { id: 4, src: AirtelLogo, alt: "Airtel" },
    { id: 5, src: McKinseyLogo, alt: "McKinsey & Company" },
    { id: 6, src: AccentureLogo, alt: "Accenture" },
    { id: 7, src: BeeLogo, alt: "Bee Logo" },
    { id: 8, src: NineMobileLogo, alt: "9Mobile" },
  ];
  return (
    <div className="network_section">
      <div className="network_text">
        <h2>Over 1000+ jobs from top companies in our network</h2>
        <Paragraph
          styleClass="p"
          text="Every day we index millions of jobs directly from employer websites. We’re committed to accurate, high-quality jobs so you won’t find old, duplicated, or spammy listings here."
        />

        <Paragraph
          styleClass="p"
          text="Organize and automate your job search while at home or on the go. We’ll deliver new, relevant jobs of interest straight to your inbox."
        />
        <a href="/learn-more" className="learn-more">
          Learn More →
        </a>
      </div>
      <div className="logos_section">
        {logos.map((logo) => (
          <div key={logo.id} className="logo-item">
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}
