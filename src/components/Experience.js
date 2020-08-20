import React, { Component } from "react";

class Experience extends Component {
	render() {
		const { experience } = this.props.cv;

		return (
			<div className="row experience">
				{experience.map((experience, i) => {
					return (
						<React.Fragment key={i}>
							<div className="col s12 m6">
								<strong>{experience.company}</strong>
							</div>
							<div className="col s12 m6">
								<strong>{experience.place}</strong>
							</div>
							<div className="col s12 m6">
								<em>{experience.position}</em>
							</div>
							<div className="col s12 m6">
								<em>{experience.date}</em>
							</div>
							<ul className="">
								{experience.projects.map((projects, i) => {
									return (
										<React.Fragment key={i}>
											<li>{projects.description}</li>
											<span>{projects.technologies}</span>
										</React.Fragment>
									);
								})}
							</ul>
						</React.Fragment>
					);
				})}
			</div>
		);
	}
}

export default Experience;
