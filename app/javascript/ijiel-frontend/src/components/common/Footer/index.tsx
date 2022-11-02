import React from "react";

// Logos
import ebcLogo from "@images/ebc-logo.png";
import heinonlineLogo from "@images/heinonline-logo.png";
import sccLogo from "@images/scc-logo.png";
import manupatraLogo from "@images/manupatra-logo.png";

// Website Footer 
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* SECTION: Our Partners */}
        <div className="our-partners">
          <div className="title">Our Partners</div>
          <div className="partners">
            <img src={ebcLogo} alt="ebc-logo" className="partner-logo" />
            <img src={heinonlineLogo} alt="heinonline-logo" className="partner-logo" />
            <img src={sccLogo} alt="scc-logo" className="partner-logo" />
            <img src={manupatraLogo} alt="manupatra-logo" className="partner-logo" />
          </div>
        </div>

        {/* SECTION: Content/Connect */}
        <div className="footer-content">
          <div className="ijiel-description">
            The Indian Journal Of International Economic Law is a peer-reviewed student-edited journal published annually
            by the National Law School of India University (NLSIU), Bangalore, under the patronage of the
            Indian government-sponsored chair on WTO Law. The mandate of the journal encompasses all aspects of
            international economic law, especially from a developing country's economy perspective.
          </div>
          <div className="footer-information">
            <div className="rights-reserved">
              Copyright © {new Date().getFullYear()} Indian Journal of International Economic Law - All Rights Reserved.
            </div>
            <div className="connect">
              <div className="title">Connect with us</div>
              <div className="links">
                <a href="https://www.linkedin.com/company/ijiel/" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-linkedin fa-2xl"></i>
                </a>
                <a href="https://twitter.com/ijiel_nls" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-square-twitter fa-2xl"></i>
                </a>
                <a href="https://www.facebook.com/IndJIntEcL/" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-facebook fa-2xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}


export default Footer;
