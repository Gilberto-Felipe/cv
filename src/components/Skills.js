import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Skills extends Component {
	render() {
		const { icon, name } = this.props.expertise;

		return (
			<div className="contact">
				<div className="row">
					<div className="col s2">
						<FontAwesomeIcon icon={icon} size="2x" />
					</div>
					<div className="col s10 left-align">
						<span className="">{name}</span>
					</div>
				</div>
			</div>
		);
	}
}

export default Skills;
