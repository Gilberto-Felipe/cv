import React, { Component } from "react";
import Contact from "./Contact";
import Skills from "./Skills";
import "../assets/scss/Sidebar.scss";

import contact from "../assets/data/contact.json";
import t_expertise from "../assets/data/t_expertise.json";

class Sidebar extends Component {
	render() {
		return (
			<div className="col s12 m4 sidebar container">
				<img src="me.jpg" alt="me" class="circle responsive-img" />
				<h5 className="left-align">CONTACT</h5>
				<div className="divider"></div>
				{contact.map((contact, i) => {
					return <Contact key={i} contact={contact} />;
				})}
				<h5 className="left-align">TECHNICAL EXPERTISE</h5>
				<div className="divider"></div>
				{t_expertise.map((expertise, i) => {
					return <Skills key={i} expertise={expertise} />;
				})}
				<h5 className="left-align">REFERENCE</h5>
				<div className="divider"></div>
				<div className="left-align">
					<span>PhD Juan Antonio Guerrero Ibáñez</span>
					<br></br>
					<a href="mailto:antonio_guerrero@ucol.mx?" className="reference">
						antonio_guerrero@ucol.mx
					</a>
				</div>
			</div>
		);
	}
}

export default Sidebar;
