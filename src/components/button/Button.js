import React from "react";
import { HashLink } from "react-router-hash-link";
import "./Button.scss";

export default function Button({ text, className, href, newTab, isHashLink }) {
  return (
    <div className={className}>
      {isHashLink ? (
        <HashLink to={href} smooth className="main-button">
          {text}
        </HashLink>
      ) : (
        <a className="main-button" href={href} target={newTab && "_blank"}>
          {text}
        </a>
      )}
    </div>
  );
}