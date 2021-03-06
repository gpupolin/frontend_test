import React, { Component } from "react";
import { connect } from "react-redux";

import * as carsSelectors from "../store/cars/reducer";
import * as carsActions from "../store/cars/actions";

import styled, { css } from "styled-components";
import * as theme from "../styles/theme";
import { media, fadeIn } from "../styles/utils";

import VehicleSort from "../components/VehicleSort";
import VehicleFilter from "../components/VehicleFilter";
import VehicleList from "../components/VehicleList";

const Container = styled.div`
  display: flex;
  padding-top: 35px;
  align-items: flex-start;

  & .hide-on-desktop-and-up {
    display: none;
  }

  ${media.tablet`
    padding-top: 0;    
    flex-flow: column;
    align-items: stretch;
    margin: 0 5%;

    & .hide-on-tablet-and-down {
      display:none;
    }
    
    & .hide-on-desktop-and-up {
        display:inherit;
    }
  `};

  ${media.phone`
    margin: 0 auto;
  `}

  /* ${media.phone`

    & .hide-on-tablet-and-down {
      display:none;
    }
    
    & .hide-on-desktop-and-up {
        display:inherit;
    }
  `}; */
`;

const ContainerVehicleList = styled.div`
  width: 100%;
  animation: ${fadeIn} 1s forwards;
`;

/** Componente responsável pelo aluguel de carros. É um smart component, então possui
 * conhecimento do estado da aplicação */
class CarRentalScreen extends Component {
  constructor(props) {
    super(props);

    this.handlePageClick = this.handlePageClick.bind(this);
    this.handleChangeItemByPages = this.handleChangeItemByPages.bind(this);
    this.handleChangeSort = this.handleChangeSort.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    //this.props.dispatch(carsActions.getCarsRental());
  }

  handlePageClick(page) {
    if (typeof window.scrollTo === "function") {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
    this.props.dispatch(carsActions.changePage(page));
  }

  handleChangeItemByPages(quantity) {
    this.props.dispatch(carsActions.changeLimit(quantity));
  }

  handleChangeSort(sort) {
    this.props.dispatch(carsActions.changeSort(sort));
  }

  handleInputChange(type, value) {
    //const inputValue = value.replace(/\W/g, '')
    if (value === "") return;
    this.props.dispatch(carsActions.getAirports(type, value));
  }

  handleSearch(filter) {
    this.props.dispatch(carsActions.getCarsRental(filter));
  }

  render() {
    //if (this.props.isFetching) return <h1>Carregando...</h1>;

    return (
      <Container>
        <VehicleFilter
          airportsToPickup={this.props.airportsToPickup}
          airportsToReturn={this.props.airportsToReturn}
          onInputChangePickup={value => this.handleInputChange("pickup", value)}
          onInputChangeReturn={value => this.handleInputChange("return", value)}
          onSearch={this.handleSearch}
        />
        <ContainerVehicleList>
          {this.props.cars &&
            this.props.cars.length > 0 &&
            !this.props.isFetching && (
              <VehicleSort
                onChangeItemByPages={this.handleChangeItemByPages}
                onChangeSort={this.handleChangeSort}
              />
            )}
          <VehicleList
            someSearch={this.props.someSearch}
            cars={this.props.cars}
            isFetching={this.props.isFetching}
            count={this.props.count}
            limit={this.props.limit}
            onPageClick={this.handlePageClick}
          />
        </ContainerVehicleList>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    cars: carsSelectors.getCars(state),
    isFetching: carsSelectors.isFetching(state),
    count: carsSelectors.getCarsCount(state),
    limit: carsSelectors.getLimit(state),
    airportsToPickup: carsSelectors.getAirportsToPickup(state),
    airportsToReturn: carsSelectors.getAirportsToReturn(state),
    someSearch: carsSelectors.getSomeSearch(state)
  };
}

export default connect(mapStateToProps)(CarRentalScreen);
