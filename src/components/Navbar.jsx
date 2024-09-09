import React from "react";
import logo from "../assets/mkLogo.png";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} alt="" className="mx-5 " width={80} height={80} />
        </a>
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl opacity-80">
        <a
          href="https://www.linkedin.com/in/mohitkhedkar"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linkedin"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.github.com/mohitkhedkar"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/mohitk_dev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.x.com/mohitk_dev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
        >
          <FaX />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
