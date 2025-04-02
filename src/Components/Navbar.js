import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">SkillShare Hub</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/upload">Upload</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;
