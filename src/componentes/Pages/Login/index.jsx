import React from "react"

import { Link } from "react-router-dom";

//yup validacoes & Formik fomulario pratico
import * as yup from "yup";
import { Formik,Form,Field, ErrorMessage } from "formik";


import './index.css'
import '../../BarraNavegacao/Header.css'

const handleClickLogin = (values) => console.log(values);

//Valindando dados com a Biblioteca yup
const validationLogin = yup.object().shape({
  login:yup.string().required(<h4 style={{color:"red"}}>Campo Obrigatorio</h4>),
  password:yup.string().min(8,<h6 style={{color:"blue"}}>Senha deve ter minimo de 8 carcteres</h6>).required(<h4 style={{color:"red"}}>Campo Obrigatorio</h4>),
});



export default (props) =>

<div className="Login">
{/* Navbar*/}
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
    {/*biblioteca para simplificar formulario e validacoes */}
      <Formik initialValues={{}} onSubmit={handleClickLogin} validationSchema={validationLogin}> 

        <Form className="login-form" onSubmit={handleClickLogin}>

          <Field type="text" id="login" class="fadeIn second" name="login" placeholder="Login" />
            {/*erro login */}
            <ErrorMessage component="span" name="login" className="form-error"/> 
          
          <Field type="text" id="password" class="fadeIn third" name="password" placeholder="Password" />
            {/*erro password */}
            <ErrorMessage component="span" name="password" className="form-error" />

            {/* botao submit*/}
          <Field type="submit" class="fadeIn fourth" value="Log In" /> 

        </Form>
      </Formik>
  
      

    
    <div id="formFooter">
      <Link to='/cadastro' class="underlineHover">Cadastre-se</Link>
      <a class="underlineHover" href="#">Esqueceu a  Senha?</a> 
    </div>

  </div>
</div>
</div>




