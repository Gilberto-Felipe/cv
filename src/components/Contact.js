import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../assets/scss/Contact.scss";

class Contact extends Component {
	render() {

        const {href, icon, description} = this.props.contact;

		return (
			<div className="contact">
				<a href={href} className="row valign-wrapper">
					<div className="col s2">
						<FontAwesomeIcon icon={icon} size="2x" />
					</div>
					<div className="col s10 left-align">
						<span>{description}</span>
					</div>
				</a>

				{/*
                <a href="tel: +52 (312) 188 9878" className="row valign-wrapper">
                    <div className="col s2"> 
                        <FontAwesomeIcon icon={faMobileAlt} size='2x' />
                    </div>
                    <div className="col s10 left-align">
                        <span>+52 312 1889878</span>
                    </div>
                </a>
                <a href="mailto:gramirez25@ucol.mx?" className="row valign-wrapper">
                    <div className="col s2"> 
                        <FontAwesomeIcon icon={faEnvelope} size='2x' />
                    </div>
                    <div className="col s10 left-align">
                        <span>gramirez25@ucol.mx</span>
                    </div>
                </a>
                <a href="https://github.com/Gilberto-Felipe" className="row valign-wrapper">
                    <div className="col s2"> 
                        <FontAwesomeIcon icon={faGithubAlt} size='2x' />
                    </div>
                    <div className="col s10 left-align">
                        <span>Gilberto-Felipe</span>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/gilberto-felipe-ramirez-garcia/" className="row valign-wrapper">
                    <div className="col s2"> 
                        <FontAwesomeIcon icon={faLinkedin} size='2x' />
                    </div>
                    <div className="col s10 left-align">
                        <span>Gilberto-Felipe-Ramirez-Garcia</span>
                    </div>
                </a>
                */}
			</div>
		);
	}
}

export default Contact;
