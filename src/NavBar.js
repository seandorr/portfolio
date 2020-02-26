import React from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {

	mobileNavBar() {
		var x = document.getElementById("nav-bar-ul");
		var y = document.getElementById("nav-bar");
		if (x.className === "nav-bar-links") {
			x.classList.add("responsive");
			y.classList.add("fixed");
			} else {
				x.className = "nav-bar-links";
				y.classList.remove("fixed");
			}
	}

	render() {
		return (
			<nav id="nav-bar">
				<a href="/" className="logo-link">
					<div className="logo"><h1>Sean</h1></div>
					<div className="flex">
						<div className="door">
							<div className="knob"></div>
						</div>
						<div className="logo"><h1>Dorr</h1></div>
					</div>
				</a>
				<ul className="nav-bar-links" id="nav-bar-ul">
					<li>
						<NavLink 
							to="/" 
							activeClassName="active-underline" 
							className="underline show-on-mobile" 
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
					<a href="javascript:void(0);" className="nav-bar-icon" onClick={() => this.mobileNavBar()}>
						<img src="images/menu-icon.svg" width="50px" height="50px" />
					</a>
			</nav>
		);
	}
}

export default NavBar;