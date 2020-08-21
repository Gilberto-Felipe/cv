import React, { Component } from "react";
import Education from "./Education";
import Experience from "./Experience";
import Awards from './Awards';
import "../assets/scss/Main.scss";

import cv from "../assets/data/cv.json";
class Main extends Component {
	render() {
		return (
			<div className="col s12 m8 main">
				<h1>Gilberto Ramírez</h1>
				<h5>Software Engineer</h5>
				<span className="sumarize">{cv[0].sumarize}</span>
				
				<h5>EDUCATION</h5>
				<div className="divider"></div>
				{cv.map((cv, i) => {
					return <Education key={i} cv={cv} />;
				})}
				<h5>EXPERIENCE</h5>
				<div className="divider"></div>
                {cv.map((cv, i) => {
					return <Experience key={i} cv={cv} />;
				})}
				<h5>LEADERSHIP AND AWARDS</h5>
				<div className="divider"></div>
				{cv.map((cv, i) => {
					return <Awards key={i} cv={cv} />;
				})}
			</div>
		);
	}
}

export default Main;
