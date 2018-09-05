import React, { Component } from "react";
import styled, { css } from "styled-components";

class VehicleSort extends Component {
  render() {
    return (
      <div>
        <select>
          <option>Itens por página:</option>
        </select>
        <select>
          <option>Ordenar por:</option>
        </select>
        <select>
          <option>Moeda:</option>
        </select>
      </div>
    );
  }
}

export default VehicleSort;
