import React from "react";

import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div
        className="text-center"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 className="h6 text-center text-danger mx-2 text-white">
          Developed by
          <a
            className="mx-1"
            style={{ textDecoration: "none", color: "inherit" }}
            href="mailto:dhamsavardhan@gmail.com"
          >
            Hamsavardhan D
          </a>
          ,
          of
          <a
            className="mx-1"
            style={{ textDecoration: "none", color: "inherit" }}
            href="mailto:webopsandblockchainclub@gmail.com"
          >
            Indian Institute of Technology Madras
          </a>
          , Chennai
        </h1>
      </div>
    </div>
  );
};

export default Footer;
