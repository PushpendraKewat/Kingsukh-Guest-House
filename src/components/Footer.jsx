import React from "react";
import fb from "../assets/facebook.png";
import ig from "../assets/instagram.png";
import tw from "../assets/twitter.png";
import yt from "../assets/youtube.png";

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <p>&copy; 2025 Kingsukh Guest House. All rights reserved.</p>
      <div>
        <a href="#" className="me-3"><img src={fb} width="25" alt="Facebook" /></a>
        <a href="#" className="me-3"><img src={ig} width="25" alt="Instagram" /></a>
        <a href="#" className="me-3"><img src={tw} width="25" alt="Twitter" /></a>
        <a href="#"><img src={yt} width="25" alt="YouTube" /></a>
      </div>
    </footer>
  );
}

export default Footer;
