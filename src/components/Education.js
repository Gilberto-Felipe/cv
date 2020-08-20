import React, { Component } from "react";

class Education extends Component {
	render() {
		const { education } = this.props.cv;

		return (
			<div className="row">
				{education.map((education, i) => {
					return (
						<React.Fragment key={i}>
							<div className="col s12 m6">
								<strong>{education.university}</strong>
							</div>
							<div className="col s12 m6 right">
								<strong>{education.place}</strong>
							</div>
							<div className="col s12 l7">
								<em>{education.degree}</em>
							</div>
							<div className="col s12 l5 right-l">
								<em>{education.completition_date}</em>
							</div>
						</React.Fragment>
					);
				})}
			</div>
		);
	}
}

export default Education;
