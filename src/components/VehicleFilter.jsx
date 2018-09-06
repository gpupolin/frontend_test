import React, { Component } from "react";
import * as theme from "../styles/theme";

class VehicleFilter extends Component {
  render() {
    return (
      <div style={{marginLeft: "70px", marginRight: "30px", backgroundColor:"#ffdc2c"}}>
        <theme.ContainerFlex style={{ flexFlow: "column" }}>
          Local de retirada
          <input type="text" />
          <span>
            <input type="checkbox" /> Devolver o carro em outro local Local de
            devolução
          </span>
          <input type="text" />
          Retirada
          <input type="text" />
          Devolução
          <input type="text" />
        </theme.ContainerFlex>
        <div>
          <div>Economize até 35%</div>
          <div>
            <input type="checkbox" /> Incluir voo <input type="checkbox" />
            Incluir hotel
          </div>
        </div>
        <button>Buscar</button>
      </div>
    );
  }
}

export default VehicleFilter;
