import React, { useState } from "react";
import "./Footer.css";

function Footer() {

    return (
  <div className="footer text-center">
    <a className="mr" href="/impressum">Impressum</a>
    <a href="/datenschutz">Datenschutz</a>
  </div>
    );
}

export default Footer;