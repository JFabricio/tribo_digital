import React from "react";

import Routes from "./Routes";
import "./App.css"
import Header from "./componentes/BarraNavegacao/Header";
import { BrowserRouter } from "react-router-dom";


export default () =>
    
    <div className = "App" >
    <BrowserRouter>
          <Routes />
    </BrowserRouter>
         
        
      
    </div>


