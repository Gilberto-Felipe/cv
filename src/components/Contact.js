import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Contact extends Component {
	render() {
		const { href, icon, description } = this.props.contact;

		return (
			<div className="contact">
				<a href={href} className="row valign-wrapper">
					<div className="col s4">
						<FontAwesomeIcon icon={icon} size="2x" />
					</div>
					<div className="col s8 left-align">
						<span>{description}</span>
					</div>
				</a>
			</div>
		);
	}
}

export default Contact;
