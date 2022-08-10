import {useState, useEffect, useMemo} from "react";
import Table from "../Table";
import {ActionLoading,  actionUsuarios} from "../redux/Actions";
import {useSelector, useDispatch, RootStateOrAny} from "react-redux";
import {get} from "../rutas/token";
import { Navigate } from "react-router";

// Los valores que deberá tener la propiedad “data-testid” en los elementos HTML son:

// h1 de título  data-testid="users__title"
// table con el contenido de la lista de usuarios   data-testid="users__table"
// Etiquetas de imagen con el avatar de cada usuario  data-testid=“user__img-" concatenado con el id de cada usuario.
// botón que redirecciona a la vista de crear nuevo usuario  data-testid="users__btn-create"
// un botón por cada página con el número de la página como texto data-testid="users__btn-page-" concatenado con el número de la página

export default function UsersView(props : any) {
    
 
       const token = get();
    // const [load, setLoading] = useState(false);
    const load = useSelector((state : RootStateOrAny) => state.todos.loading);
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const dispatch = useDispatch();
    const [Redirect, setRedirect] = useState(get());
    const DATA = useSelector((state : RootStateOrAny) => state.todos.usuario);
    const columns = useMemo(() => [
        {
            Header: "Id",
            accessor: "id"
        },
        {
            Header: "Avatar",
            accessor: "avatar"
        },
        {
            Header: "Correo electrónico",
            accessor: "email"
        },
        {
            Header: "Nombre",
            accessor: "first_name"
        }, {
            Header: "Apellido",
            accessor: "last_name"
        },
    ], []);

    // useEffect(() => {
       
    //     if (token == null) {
    //        <Navigate to="/ingreso"
    //            replace={true}></Navigate>;
    //     }
    //  }, []);
    useEffect(() => {
      dispatch(ActionLoading(true));
     dispatch(actionUsuarios(page));
       
        if (DATA !== undefined) {
            setUsers(DATA.data);
            setTotalPages(DATA.total_pages);
       
        }


       
        // useEffect(() => {
        //     let token = get();
        //     if (token == null) {
        //         <Navigate to="/ingreso"
        //             replace={true}></Navigate>;
        //     }
        // }, []);
      

        if (!load) 
            dispatch(actionUsuarios(page));
        

    }, [page]);

    const handleCreate = (event : any) : void => {
        event.preventDefault();
        <Navigate to="/crear"  replace={true}></Navigate>
    };

    return (
        <div>
           
            <h1 data-testid="users__title">/usuarios/</h1>
            <br/>
            <button type="button" className="button-4"
                style={
                    {
                        float: "right",
                        margin: 10
                    }
                }
                onClick={handleCreate}
                data-testid="users__btn-create">
                Crear usuario
            </button>
            <br></br>
           { users != undefined ? 
              <Table columns={columns}
              data={users}
              className="table"/> : ";"
            }
            <div>
                <nav aria-label="Page navigation example"
                    style={
                        {float: "right"}
                }>
                    <ul className="pagination">
                    {
                        page > 1 ? (
                            <li className="item">
                                <button className="button-4"
                                    onClick={
                                        () => setPage(page - 1 > 0 ? page - 1 : 1)
                                }>
                                    Anterior
                                </button>
                            </li>

                        ) : ("")
                    }
                        <li className="item">
                            <button className="button-4"
                                onClick={
                                    () => setPage(1)
                                }
                                data-testid={
                                    "users__btn-page-" + page
                            }>
                                {page} </button>
                        </li>
                        {
                        totalPages > page ? (
                            <li className="item">
                                <button className="button-4"
                                    onClick={
                                        () => setPage(page + 1)
                                }>
                                    Siguiente
                                </button>
                            </li>
                        ) : ("")
                    } </ul>
                </nav>
            </div>
        </div>
    );
}
