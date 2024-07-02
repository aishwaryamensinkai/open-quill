import React from "react";
import "./footer.scss";
import bg from "../../assets/footer-bg.jpg";
import ScrollToTop from "./ScrollToTop";

const Footer = () => {
  return (
    <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
      <div className="footer__content container">
        <div className="footer__content__logo">
          <div className="logo">
            <ScrollToTop />
          </div>
        </div>
        <div className="footer__content__menus">
          <div className="footer__content__menu">
            <a href="https://developer.themoviedb.org/docs/getting-started">
              More about API
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
