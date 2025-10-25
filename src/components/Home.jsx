import React, { Component } from "react";
import home from '../assets/images/home.webp'

export default class Home extends Component {
    render() {
        return (
            <div>
                <img src={home} alt="home" style={{width:"100%"}}/>
            </div>
        );
    }
}
