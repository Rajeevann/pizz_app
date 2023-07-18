import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Instagram />
        <Facebook />
        <LinkedIn />
      </div>
      <p>&copy: 2020 pizzaapp.com</p>
    </div>
  );
};

export default Footer;
