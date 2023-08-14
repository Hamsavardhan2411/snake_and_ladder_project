import React from "react";
import iitm from "../images/IITMLogo.png";
import hvlogo from "../images/logo.png";
const Header = () => {
  return (
    <div style={{ position: "absolute" }}>
      <img
        src={iitm}
        alt="cfi logo"
        width="90px"
        style={{ position: "fixed", top: "10px", left: "10px" }}
      />
      <img
        src={hvlogo}
        alt="cfi logo"
        width="180px"
        style={{ position: "fixed", top: "10px", right: "10px" }}
      />
    </div>
  );
};

export default Header;
