"use client";

import React from "react";
import { metaData, socialLinks } from "app/config";
import {LuFacebook, LuInstagram, LuLinkedin, LuMail} from "react-icons/lu";
import {ScreenWideSection} from "./screen-wide-section";

const YEAR = new Date().getFullYear();

function SocialLink({ href, icon: Icon }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon />
    </a>
  );
}

function SocialLinks() {
  return (
    <div className="flex text-lg gap-3.5 float-right transition-opacity duration-300 hover:opacity-90">
      <SocialLink href={socialLinks.instagram} icon={LuInstagram} />
      <SocialLink href={socialLinks.facebook} icon={LuFacebook} />
      <SocialLink href={socialLinks.linkedin} icon={LuLinkedin} />
      <SocialLink href={socialLinks.email} icon={LuMail} />
    </div>
  );
}

export default function Footer() {
  return (
      <ScreenWideSection background={<div className="absolute w-full h-full -z-10 bg-teal-600" />}>
          <small className="block lg:pt-16 pt-12 pb-12 lg:pb-16 md:ml-9 ml-6 mr-6">
              <time>© {YEAR}</time>
              {" "}
              <a
                  className="no-underline"
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  {metaData.title}
              </a>
              <SocialLinks/>
          </small>
      </ScreenWideSection>
  );
}
