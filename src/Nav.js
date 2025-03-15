import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav style={navStyle}>
      <h2 style={logoStyle}>
        <Link to="/" style={linkStyle} className="nav-link">
          Personal Blog
        </Link>
      </h2>
      <div style={navLinksStyle}>
        <Link to="/" style={linkStyle} className="nav-link">
          Home
        </Link>
        <Link to="/about" style={linkStyle} className="nav-link">
          About
        </Link>
      </div>
    </nav>
  );
};

// ✅ Navigation Bar Styling
const navStyle = {
  position: "fixed", // ✅ Keeps it at the top
  top: 0,
  left: 0,
  width: "100%",
  padding: "15px",
  backgroundColor: "#0d0d0d",
  boxShadow: "0px 4px 15px rgba(255, 20, 147, 0.8)", // Stronger Neon Pink Glow
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000, // ✅ Ensures it's always above other elements
};

// ✅ Logo Styling
const logoStyle = {
  margin: 0,
  marginRight: "50px",
  fontSize: "22px",
  fontWeight: "bold",
};

// ✅ Links Container Styling
const navLinksStyle = {
  display: "flex",
  gap: "25px",
};

// ✅ Link Styling
const linkStyle = {
  textDecoration: "none",
  color: "#00FFFF", // Neon Cyan
  fontSize: "18px",
  fontWeight: "600",
  padding: "8px 15px",
  transition: "all 0.3s ease-in-out",
  textShadow: "0 0 5px #00FFFF, 0 0 10px #00FFFF", // Neon Glow
};

export default NavigationBar;
