import React, {Component} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../assets/scss/Footer.scss';
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';

class Footer extends Component {
    render() {
        return (
            <div className="footer col s12">
                <a href="#home">
                    <FontAwesomeIcon icon={faChevronCircleUp} size="3x" className="right hide-on-large-only" />
                </a>
                <small>Last update: 2020-08-20</small><br></br>
                <small>CV Gilberto Ramírez 2020<sup>&copy;</sup>. All rights reserved.</small>
            </div>
            
        );
    }
}

export default Footer;