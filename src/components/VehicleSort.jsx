import React, { Component } from "react";
import styled, { css } from "styled-components";
import Select from "react-select";
import * as theme from "../styles/theme";

//TODO: Ajustar css
//TODO: Lifting state up
//TODO:

const SelectStyled = {
  option: (styles, state) => ({
    ...styles,
    fontFamily: "Arial"
  }),
  container: styles => ({
    ...styles,
    minWidth: "100px",
    marginRight: "30px"
  }),
  control: styles => ({
    ...styles,
    backgroundColor: "#ffffff",
    border: "solid 1px #e4e4e4",
    fontFamily: "Arial",
    borderRadius: 0
  }),
  singleValue: styles => ({
    color: theme.primary,
    fontSize: "12px"
  }),
  indicatorSeparator: styles => ({
    display: "none"
  }),
  dropdownIndicator: styles => ({
    ...styles,
    color: theme.primary
  })
};

const optionsItemByPages = [
  { value: 10, label: "10" },
  { value: 50, label: "50" },
  { value: 100, label: "100" }
];
const optionsSort = [
  { value: "lowest_price", label: "Menor preço" },
  { value: "biggest_price", label: "Maior preço" }
];
const optionsCurrency = [{ value: "USD", label: "USD" }];

const Container = styled.div`
  display: flex;
`;

class VehicleSort extends Component {
  constructor(props) {
    super(props);

    this.state = {
      optionItemByPage: optionsItemByPages[0],
      optionSort: optionsSort[0],
      optionCurrency: optionsCurrency[0]
    };

    this.onChangeItemByPages = this.onChangeItemByPages.bind(this);
    this.onChangeSort = this.onChangeSort.bind(this);
    this.onChangeCurrency = this.onChangeCurrency.bind(this);
  }

  onChangeItemByPages(option) {
    this.setState({
      optionItemByPage: option
    });
    if (typeof this.props.onChangeItemByPages === "function") {
      this.props.onChangeItemByPages(option.value);
    }
  }
  onChangeSort(option) {
    this.setState({
      optionSort: option
    });
    if (typeof this.props.onChangeSort === "function") {
      this.props.onChangeSort(option.value);
    }
  }

  onChangeCurrency(option) {
    this.setState({
      optionCurrency: option
    });
  }

  render() {
    return (
      <Container>
        <Select
          onChange={this.onChangeItemByPages}
          value={{
            value: this.state.optionItemByPage.value,
            label: "ITENS POR PÁGINA: " + this.state.optionItemByPage.label
          }}
          isSearchable={false}
          styles={SelectStyled}
          options={optionsItemByPages}
        />
        <Select
          onChange={this.onChangeSort}
          value={{
            value: this.state.optionSort.value,
            label: "ORDENAR POR: " + this.state.optionSort.label
          }}
          isSearchable={false}
          styles={SelectStyled}
          options={optionsSort}
        />
        <Select
          onChange={this.onChangeCurrency}
          value={{
            value: this.state.optionCurrency.value,
            label: "MOEDA: " + this.state.optionCurrency.label
          }}
          isSearchable={false}
          styles={SelectStyled}
          options={optionsCurrency}
        />
      </Container>
    );
  }
}

export default VehicleSort;
