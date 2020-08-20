import React, {Component} from 'react';
import '../assets/scss/Footer.scss';

class Footer extends Component {
    render() {

        let uptodate = new Date();
        uptodate = uptodate.toISOString();
        uptodate = uptodate.slice(0,10);

        return (
            <div className="footer col s12 center-align">
                <small>Last update: {uptodate}</small><br></br>
                <small>CV Gilberto Ramírez 2020<sup>&copy;</sup>. All rights reserved.</small>
            </div>
            
        );
    }
}

export default Footer;