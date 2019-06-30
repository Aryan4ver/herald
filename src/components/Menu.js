import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import MenuSection from './MenuSection';

const Menu = () => (
    <div className="menu">
		<div className="container">
		    <ul id="nav-list">
			    <MenuSection />
		    </ul>
    
            <Link to="/" id="toggler">
                <div className="icon-bar"></div>
                <div className="icon-bar"></div>
                <div className="icon-bar"></div>
            </Link>
		    <div className="clear"></div>
		</div>
	</div>
);

export default Menu;