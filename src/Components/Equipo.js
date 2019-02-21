import React, { Component } from "react";
import { LaLigaContext } from "./LaLiga";

class Equipo extends Component {
  render() {
    return (
      <LaLigaContext.Consumer>
        {value => {
          return Object.keys(value.state).map(idEquipo => {
            return (
              <li
                key={idEquipo}
                className="list-group-item d-flex justify-content-between aling-items-center"
              >
                <p className="m-0">
                  {value.state[idEquipo].nombre}
                  <span className="badge badge-danger ml-4">
                    {value.state[idEquipo].titulos}
                  </span>
                </p>
                <button
                  className="btn btn-success"
                  type="button"
                  onClick={() => {
                    value.esCampeon(idEquipo);
                  }}
                >
                  {" "}
                  Es campeòn{" "}
                </button>
              </li>
            );
          });
        }}
      </LaLigaContext.Consumer>
    );
  }
}

export default Equipo;
