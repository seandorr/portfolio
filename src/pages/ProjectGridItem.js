import React from 'react';

class ProjectGrid extends React.Component {
	render() {
		return (
			<a className="grid-item" id={`grid-item-${this.props.id}`} href="#" onMouseEnter={() => this.props.changeProj1Border()} onMouseLeave="changeBorderBack()">
				<h1 className="company-title">{this.props.companyTitle}</h1>
				<h1 className="hidden">{this.props.serviceOne}<br />+<br />{this.props.serviceTwo}</h1>
				<img id={`grid-project-${this.props.id}`} src={this.props.image} />
			</a>
		);
	}
}

export default ProjectGrid;