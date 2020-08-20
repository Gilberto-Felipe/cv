import React, {Component} from 'react';
import { updateTextFields } from 'materialize-css';

class Footer extends Component {
    render() {

        let uptodate = new Date();
        uptodate = uptodate.toISOString();
        uptodate = uptodate.slice(0,10);

        return (
            <div>
                <span>Última actualización: {uptodate}</span><br></br>
                <span>CV Gilberto Ramírez 2020<sup>&copy;</sup> Todos los derechos reservados</span>
            </div>
            
        );
    }
}

export default Footer;