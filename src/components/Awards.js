import React, { Component } from "react";

class Awards extends Component {
	render() {

		const { awards } = this.props.cv;

		return (
			<ul className="awards">
                {
                    awards.map((award, i) => {
                        return(
                            <React.Fragment key={i}>
                                <li>{award}</li>
                            </React.Fragment>
                        )
                    })
                }
			</ul>
		);
	}
}

export default Awards;
