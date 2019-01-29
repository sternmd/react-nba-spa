import React from 'react';
import { Link } from 'react-router-dom';

import './footer.css';

const Footer = () => {

    const CURRENT_YEAR = new Date().getFullYear();

    return(
        <div>
            <div className="footer">
                <Link to="/" className="logo"><img alt="logo" src="/images/nba_logo.png" /></Link>
            <div className="footer-right">
                @NBA {CURRENT_YEAR} All rights reserved. 
            </div>
            </div>
        </div>
    )
}

export default Footer;