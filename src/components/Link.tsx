import React from "react";

interface LinkProps {
  text: string;
  url: string;
  leavesPage: boolean;
  classes?: string;
  brandText?: boolean;
}

const Link = ({ text, url, leavesPage, classes, brandText }: LinkProps) => {
  return (
    <a
      href={url}
      target={leavesPage ? "_blank" : "_self"}
      rel="noreferrer"
      className={`text-blue-base hover:text-black dark:text-nouns-bg-blue dark:hover:text-blue-700 transition duration-100 underline ${(brandText === null || (brandText !== null && brandText)) ? "text-nouns": ""} tracking-wider ${
        classes && classes
      }`}
    >
      {text}
    </a>
  );
};

export default Link;
