import React, { Component } from "react";
import Equipos from "./Components/Equipos";
import LaLigaProvider from "./Components/LaLiga";

class App extends Component {
  render() {
    return (
      <div className="container">
        <LaLigaProvider>
          <Equipos />
        </LaLigaProvider>
      </div>
    );
  }
}

export default App;
