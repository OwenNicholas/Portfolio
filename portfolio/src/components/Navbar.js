import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const linkStyle = {
    color: "black",
    textDecoration: "none",
    padding: "10px",
  };

  const hoverStyle = {
    color: "white",
    background: "#cecece",
  };

  return (
    <nav
    style={{
      background: "rgb(239, 249, 253)",
      height: "60px",
      display: "flex",
      alignItems: "center",
      padding: "0 20px",
      overflow: "hidden",
    }}
  >
      <img
        src="/assets/portfolio_Logo.png"
        alt="Portfolio Logo"
        style={{
          height: "100%", // Make the logo fit the height of the navbar
          maxHeight: "50px", // Set a maximum size for the logo
          marginRight: "680px", // Space between the logo and the links
        }}
      />
      <Link
        to="/"
        style={linkStyle}
        onMouseEnter={(e) => {
          e.target.style.color = hoverStyle.color;
          e.target.style.background = hoverStyle.background;
        }}
        onMouseLeave={(e) => {
          e.target.style.color = linkStyle.color;
          e.target.style.background = "transparent";
        }}
      >

        Home
      </Link>
      <Link
        to="/education"
        style={linkStyle}
        onMouseEnter={(e) => {
          e.target.style.color = hoverStyle.color;
          e.target.style.background = hoverStyle.background;
        }}
        onMouseLeave={(e) => {
          e.target.style.color = linkStyle.color;
          e.target.style.background = "transparent";
        }}
      >
        Education
      </Link>
      <Link
        to="/experience"
        style={linkStyle}
        onMouseEnter={(e) => {
          e.target.style.color = hoverStyle.color;
          e.target.style.background = hoverStyle.background;
        }}
        onMouseLeave={(e) => {
          e.target.style.color = linkStyle.color;
          e.target.style.background = "transparent";
        }}
      >
        Experience
      </Link>
      <Link
        to="/contactme"
        style={linkStyle}
        onMouseEnter={(e) => {
          e.target.style.color = hoverStyle.color;
          e.target.style.background = hoverStyle.background;
        }}
        onMouseLeave={(e) => {
          e.target.style.color = linkStyle.color;
          e.target.style.background = "transparent";
        }}
      >
        Contact Me
      </Link>
    </nav>
  );
};

export default Navbar;