import React from "react";
import "./LogoSlider.css";
import { Icon } from "@iconify/react";

const logos = [
  "logos:google",
  "https://logo.clearbit.com/eleks.com",
  "logos:microsoft",
  "logos:youtube",
  "logos:netflix",
  "logos:airbnb",
  "logos:behance",
  "logos:bitrise",
  "logos:envato",
  "logos:webflow",
  "logos:wordpress"
];

function LogoSlider() {
  return (
    <div className="silder">
      <ul className="brands">
        {logos.map((logo, idx) => (
          <li className="brand-logo" key={idx}>
            {logo.startsWith("http") ? (
              <img
                src={logo}
                alt="Company logo"
                style={{ height: "55px", width: "auto" }}
              />
            ) : (
              <Icon icon={logo} style={{ fontSize: "30px" }} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LogoSlider;
