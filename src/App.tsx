import React, {useEffect} from "react";
import CreateUserView from "./views/CreateUserView";
import Error from "./views/Error404View";
import Login from "./views/LoginView";
import Home from "./views/HomeView";
import Users from "./views/UsersView";
import "../src/css/Global.css";

import {Routes, Navigate, Route} from "react-router-dom";
import PrivateRoute from "./rutas/Private";
import PublicRoute from "./rutas/Public";
import {get} from "./rutas/token";
import Error404View from "./views/Error404View";

function App() {
    const token = get();
  

    return (
        <div className="main">
          
            <div className="main">
              
                <div className="container-fluid">
                    <Routes>
                        <Route path="/usuarios"
                            element={
                                <PrivateRoute><Users/></PrivateRoute>
                            }
                            
                            
                            />

                        <Route path="/crear"
                            element={
                                <PrivateRoute><CreateUserView/></PrivateRoute>
                            }/>
                        <Route path="/"
                            element={
                                <Navigate
                            replace
                            to="/ingreso"/>
                            }/>

                        <Route path="/ingreso"
                            element={
                                get() !== null ? (
                                    <Navigate to="/usuarios"
                                        replace={true}/>
                                ) : (
                                    <Login/>)
                            }/>
                        <Route path="*"
                            element={<Error404View/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
