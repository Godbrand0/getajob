import React from "react";
import Access from "../assets/Group (1).png";
import Paystack from "../assets/image 2.png";
import Flutter from "../assets/image (2).png";
import Google from "../assets/image (1).png";
import "../App.css";

export default function Recommended() {
  const jobs = [
    {
      id: 0,
      time: "Full-time",
      company: "Google",
      position: "QA Engineer",
      location: "Lagos, Nigeria",
      status: "Applied",
      logo: Google,
    },
    {
      id: 1,
      time: "Part-time",
      company: "Flutterwave",
      position: "Frontend Developer",
      location: "Remote",
      status: "Interested",
      logo: Flutter,
    },
    {
      id: 2,
      time: "Full-time",
      company: "Paystack",
      position: "Software Engineer",
      location: "Abuja, Nigeria",
      status: "Applied",
      logo: Paystack,
    },
    {
      id: 3,
      time: "Contract",
      company: "Paystack",
      position: "UI/UX Designer",
      location: "Akure, Ondo",
      status: "Not Applied",
      logo: Access,
    },
  ];
  return (
    <div className="recommend">
      <h3>Recommended Jobs</h3>
      <div className="job-search">
        {jobs.map((job) => (
          <div className="job">
            <p className="time">{job.time}</p>
            <img src={job.logo} alt="" className="image" />
            <p className="position">{job.position}</p>
            <p className="company">{job.company}</p>
            <div className="location-status">
              <p className="location">{job.location}</p>
              <p className="status">{job.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
