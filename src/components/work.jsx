import React from "react";
import Paragraph from "../reuse/Paragraph";
import maskBlack from "../assets/Mask black.png";
import mask from "../assets/Mask orange.png";
import maskLady from "../assets/Mask lady.png";

export default function work() {
  return (
    <div>
      <div>
        <div>
          <Image
            source={maskLady}
            content="Product Analyst"
            place="@Paystack"
          />
          <Image source={maskBlack} content="HR Manager" place="@Paystack" />
        </div>

        <Image source={mask} content="Securities Trader" place="@Mckensie" />
      </div>
      <div>
        <h3>How it works</h3>
        <Paragraph text="Getajob helps you find the right job easily. Getajob helps you find the right job easily. Getajob helps you find the right job easily." />
        <div>
          <h4>Search Jobs</h4>
          <Paragraph text="We have jobs in the most popular industries and with top companies. Plus, you can create alerts so you never miss a job opportunity." />
        </div>
      </div>
    </div>
  );
}
