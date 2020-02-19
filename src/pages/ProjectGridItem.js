import React from 'react';

class ProjectGridItem extends React.Component {

	changeBorder() {
		document.getElementById("top").style.backgroundColor = this.props.border
		document.getElementById("right").style.backgroundColor = this.props.border
		document.getElementById("bottom").style.backgroundColor = this.props.border
		document.getElementById("left").style.backgroundColor = this.props.border
	}

	changeBorderBack() {
		document.getElementById("top").style.backgroundColor = '#62e6ac'
		document.getElementById("right").style.backgroundColor = '#62e6ac'
		document.getElementById("bottom").style.backgroundColor = '#62e6ac'
		document.getElementById("left").style.backgroundColor = '#62e6ac'
	}

	render() {
		return (
			<a className="grid-item" id={`grid-item-${this.props.id}`} href="#" onMouseOver={() => this.changeBorder()} onMouseOut={() => this.changeBorderBack()}>
				<h1 className="company-title">{this.props.companyTitle}</h1>
				<h1 className="hidden">{this.props.serviceOne}<br />+<br />{this.props.serviceTwo}</h1>
				<img id={`grid-project-${this.props.id}`} src={`/images/${this.props.image}`} />
			</a>
		);
	}
}

export default ProjectGridItem;