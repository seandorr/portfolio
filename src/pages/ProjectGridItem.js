import React from 'react';

const ProjectGrid = (props) => {
	// function changeProj1Border() {
	// 	document.getElementById("top").style.backgroundColor = "#0FA5A1";
	// 	document.getElementById("right").style.backgroundColor = "#0FA5A1";
	// 	document.getElementById("bottom").style.backgroundColor = "#0FA5A1";
	// 	document.getElementById("left").style.backgroundColor = "#0FA5A1";
	// }
	
	return (
		<a className="grid-item" id={`grid-item-${props.id}`} href="#" onmouseover={`changeProj${props.id}Border()`} onmouseout="changeBorderBack()">
			<h1 className="company-title">{props.companyTitle}</h1>
			<h1 className="hidden">{props.serviceOne}<br />+<br />{props.serviceTwo}</h1>
			<img id={`grid-project-${props.id}`} src={props.image} />
		</a>
	);
}

export default ProjectGrid;