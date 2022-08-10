// Los valores que deberá tener la propiedad “data-testid” en los elementos HTML son:
// h1 de título="create__title"
// Input de nombre=“create__name”
// Input de trabajo=“create__job”
// Span que alerta con notificaciones=“alert__text”
// Botón para crear= “create__btn”
import React, {useEffect, useState} from "react";
import "../css/Forms.css";
import {useSelector, useDispatch, RootStateOrAny} from "react-redux";
import {ActionLoading, actionNewUsuarios} from "../redux/Actions";
import ModalView from "./ModalView";
export default function CreateUserView(props : any) {
    const [name, setName] = useState("");
    const [job, setJob] = useState("");

    const [errorName, setErrorName] = useState(false);
    const [errorTrabajo, setErrorTrabajo] = useState(false);
    const [succes, setSucces] = useState("");

    const dispatch = useDispatch();
    const loading = useSelector((state : RootStateOrAny) => state.todos.loading);
    const modal = useSelector((state : RootStateOrAny) => state.todos.modal);
    useEffect(() => {
        dispatch(ActionLoading(false));
    }, []);

    const handleLogin = (e : any) => {
        e.preventDefault();
        console.log(name, job, "NAME JOB");

        if (name === "") {
            setErrorName(true);
        } else if (job === "") {
            setErrorTrabajo(true);
         } else if (job !== "" && name !== "") {
            console.log(errorName, errorTrabajo, "errorTrabajo");
            dispatch(ActionLoading(true));
            dispatch(actionNewUsuarios(name, job));
            setErrorName(false);
            setErrorTrabajo(false);
        }
    };

    return (<div> {" "}
        {
        modal.visible ? <ModalView></ModalView> : ""
    }
        <h1 data-testid="create__title">/crear/</h1>
        <br/>
        <form onSubmit={handleLogin}>
            <input type="text" placeholder="Nombre" className="form__input"
            name="create__name"
                onChange={
                    (event) => setName(event.target.value)
                }
                data-testid="create__name"/> {
            errorName == true ? (<span data-testid="alert__text">Nombre requerido</span>) : (``)
        }
            <br></br>
            <input type="text" placeholder="Trabajo" className="form__input"
                onChange={
                    (event) => setJob(event.target.value)
                }
                data-testid="create__job"/>{" "}
            {
            errorTrabajo == true ? (<span data-testid="alert__text">Trabajo requerido</span>) : (``)
        }
            <br></br>
            <button type="submit" className="button-5"
                disabled={loading}
                data-testid="create__btn"> {" "}
                {
                loading ? "Cargando..." : "Crear"
            }
                {" "} </button>
        </form>
    </div>);
}

const useFormInput = (initialValue : string) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (e : any) => {
        setValue(e.target.value);
    };

    return {value, onChange: handleChange};
};
