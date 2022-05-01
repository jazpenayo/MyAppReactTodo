import { Component } from "react";
import Hijo from "./Hijo";

export default class Padre extends Component {
    render() {
        return (
         <div>
            <h1>Soy un componente padre</h1>
            <Hijo Titulo="Fui instanciado desde el padre"></Hijo>
         </div>
        );
    }
}