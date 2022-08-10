import axios from "axios";
import { Navigate } from "react-router";

import { USUARIO, MODAL, MODALINFO, ERROR, LOADING ,SESION } from "./Types";

export function ActionModalInfo(valor: any) {
  console.log("MODALINFO    ss-----------", valor);
  return { type: MODAL, payload: valor };
}

export function actionModal(valor: any) {
  console.log("MODAL-----------", valor);
  return { type: MODAL, payload: valor };
}

export function ActionLoading(valor: any) {
  console.log("LOADING-----------", valor);
  return { type: LOADING, payload: valor };
}

export function ActionCerrarSesion(valor: any) {
  console.log("SESION-----------", valor);
  return { type: SESION, payload: valor };
}

export function CloseModal(valor: any) {
  return { type: MODAL, modal: valor };
}

export function actionUsuarios(valor: any) {
  return async function (
    dispatch: (arg0: { type: any; payload: any }) => void
  ) {
    try {
      let response = await axios({
        url: `https://reqres.in/api/users?page=${valor}`,
        method: "get",
      });

      dispatch({ type: USUARIO, payload: response.data });
      dispatch( { type: SESION, payload: true });
     
      console.log("NUEVA DATA", response.data.data);
      dispatch({ type: LOADING, payload: false });
    } catch (error) {
      // const history = useHistory();
      console.log("ERROR", error);
      dispatch({ type: ERROR, payload: "Ocurrio un error" });
      dispatch({ type: LOADING, payload: false });
      return <Navigate to="/ingreso" />;
    }
  };
}

export function actionDestroySesion(valor: any) {
  sessionStorage.removeItem("token");
  setTimeout(() => {
    return <Navigate to="/ingreso" />
  }, 2000);
 ;
}

export function actionNewUsuarios(valor: any, valor2: any) {
  return async function (
    dispatch: (arg0: {
      type: any;
      payload:
        | any
        | {
            mensaje: any;
            image: any;
            visible: any;
            data: any;
          };
    }) => void
  ) {
    try {
      let response = await axios.post(`https://reqres.in/api/users`, {
        name: valor,
        job: valor2,
      });
      console.log("Creado usuario con exito");
      dispatch({ type: LOADING, payload: false });
      //     dispatch({type: MODAL, payload: {
      //         mensaje: "Creado usuario con exito...",
      //      image:
      //        "https://www.isblasalle.edu.co/wp-content/uploads/2020/01/mision.png",
      //      visible: true,
      //      data: "Creado usuario con exito",
      //    }});
    } catch (error) {
      console.log("ERROR", error);
    }
  };
}

export function actionLoginUsuarios(valor: any, valor2: any) {
  return async function (
    dispatch: (arg0: {
      type: any;
      payload:
        | any
        | {
            mensaje: any;
            image: any;
            visible: any;
            data: any;
          };
    }) => void
  ) {
    try {
      let response = await axios.post("https://reqres.in/api/login", {
        email: valor,
        password: valor2,
      });

      if (response.data.token) {
        dispatch({ type: "LOGIN", payload: false });
        sessionStorage.setItem("token", response.data.token);
        dispatch( { type: SESION, payload: true });
        return <Navigate to="/usuarios" replace={true} />
       
       
      
        // history.push("/ingreso");
        // history.push("/usuarios");
        //     dispatch({type: MODAL, payload: {
        //         mensaje: "Login exitoso...",
        //      image:
        //        "https://www.isblasalle.edu.co/wp-content/uploads/2020/01/mision.png",
        //      visible: true,
        //      data: "Login exitoso...",
        //    }});
      }
    } catch (error) {
      console.log("ERROR", error);
      dispatch({
        type: MODAL,
        payload: {
          mensaje: "Login Error, validar datos",
          image:
            "https://www.pngall.com/wp-content/uploads/2/Sad-Boy-PNG-Pic.png",
          visible: true,
          data: "Login con errores intente de nuevo",
        },
      });
    }
  };
}
