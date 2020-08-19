import React, { Component } from "react";
import Education from './Education';
import '../assets/scss/Main.scss';

import cv from '../assets/data/cv.json';


class Main extends Component {
    render() {
        return (
            <div className="col s12 m8 main container left-align">
                <h1>Gilberto Ramírez</h1>
                <h4>Software Engineer</h4>
                <p>{cv[0].sumarize}</p>
                <div className="divider"></div>
                <h5>EDUCATION</h5>
                <div className="divider"></div>
                    {
                        cv.map((cv, i) => {
                            return (
                                <Education key={i} cv={cv} />
                            )
                        })
                    }
            </div>
        );
    }
}

export default Main;