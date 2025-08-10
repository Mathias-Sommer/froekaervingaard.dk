// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#26432D] text-[#f3f3f3] w-full px-[5%] py-6 flex flex-col md:flex-row items-center justify-between shadow-inner">
      {/* Left side: Site Name + Contact Info */}
      <div className="flex flex-col mb-6 md:mb-0">
        <div className="text-2xl font-black tracking-[-0.04em] mb-2">
          Frøkær Vingård
        </div>
        <div className="text-sm md:text-base opacity-80 flex flex-col gap-1">
          <a
            href="mailto:kontakt@froekaervingard.dk"
            className="hover:underline cursor-pointer"
          >
            E-mail: kontakt@froekaervingard.dk
          </a>
          <a href="tel:+4551222844" className="hover:underline cursor-pointer">
            Telefon: +45 5122 2844
          </a>
          <a className="hover:underline cursor-pointer">CVR: 28597576</a>
        </div>
      </div>

      {/* Center: Copyright */}
      <div className="text-sm md:text-base opacity-80 text-center flex-1">
        &copy; {new Date().getFullYear()} Froekaer Vingaard. All rights
        reserved.
      </div>

      {/* Right side: Links */}
      <div className="flex gap-6 text-sm md:text-base mt-6 md:mt-0">
        <a href="#" className="hover:underline cursor-pointer">
          Privatlivspolitik
        </a>
        <a
          href="https://www.facebook.com/p/Fr%C3%B8k%C3%A6r-Ving%C3%A5rd-G%C3%A5rdbutik-100026836159813/?locale=da_DK"
          className="hover:underline cursor-pointer"
          target="_blank"
        >
          Facebook
        </a>
      </div>
    </footer>
  );
};

export default Footer;
