import React from "react";
import "./FooterMenu.css";

const FooterMenu = () => {
  return (
    <div className="footer-menu__wrapper">
      <div className="footer-menu-items__wrapper">
        <p>FOLLOW US</p>
        <div className="footer-menu-items__container">
          <a
            href="https://www.instagram.com/finesseusstudios/"
            className="footer-menu-items"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/finesseusstudios"
            className="footer-menu-items"
          >
            Facebook
          </a>
          <a
            href="https://www.twitter.com/finesse__us"
            className="footer-menu-items"
          >
            Twitter
          </a>
          <a
            href="https://www.tiktok.com/@finesseusstudios"
            className="footer-menu-items"
          >
            TikTok
          </a>
          <a
            href="https://www.snapchat.com/add/shopfinesse"
            className="footer-menu-items"
          >
            Snapchat
          </a>
          <a
            href="https://www.youtube.com/channel/UCkMl6gRcjzGoH4m8oH9ZGMQ"
            className="footer-menu-items"
          >
            Youtube
          </a>
        </div>
      </div>
      <div className="footer-menu-items__wrapper">
        <p>CONTACT US</p>
        <div className="footer-menu-items__container">
          <a href="mailto:rewind@finesse.us" className="footer-menu-items">
            rewind@finesse.us
          </a>
          <a
            href="https://finesse.loopreturns.com/"
            className="footer-menu-items"
          >
            Exchanges, Refunds &amp; Returns
          </a>
          <a href="/pages/shipping-returns" className="footer-menu-items">
            Shipping &amp; Returns
          </a>
          <a href="/pages/terms" className="footer-menu-items">
            Terms &amp; Conditions
          </a>
          <a href="/pages/ccpa-opt-out" className="footer-menu-items">
            Cali Privacy Rights
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterMenu;
