import axios from "axios";
import React, { Component } from "react";
import Global from "../Global";
import { NavLink } from "react-router-dom";

export default class Jugadores extends Component {
    state = {
        jugadores: [],
    };

    getJugadores = () => {
        let request = "api/jugadores/jugadoresequipos/" + this.props.id;
        axios.get(Global.urlApuestas + request).then(response => {
            this.setState({
                jugadores: response.data,
            });
        });
    };

    componentDidMount = () => {
        this.getJugadores();
    };

    render() {
        return (
            <div>
                <table style={{ width: "80%", margin: "auto", textAlign: "center" }} className="table table-info">
                    <thead>
                        <tr>
                            <th>IMAGEN</th>
                            <th>NOMBRE</th>
                            <th>DETALLES</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.jugadores &&
                            this.state.jugadores.map((jugador, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <img alt="imagen jugador" style={{ width: "50px" }} src={jugador.imagen} />
                                        </td>
                                        <td>{jugador.nombre}</td>
                                        <td>
                                            <NavLink className={"btn btn-danger"} to={"/detallesjugador/" + jugador.idJugador}>
                                                Detalles
                                            </NavLink>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
        );
    }
}
