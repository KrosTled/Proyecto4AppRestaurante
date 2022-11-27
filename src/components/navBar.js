import React from "react";
import './css/navBar.css';
import './css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row , Col} from 'reactstrap';
import {Link} from 'react-router-dom';
import Logo from './Img/Logo.png';


function NavBar(){
    return (
    <nav>
         <Row>
            <Col>
                <img className="imgLogo" src={Logo} alt="logo"/>
            </Col>
            <Col>
                <div className="row">
                    <Link className="col refeer textCenter" to='/'>inicio</Link>
                    <Link className="col refeer textCenter" to='/Menu'>Menu</Link>
                </div>
            </Col>
         </Row>
        
    </nav>
  )
}

export default NavBar