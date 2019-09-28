import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import MenuSection2 from './MenuSection2';

const Menu2 = (props) => (
    <div className="menu-tab">
		<img src="/img/logo.jpg" className="tab-logo" />
		<Link to="#" className="close" onClick={props.handleSideMenuClose}><img src="/img/icons/close.png" className="close-icon" /></Link>
		<ul id="nav-list">
			<li><Link to="/" target="_self">HOME</Link></li>
			<MenuSection2 />
		</ul>
	</div>
);

export default Menu2;