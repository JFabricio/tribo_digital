import React from "react";
import {Link} from "react-router-dom";



import './Header.css';


export default (props) =>
 /*DEFININDO COMPONENTE NAVBAR */

 
<div className="NavBar">
    <div class="container2">
       
    </div>
    <hr id="linha-top"/>
    <div class="container">
        <h3 class="logo">TRIBO DIGITAL</h3>
        <nav>
            <Link to="/">HOME</Link>
            <Link to="/sobre">SOBRE</Link>
            <Link to="/obter">OBTER AJUDA</Link>
            <Link to="/login">LOGIN</Link>
        </nav>
    </div>
</div>
