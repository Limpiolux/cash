import { useState } from "react";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./PrivateRoute";
import BasicoSeguridad from "./pages/BasicoSeguridad";
import Vestuarios from "./pages/Vestuarios";
import Maquinas from "./pages/Maquinas";
import Productos from "./pages/Productos";
import Carteleria from "./pages/Carteleria";

function App() {
  const isAuthenticated = localStorage.getItem("IsLoggingIn") === "true";

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute
          path="/dashboard"
          component={Dashboard}
          isAuthenticated={isAuthenticated}
        />
        <PrivateRoute
          path="/basicoseguridad"
          component={BasicoSeguridad}
          isAuthenticated={isAuthenticated}
        />
        <PrivateRoute
          path="/vestuarios"
          component={Vestuarios}
          isAuthenticated={isAuthenticated}
        />
        <PrivateRoute
          path="/maquinas"
          component={Maquinas}
          isAuthenticated={isAuthenticated}
        />
        <PrivateRoute
          path="/productos"
          component={Productos}
          isAuthenticated={isAuthenticated}
        />
        <PrivateRoute
          path="/carteleria"
          component={Carteleria}
          isAuthenticated={isAuthenticated}
        />
      </Switch>
    </Router>
  );
}

export default App;
