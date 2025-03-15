import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav style={navStyle}>
      <h2 style={{ margin: 0, marginRight: "50px" }}>
        <Link to="/" style={linkStyle} onMouseEnter={(e) => e.target.style.color = hoverStyle.color} onMouseLeave={(e) => e.target.style.color = linkStyle.color}>
          Personal Blog
        </Link>
      </h2>
      <div style={{ display: "flex", gap: "25px" }}>
        <Link to="/" style={linkStyle} onMouseEnter={(e) => e.target.style.color = hoverStyle.color} onMouseLeave={(e) => e.target.style.color = linkStyle.color}>
          Home
        </Link>
        <Link to="/about" style={linkStyle} onMouseEnter={(e) => e.target.style.color = hoverStyle.color} onMouseLeave={(e) => e.target.style.color = linkStyle.color}>
          About
        </Link>
      </div>
    </nav>
  );
};

const navStyle = {
  padding: "15px",
  backgroundColor: "#0d0d0d",
  boxShadow: "0px 4px 10px rgba(255, 20, 147, 0.7)", // Neon Pink Glow
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const linkStyle = {
  textDecoration: "none",
  color: "#00FFFF", // Neon Cyan
  fontSize: "18px",
  fontWeight: "500",
  padding: "5px 10px",
  transition: "color 0.3s ease, text-shadow 0.3s ease",
  textShadow: "0 0 5px #00FFFF, 0 0 10px #00FFFF", // Neon Glow
};

const hoverStyle = {
  color: "#FF1493", // Neon Pink on Hover
  textShadow: "0 0 10px #FF1493, 0 0 20px #FF1493", // Brighter Glow
};

export default NavigationBar;
