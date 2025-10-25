import React, { Component } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Menu from "./Menu";
import Home from "./Home";
import Equipo from "./Equipo";
import Jugadores from "./Jugadores";
import DetallesJugador from "./DetallesJugador";
import Apuestas from "./Apuestas";
import RealizarApuesta from "./RealizarApuesta";

export default class Router extends Component {
    render() {
        function EquipoElement() {
            let { id } = useParams();
            return <Equipo id={id} />;
        }
        function JugadoresElement() {
            let { id } = useParams();
            return <Jugadores id={id} />;
        }
        function JugadorDetallesElement() {
            let { id } = useParams();
            return <DetallesJugador id={id} />;
        }

        return (
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/apuestas" element={<Apuestas />} />
                    <Route path="/equipo/:id" element={<EquipoElement />} />
                    <Route path="/jugadores/:id" element={<JugadoresElement />} />
                    <Route path="/detallesjugador/:id" element={<JugadorDetallesElement />} />
                    <Route path="/hacerapuesta" element={<RealizarApuesta />} />
                </Routes>
            </BrowserRouter>
        );
    }
}
