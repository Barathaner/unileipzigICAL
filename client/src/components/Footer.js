import React, { useState } from "react";
import { Link} from 'react-router-dom'
import "./Footer.css";

function Footer() {

    return (
      <div className="footer text-center">
        <Link className="link" to="/impressum">Impressum</Link>
        <Link className="link" to="/datenschutz">Datenschutz</Link>
      </div>
    );
}

export default Footer;