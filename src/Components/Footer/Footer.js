import React from "react";
import "./Footer.css";
import "../media.css";
import TelegramIcon from "@mui/icons-material/Telegram";

const Footer = () => (
  <footer className="footer__frame">
    <div className="footer__frame-copy">© Makers Inc. 2022</div>
    <div className="footer__frame-socials">
      <a
        href="https://vk.com/"
        className="icon-vk is-animated"
        target="_blank"
        rel="noopener noreferrer"
      />
      <a
        href="https://t.me/Carsherinng_chat_bot"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TelegramIcon />
      </a>
      <a
        href="https://www.facebook.com/"
        className="icon-facebook is-animated"
        target="_blank"
        rel="noopener noreferrer"
      />
    </div>
  </footer>
);

export default Footer;
