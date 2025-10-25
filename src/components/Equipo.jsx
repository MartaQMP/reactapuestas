import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";
import { Navigate, NavLink } from "react-router-dom";

export default class Equipo extends Component {
    state = {
        equipo: {},
    };

    getEquipo = () => {
        let request = "api/equipos/" + this.props.id;
        axios.get(Global.urlApuestas + request).then(response => {
            this.setState({
                equipo: response.data,
            });
        });
    };

    componentDidMount = () => {
        this.getEquipo();
    };

    componentDidUpdate = oldProps => {
        if (oldProps.id !== this.props.id) {
            this.getEquipo();
        }
    };

    render() {
        return (
            <div>
                {this.state.equipo && (
                    <table style={{ border: "2px solid gray", textAlign: "center", width: "85%", margin: "auto" }}>
                        <tr>
                            <th style={{ backgroundColor: "lightgray" }}>{this.state.equipo.nombre}</th>
                        </tr>
                        <tr>
                            <td>
                                <img style={{ width: "150px" }} src={this.state.equipo.imagen} alt="logo equipo" />
                            </td>
                        </tr>
                        <tr>
                            <th>Champions: {this.state.equipo.champions}</th>
                        </tr>
                        <tr>
                            <td>{this.state.equipo.descripcion}</td>
                        </tr>
                        <tr>
                            <td>
                                <NavLink className="btn btn-success" to={"/jugadores/" + this.props.id}>Jugadores</NavLink>
                                <NavLink className="btn btn-info" to={"/"}>Volver</NavLink>
                            </td>
                        </tr>
                    </table>
                )}
            </div>
        );
    }
}
