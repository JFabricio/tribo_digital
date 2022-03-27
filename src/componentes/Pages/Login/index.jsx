import React from "react"

import './index.css'
import '../../BarraNavegacao/Header.css'
import { Link } from "react-router-dom";

//Tela de Login com barra de navegação alterada
//navbar com css do navbar original

export default (props) =>


<div className="Login">

<div class="container">
   <h3 class="logo">TRIBO DIGITAL</h3>
      <nav>
         <Link to="/">HOME</Link>  
        </nav>
</div>
<hr id="linha"/>

    

<div class="wrapper fadeInDown">
  <div id="formContent">
   

   
    <div class="fadeIn first">
      <h2 id="titulo">
         Faça Seu Login
      </h2>
    </div>


    <form>
      <input type="text" id="login" class="fadeIn second" name="login" placeholder="Login"></input>
      <input type="text" id="password" class="fadeIn third" name="login" placeholder="Password"></input>
      <input type="submit" class="fadeIn fourth" value="Log In"></input>
    </form>

    
    <div id="formFooter">
      <a class="underlineHover" href="#">Cadastre-se</a><br />
      <a class="underlineHover" href="#">Esqueceu a  Senha?</a> 
    </div>

  </div>
</div>
</div>




