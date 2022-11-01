import React from "react";
import { Link } from "react-router-dom";

// Website Header 
const Header = () => {
  return (
    <footer className="header">
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

        </div>

      </div>
    </footer>
  );
}


export default Header;
