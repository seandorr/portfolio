import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
	return (
		<nav id="nav-bar">
			<a href="/" className="logo-link">
				<div className="logo" id="firstName"><h1>Sean</h1></div>
				<ul id="logo-list">
					<li><div className="door"></div><div className="knob"></div></li>
					<li><div className="logo" id="lastName"><h1>Dorr</h1></div></li>
				</ul>
			</a>
			<ul className="nav-bar-links" id="nav-bar-ul">
				<li>
					<NavLink 
						to="/" 
						activeClassName="active-underline" 
						className="underline mobile-only" 
					>
						Projects
					</NavLink>
				</li>
				<li>
					<NavLink 
						to="/Wip" 
						activeClassName="active-underline" 
						className="underline"
					>
						WIP
					</NavLink>
				</li>
				<li>
					<NavLink 
						to="/About" 
						activeClassName="active-underline" 
						className="underline"
					>
						About
					</NavLink>
				</li>
				<li>
					<NavLink 
						to="/Contact" 
						activeClassName="active-underline" 
						className="underline"
					>
						Contact
					</NavLink>
				</li>
			</ul>
				<a href="javascript:void(0);" className="nav-bar-icon" onClick="mobileNavBar()"></a>
		</nav>
	);
}

export default NavBar;