import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import MenuSection from './MenuSection';

const Menu2 = () => (
    <div className="menu-tab">
		<img src="img/logo.jpg" className="tab-logo" />
		<Link to="/" className="close"><img src="img/icons/close.png" className="close-icon" /></Link>
		<ul id="nav-list">
			<Link to="/"><li>HOME</li></Link>
			<li className="has-dropdown"><Link to="/">GOA</Link>
				<FontAwesome className="fa fa-plus" aria-hidden="true"></FontAwesome>
				<ul className="dropdown">
					<li><Link to="/">Citizen Herald</Link></li>
					<li><Link to="/">MANDATE 2019</Link></li>
					<li><Link to="/">Assembly floor test</Link></li>
				</ul>
			</li>
			<li className="has-dropdown"><Link to="/">EDIT</Link>
				<FontAwesome className="fa fa-plus" aria-hidden="true"></FontAwesome>
				<ul className="dropdown">
					<li><Link to="/">Citizen Herald</Link></li>
					<li><Link to="/">MANDATE 2019</Link></li>
					<li><Link to="/">Assembly floor test</Link></li>
				</ul>
			</li>
			<Link to="/"><li>BUSINESS</li></Link>
			<Link to="/"><li>CAFE</li></Link>
			<Link to="/"><li>SPORTS</li></Link>
		    <Link to="/"><li>REVIEW</li></Link>
			<Link to="/"><li>INDIA</li></Link>
			<Link to="/"><li>OBITUARIES</li></Link>
			<Link to="/"><li>ARCHIVES</li></Link>
			<Link to="/"><li>ADVERTISE</li></Link>
			<Link to="/"><li>CONTACT US</li></Link>
		</ul>
	</div>
);

export default Menu2;