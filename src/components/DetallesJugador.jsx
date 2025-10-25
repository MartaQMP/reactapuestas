import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default class DetallesJugador extends Component {
    state = {
        jugador: {},
    };
    getDetalles = () => {
        let request = "api/jugadores/" + this.props.id;
        axios.get(Global.urlApuestas + request).then(response => {
            this.setState({
                jugador: response.data,
            });
        });
    };

    componentDidMount=()=>{
        this.getDetalles()
    }

    render() {
        return (
            <div>
                {this.state.jugador && (
                    <table style={{ border: "2px solid gray", textAlign: "center", width: "85%", margin: "auto" }}>
                        <tr>
                            <th style={{ backgroundColor: "lightgray" }}>{this.state.jugador.nombre}</th>
                        </tr>
                        <tr>
                            <td>
                                <img style={{ width: "150px" }} src={this.state.jugador.imagen} alt="imagen jugador" />
                            </td>
                        </tr>
                        <tr>
                            <th>{this.state.jugador.posicion}</th>
                        </tr>
                        <tr>
                            <td>Fecha Nacimiento: {this.state.jugador.fechaNacimiento}</td>
                        </tr>
                        <tr>
                            <td>Pais: {this.state.jugador.pais}</td>
                        </tr>
                        <tr>
                            <td>
                                <NavLink className="btn btn-success" to={"/jugadores/" + this.state.jugador.idEquipo}>
                                    Jugadores
                                </NavLink>
                            </td>
                        </tr>
                    </table>
                )}
            </div>
        );
    }
}
