import React, { useState } from "react";

import Ima from "../img/ok2.webp";
import Ima2 from "../img/ok.webp";
import "../css/Home.css"

export default function HomeView(props: any) 
{
    return (
        <>
      
  
      <div className="container" id="container">
    
    
      <div className="center" id="container">
    
          <img src={Ima} className="Ima"></img>
            
          </div>
       
      </div>
      <div className="container" id="container">
        <div id="izquierda" className="izquierda">
          <img src={Ima2} className={"Ima2"} />
        </div>
        <div id="right" className="derecha">
          <h2>Comienza</h2>
          <p>
            La app permite iniciar sesión y buscar usuarios.
          </p>
        </div>
      </div>
    </>
    );
}