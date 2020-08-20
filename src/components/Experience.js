import React, { Component } from "react";

class Experience extends Component {
	render() {
		const { experience } = this.props.cv;

		return (
			<div className="row">
				{experience.map((experience, i) => {
					return (
						<React.Fragment key={i}>
							<div className="col s12 m8">
								<strong>{experience.company}</strong>
							</div>
							<div className="col s12 m4 right">
								<strong>{experience.place}</strong>
							</div>
							<div className="col s12 l8">
								<em>{experience.position}</em>
							</div>
							<div className="col s12 l4 right-l">
								<em>{experience.date}</em>
							</div>
							<ul className="experience">
								{experience.projects.map((projects, i) => {
									return (
										<React.Fragment key={i}>
											<li>{projects.description}<br></br>
												<strong>{projects.technologies}</strong>
											</li>
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
