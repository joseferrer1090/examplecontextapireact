// Este es mi Provider donde se me guardan los datos
// en pocas palabras la fuenta de los datos
import React, { Component } from "react";

// Creando el context
const LaLigaContext = React.createContext();
// Exportanto este archivo me permite utilizarlo en el consumer
export { LaLigaContext };

class LaLigaProvider extends Component {
  state = {
    equipos: [
      {
        nombre: "Real Madrid",
        titulos: 35
      },
      {
        nombre: "Barcelona",
        titulos: 25
      },
      {
        nombre: "Atlètico Madrid",
        titulos: 10
      }
    ],
    hola: "hola"
  };
  render() {
    return (
      <LaLigaContext.Provider
        value={{
          state: this.state.equipos,
          hola: this.state.hola,
          esCampeon: id => {
            const equipos = [...this.state.equipos];
            equipos[id].titulos = equipos[id].titulos + 1;
            console.log(equipos[id].titulos);
            this.setState({
              state: equipos
            });
          }
        }}
      >
        {this.props.children}
      </LaLigaContext.Provider>
    );
  }
}

export default LaLigaProvider;
