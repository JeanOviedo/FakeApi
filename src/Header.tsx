import { NavLink, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {actionDestroySesion} from "../src/redux/Actions";

import "../src/css/Header.css";
import Logo from "./img/logo.png";
import { get, remove } from "../src/rutas/token";

import { FaBars, FaTimes } from "react-icons/fa";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { ActionCerrarSesion } from './redux/Actions';

const Header = (props: any) => {
  const dispatch = useDispatch();
  const token = get();
  const [RedirectText, setRedirect] = useState("Cerrar Sesión");
   const cerraSesion=  useSelector((state : RootStateOrAny) => state.todos.sesion);


useEffect(() => {
  if (token) {
    <Navigate to="/usuarios" replace={true}></Navigate> 
}
}, [])

      

  const handleDestroy = (event: any): void => {
    event.preventDefault();
    sessionStorage.removeItem("token");
    dispatch(ActionCerrarSesion(false));
    setRedirect("Cerrando...");
    setTimeout(() => {
    setRedirect("Cerrar Sesión");
      <Navigate to="/ingreso"
        replace={true}></Navigate>
    }, 1200);

  };



 
  

  const [clicked, setclicked] = useState(false);
  const handleclicked = () => setclicked(!clicked);
  const Close = () => setclicked(false);
  const tokenn = sessionStorage.getItem("token");


  return (
  <div>
    
       
      <div
        className={clicked ? "main-container" : ""}
        onClick={() => Close()}
      />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <img src={Logo} alt="logo" className="logo" />
          <i className="fa fa-code"></i>

          <ul className={clicked ? "nav-menu active" : "nav-menu"}>
            {" "}
          
            <li className="nav-item">
              <NavLink
                className="nav-item"
                to="/usuarios"
                data-testid="header__link-users"
              >
                usuarios
              </NavLink>
            </li>

         

              {cerraSesion === false ?
              <li className="nav-item">
                <NavLink
                  className="nav-item"
                  to="/ingreso"
                  data-testid="header__link-login"
                >
                  ingreso
                </NavLink>
              </li>
              :
              <li className="nav-item">
              <NavLink
             className="nav-item"
             to="/ingreso"
             onClick={ handleDestroy}
             data-testid="header__link-signout"
           >
            {RedirectText} 
             </NavLink>
         </li>
            }
           
            <li className="nav-item">
              <NavLink
                className="nav-item"
                to="/crear/"
                data-testid="header__link-create"
              >
                crear
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleclicked}>
            {" "}
            {clicked ? <FaTimes /> : <FaBars />}{" "}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

// Los valores que deberá tener la propiedad “data-testid” en los elementos HTML son:

// elemento de redirección a ingreso data-testid="header__link-login"
// elemento de redirección a usuarios data-testid="header__link-users"
// elemento de redirección a Crear data-testid="header__link-create"
// elemento para cerrar sesión data-testid="header__link-signout"
