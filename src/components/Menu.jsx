import axios from "axios";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Global from "../Global";

export default class Menu extends Component {
    state = {
        equipos: [],
    };

    cargarEquipos = () => {
        let request = "api/equipos";
        axios.get(Global.urlApuestas + request).then(response => {
            this.setState({
                equipos: response.data,
            });
        });
    };

    componentDidMount = () => {
        this.cargarEquipos();
    };

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <p className="navbar-brand">Menu</p>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown"
                            aria-controls="navbarNavDropdown"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="/">
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/">
                                        Apuestas
                                    </NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <NavLink className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Equipos
                                    </NavLink>
                                    <ul className="dropdown-menu">
                                        {this.state.equipos &&
                                            this.state.equipos.map((equipo, index) => {
                                                return (
                                                    <li>
                                                        <NavLink className="dropdown-item" to={"/equipo/" + equipo.idEquipo}>
                                                            {equipo.nombre}
                                                        </NavLink>
                                                    </li>
                                                );
                                            })}
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
