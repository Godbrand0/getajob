import React from "react";
import Paragraph from "../reuse/Paragraph";
import maskBlack from "../assets/Mask black.png";
import mask from "../assets/Mask orange.png";
import maskLady from "../assets/Mask lady.png";
import Check from "../icons/Check";
import Image from "../reuse/Image";
import "../App.css";

export default function Work() {
  return (
    <div className="work">
      <div className="image_container">
        <div className="vertical_image">
          <Image
            source={maskLady}
            content="Product Analyst"
            place="@Paystack"
          />
          <Image source={maskBlack} content="HR Manager" place="@Paystack" />
        </div>

        <Image source={mask} content="Securities Trader" place="@Mckensie" />
      </div>
      <div className="work_details">
        <h3>How it works</h3>
        <Paragraph text="Getajob helps you find the right job easily. Getajob helps you find the right job easily. Getajob helps you find the right job easily." />
        <div className="work_detail">
          <h4>
            <Check /> Search Jobs
          </h4>
          <Paragraph text="We have jobs in the most popular industries and with top companies. Plus, you can create alerts so you never miss a job opportunity." />
        </div>
        <div className="work_detail">
          <h4>
            <Check /> Create a Profile and Get Noticed
          </h4>
          <Paragraph text="Create a profile to showcase your skills and experience so recruiters can find you. Upload your CV so you can apply for jobs quickly and easily." />
        </div>
        <div className="work_detail">
          <h4>
            <Check /> Apply for jobs
          </h4>
          <Paragraph text="Find the training you need to improve your skills, or visit our Career Center for tips and advice to build your career." />
        </div>
      </div>
    </div>
  );
}
