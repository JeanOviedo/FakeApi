import React, {Fragment} from "react";

import {actionModal} from "../redux/Actions";
import {useSelector, useDispatch, RootStateOrAny} from "react-redux";
import {Navigate} from 'react-router';
import "../css/Modal.css"
export default function ModalView() {


    let modaldata = useSelector((state : RootStateOrAny) => state.todos.modal);;

    const dispatch = useDispatch();
 

    function handleClick(evento : any) {
        evento.preventDefault();
        dispatch(actionModal({mensaje: "", image: "", visible: false, data: "data"}));
        console.log("cerrado", "clik");
        return <Navigate to="/ingreso" replace={true} />
    }


    return (
        <Fragment> {
            modaldata !== "" ? (


                <div 
                    className="modal">
                    <div>

                        <h1>{
                            modaldata.mensaje
                        }</h1>


                        <img src={
                                modaldata.image
                            }
                            alt={
                                modaldata.image
                            }
                            className="card-image"/>


                    </div>
                    <button onClick={
                            (event) => handleClick(event)
                        }
                        className="button-4">Cerrar</button>
                    <br/>

                </div>


            ) : ""
        } </Fragment>
    );

}
