import { Component } from "react";


export default class Sample extends Component {
    state = {
        estado:"Probando un estado"
    };

    apretarBoton = () => {
        this.setState({
            estado: "Presionado"
        });
    }

    render(){
        return(
            <div>
                <h1>{this.state.estado}</h1>
                <button type="button" onClick={this.apretarBoton}>Presionar</button>
            </div>
        );
    }

}