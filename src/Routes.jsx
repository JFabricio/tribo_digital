import React from "react";
import { Route, Routes,}from "react-router-dom"



import Home from "./componentes/Pages/Home/index.jsx";
import Sobre from "./componentes/Pages/Sobre/index.jsx";
import Login from "./componentes/Pages/Login/index.jsx";
import Cadastro from "./componentes/Pages/CadastroUsuario/index.jsx"


export default () =>
       /*Rotas criadas para troca de aplicação sem refresh*/
            <Routes>
                <Route exact path='/' element={<Home />}  />
                <Route path='/sobre' element={<Sobre />}  />
                <Route path='/login' element={<Login />}  />
                <Route path='/cadastro' element={<Cadastro />}  />
            </Routes>
        
    


