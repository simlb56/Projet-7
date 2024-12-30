import React from "react";
import "./Footer.scss";

function Footer() {
    return <div className="footer">
        <div className="footer_logo">
            <img src="/footer.png" width="100"></img>
        </div>
        <div className="footer_text">
        © 2020 Kasa. All rights reserved</div>
    </div>;
}

export default Footer;