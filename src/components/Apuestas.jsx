import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Global from "../Global";
import axios from "axios";

export default class Apuestas extends Component {
    state = {
        apuestas: [],
    };

    getApuestas = () => {
        let request = "api/apuestas";
        axios.get(Global.urlApuestas + request).then(response => {
            this.setState({
                apuestas: response.data
            })
        });
    };

    componentDidMount = ()=> {
        this.getApuestas()
    }

    render() {
        return (
            <div>
                <NavLink style={{margin:"auto", width:"150px", display:"block"}} to={"/hacerapuesta"} className={"btn btn-danger"}>
                    Realizar apuesta
                </NavLink>
                <table style={{width:"85%", textAlign:"center", margin:"auto"}} className="table table-info">
                    <thead>
                        <tr>
                            <th>USUARIO</th>
                            <th>RESULTADO</th>
                            <th>FECHA</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.apuestas &&
                            this.state.apuestas.map((apuesta, index) => {
                                return (
                                    <tr>
                                        <td>{apuesta.usuario}</td>
                                        <td>{apuesta.resultado}</td>
                                        <td>{apuesta.fecha}</td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
        );
    }
}
