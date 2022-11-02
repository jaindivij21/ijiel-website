import React from "react";
import { Link } from "react-router-dom";

// Assets
import ijielLogo from "@images/ijiel-logo.png";

// Website Header 
const Header = () => {
  return (
    <header className="header">
      <div className="header-container">

        {/* SECTION: Header Options */}
        <div className="header-options">
          <div className="title">
            <Link to="/">IJIEL</Link>
          </div>
          <div className="options">
            <div className="option">
              <Link to="/archives">Archives</Link>
            </div>
            <div className="option">
              <Link to="/blogs">Blogs</Link>
            </div>
            <div className="option">
              <Link to="/submissions">Submissions</Link>
            </div>
            <div className="option">
              <Link to="/about">About Us</Link>
            </div>
          </div>
        </div>

        {/* SECTION: Main Header Content */}
        <div className="header-content">
          <img src={ijielLogo} className="ijiel-logo" alt="ijiel-logo" />
          <div className="title">
            Indian Journal Of International Economic Law
          </div>
        </div>

      </div>
    </header>
  );
}


export default Header;
