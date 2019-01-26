import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

import FontAwesome from 'react-fontawesome';
import SideNavigation from './SideNav/sidenav';

const Header = (props) => {

    const logo = () => (
        <Link to="/" className="logo">
            <img alt="logo" src="/images/nba_logo.png" />
        </Link>
    )

    const navBars = () => (
        <div className="bars">
            <FontAwesome name="bars" 
            onClick={props.onOpenNav}
            style= {{
                color: '#dfdfdf',
                padding: '10px',
                cursor: 'pointer'
            }}/>
        </div>
    )

    return(
        <header className="header">

            <SideNavigation {...props} />

            <div className="headerOptions">
                {navBars()}
                {logo()}
            </div>
        </header>
    )
}

export default Header;