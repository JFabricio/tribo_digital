import React from "react";
import {Switch, Route, Routes,}from "react-router-dom"


import Sobre from "./componentes/Pages/Sobre/index.jsx";
import Home from "./componentes/Pages/Home/index.jsx";
import Login from "./componentes/Pages/Login/index.jsx";


export default () =>
       /*Rotas criadas para troca de aplicação */
            <Routes>
                <Route exact path='/' element={<Home />}  />
                <Route path='/sobre' element={<Sobre />}  />
                <Route path='/login' element={<Login />}  />
            </Routes>
        
    


