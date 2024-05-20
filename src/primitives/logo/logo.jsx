import React from "react";
import { Link } from "react-router-dom";
import logoImg from "/src/assets/farmer_logo.svg";
import "./style.css";

function Logo({
  logoText,
  logoTextColor,
  logoTextBgColor,
  width,
  height,
  bgColor,
  imgBgColor,
  imgWidth,
  imgHeight,
}) {
  return (
    <div className="logo" style={{ width, height, background: bgColor }}>
      <Link to="/" className="logo__link">
        <img
          src={logoImg}
          alt={logoText}
          style={{
            backgroundColor: imgBgColor ? imgBgColor : "transparent",
            width: imgWidth,
            height: imgHeight,
          }}
        />
        <span
          className="logo__text"
          style={{
            color: logoTextColor ? logoTextColor : "black",
            backgroundColor: logoTextBgColor ? logoTextBgColor : "#d0d6db",
          }}
        >
          {logoText}
        </span>
      </Link>
    </div>
  );
}

export default Logo;
