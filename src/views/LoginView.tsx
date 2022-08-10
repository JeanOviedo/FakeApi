import React, {useEffect, useState} from "react";
import {Navigate} from "react-router-dom";
import {useSelector, useDispatch, RootStateOrAny} from "react-redux";
import {ActionLoading, actionLoginUsuarios} from "../redux/Actions";
import {get} from "../rutas/token";
import ModalView from "./ModalView";
import Ima from "../img/ok2.webp";
import Ima2 from "../img/ok.webp";
import "../css/Home.css";


function LoginView(props : any) {
    const token = get();
    let   url=window.location.pathname;
    const [password, setPasword] = useState("");
    const dispatch = useDispatch();
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPass, setErrorPass] = useState("");
    const [Redirect, setRedirect] = useState(false);
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const Sesion=  useSelector((state : RootStateOrAny) => state.todos.sesion);
    // const modal = useSelector((state : RootStateOrAny) => state.todos.modal);





    const handleLogin = (evento : any) => {
        evento.preventDefault();
        setErrorEmail("");
        setErrorPass("");

        if (email === "" && password === "") {
            setErrorEmail("Email es requerido");
            setErrorPass("Contraseña es requerida");
        } else if (password === "") {
            setErrorPass("Contraseña es requerida");
        } else if (email !== "" && password !== "") {

            setLoading(true);
            dispatch(actionLoginUsuarios(email, password));
            dispatch(ActionLoading(true));

            setTimeout(() => {
                setRedirect(true);
                <Navigate to="/crear"
            replace={true}></Navigate>
            }, 2000);


        }

    };

    return (
        <div>  
            {
                Sesion && url === "/ingreso" ?
                <Navigate to="/usuarios" replace={true}></Navigate>  : ""
            
            }
            <div className="container" id="container">
                <div className="center" id="container">
                    <img src={Ima}
                        className="Ima"></img>
                </div>
            </div>
            <div className="container" id="container">
                <div id="izquierda" className="izquierda">
                    <img src={Ima2}
                        className={"Ima2"}/>
                </div>
                <div id="right" className="derecha">
                    <h2>Comienza</h2>
                    <p>La app permite iniciar sesión y buscar usuarios.</p>

                    <h1 data-testid="login__title">Login</h1>
                    <br/>
                    <form>
                        <div>
                            <input type="email" className="form__input"
                                onChange={
                                    (event) => setEmail(event.target.value)
                                }
                                autoComplete="new-password"
                                placeholder="Correo"
                                data-testid="login__email"/>
                        </div>
                        <span id="email-error" className="form-text error"
                            style={
                                {color: "red"}
                            }
                            data-testid="alert__text">
                            {
                            errorEmail && <> {errorEmail}</>
                        }
                            {" "} </span>
                        <br></br>
                        <div>
                            <input type="password" placeholder="Contraseña" className="form__input" aria-describedby="password-error"
                                onChange={
                                    (event) => setPasword(event.target.value)
                                }
                                autoComplete="new-password"
                                data-testid="login__password"/>
                        </div>
                        <span id="password-error" className="form-text error"
                            style={
                                {color: "red"}
                            }
                            data-testid="alert__text">
                            {
                            errorPass && <> {errorPass}</>
                        }
                            {" "} </span>
                        <button type="submit" className="button-5"
                            disabled={loading}
                            data-testid="login__btn-login"
                            onClick={
                                (evento) => handleLogin(evento)
                        }>
                            {
                            loading ? "Cargando..." : "Iniciar Sesión"
                        } </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginView;

// Los valores que deberá tener la propiedad “data-testid” en los elementos HTML son:

// h1 de título  data-testid="login__title"
// Input de email  data-testid=“login__email”
// Input de contraseña  data-testid=“login__password”
// Botón para ingresar data-testid=“login__btn-login”
// Span que alerta con notificaciones  data-testid==“alert__text”
