import React from 'react';

const NavBar = () => {
	return (
		<nav id="nav-bar">
			<a href="https://seandorr.com" className="logo-link">
				<div className="logo" id="firstName"><h1>Sean</h1></div>
				<ul id="logo-list">
					<li><div className="door"></div><div className="knob"></div></li>
					<li><div className="logo" id="lastName"><h1>Dorr</h1></div></li>
				</ul>
			</a>
			<ul className="nav-bar-links" id="nav-bar-ul">
				<li><a className="underline active-underline mobile-only" href="https://seandorr.com">Projects</a></li>
				<li><a className="underline" href="#">WIP</a></li>
				<li><a className="underline" href="#">About</a></li>
				<li><a className="underline" href="#">Contact</a></li>
			</ul>
				<a href="javascript:void(0);" className="nav-bar-icon" onclick="mobileNavBar()"></a>
		</nav>
	);
}

export default NavBar;