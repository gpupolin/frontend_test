import React, { Component } from "react";
import styled, { css } from "styled-components";
import Select from "react-select";

// const Select = styled.select`
//   background-color: #ffffff;
//   border: solid 1px #e4e4e4;
//   padding: 15px 10px;
// `;

const optionsItemByPages = [{ value: 10, label: "10" }, { value: 50, label: "50" }, { value: 100, label: "100" }];
const optionsSort = [{ value: 10, label: "Menor preço" }, { value: 50, label: "Maior preço" }];
const optionsCurrency = [{value: "USD", label: "USD"}]

class VehicleSort extends Component {
  render() {
    return (
      <div>
        <Select options={optionsItemByPages} />
        <Select options={optionsSort} />
        <Select options={optionsCurrency} />
      </div>
    );
  }
}

export default VehicleSort;
