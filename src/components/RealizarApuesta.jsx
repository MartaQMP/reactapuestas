import axios from "axios";
import React, { Component } from "react";
import Global from "../Global";
import { Navigate } from "react-router-dom";

export default class RealizarApuesta extends Component {
    cajaUsuario = React.createRef();
    cajaLocal = React.createRef();
    cajaVisitante = React.createRef();
    cajaFecha = React.createRef();

    state = { status: false };

    hacerApuesta = event => {
        event.preventDefault();
        let request = "api/apuestas";
        let apuesta = {
            idApuesta: 1,
            usuario: this.cajaUsuario.current.value,
            resultado: this.cajaLocal.current.value + " - " + this.cajaVisitante.current.value,
            fecha: this.cajaFecha.current.value,
        };
        axios.post(Global.urlApuestas + request, apuesta).then(response => {
            this.setState({
                status: true,
            });
        });
    };

    render() {
        return (
            <div>
                {this.state.status === true && <Navigate to={"/apuestas"}/>}
                <form onSubmit={this.hacerApuesta} style={{ width: "70%", margin: "auto" }}>
                    <label className="form-label">Usuario</label>
                    <input className="form-control" ref={this.cajaUsuario} />
                    <label className="form-label">Real Madrid</label>
                    <input className="form-control" ref={this.cajaLocal} />
                    <label className="form-label">Atletico Madrid</label>
                    <input className="form-control" ref={this.cajaVisitante} />
                    <label className="form-label">Fecha</label>
                    <input className="form-control" ref={this.cajaFecha} />
                    <br />
                    <button className="btn btn-info" style={{ margin: "auto", display: "block" }}>
                        Crear apuesta
                    </button>
                </form>
            </div>
        );
    }
}
