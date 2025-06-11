import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/media/logo.png";

const footerLinks = {
  Candidates: [
    { label: "Overview", path: "/candidate/overview" },
    { label: "Startup Jobs" },
    { label: "Web3 Jobs" },
    { label: "Featured" },
    { label: "Startup Hiring Data" },
    { label: "Tech Startups" },
    { label: "Remote" },
  ],
  Recruiters: [
    { label: "Overview", path: "/recruiter/overview" },
    { label: "Recruit Pro" },
    { label: "Curated" },
    { label: "RecruiterCloud" },
    { label: "Hire Developers" },
    { label: "Pricing" },
  ],
  Company: [
    { label: "About", path: "/about" },
    { label: "AngelList Venture" },
    { label: "Blog" },
    { label: "Terms & Risks" },
    { label: "Privacy & Cookies" },
  ],
};

function Footer() {
  return (
    <div className="md:flex justify-between py-6 border-t border-gray-300">
      <div className="md:w-2/5 ml-6 md:ml-20 flex flex-col gap-2 py-4 md:py-0">
        <img src={logo} alt="Logo" className="w-2/5 md:w-2/6" />
        <div className="flex gap-3 text-2xl ml-3.5 text-gray-800">
          <i className="fa-brands fa-twitter cursor-pointer hover:text-green-500" />
          <i className="fa-brands fa-instagram cursor-pointer hover:text-green-500" />
          <i className="fa-brands fa-linkedin-in cursor-pointer hover:text-green-500" />
        </div>
      </div>
      <div className="md:flex justify-between md:w-3/5 pr-28">
        {Object.entries(footerLinks).map(([section, links]) => (
          <div key={section} className="flex flex-col gap-2.5 py-5 md:py-0">
            <h3 className="font-semibold md:text-base text-xl">{section}</h3>
            {links.map(({ label, path }) =>
              path ? (
                <Link
                  key={label}
                  to={path}
                  className="cursor-pointer text-lg md:text-base hover:underline hover:text-green-600"
                >
                  {label}
                </Link>
              ) : (
                <p
                  key={label}
                  className="cursor-pointer text-lg md:text-base hover:underline hover:text-green-600"
                >
                  {label}
                </p>
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Footer;
