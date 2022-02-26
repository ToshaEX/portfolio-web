import React from "react";
import { BsLinkedin, BsGithub, BsDribbble } from "react-icons/bs";
import { SiHackerrank } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://linkedin.com/in/oshan-tharindu-8aa98111b"
        target="_blank"
        className=""
      >
        <BsLinkedin />
      </a>

      <a href="https://github.com/ToshaEX " target="_blank" className="">
        <BsGithub />
      </a>

      <a href="https://dribbble.com/ToshaEX" target="_blank" className="">
        <BsDribbble />
      </a>
      <a
        href="https://www.hackerrank.com/tharinduoshan"
        target="_blank"
        className=""
      >
        <SiHackerrank />
      </a>
    </div>
  );
};

export default HeaderSocials;
