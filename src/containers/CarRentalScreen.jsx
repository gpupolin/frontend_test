import React, { Component } from "react";
import { connect } from "react-redux";

import * as carsSelectors from "../store/cars/reducer";
import * as carsActions from "../store/cars/actions";

import styled, { css } from "styled-components";
import * as theme from "../styles/theme";

import Vehicle from "../components/Vehicle";
import VehicleSort from "../components/VehicleSort";
import VehicleFilter from "../components/VehicleFilter";
import VehiclePaginate from "../components/VehiclePaginate";
import VehicleList from "../components/VehicleList";

const Container = styled.div`
  display: flex;
  padding-top: 35px;
  align-items: baseline;
`;

const ContainerVehicleList = styled.div`
  width: 100%;
`;

/** Componente responsável pelo aluguel de carros. É um smart component, então possui
 * conhecimento do estado da aplicação */
class CarRentalScreen extends Component {
  constructor(props) {
    super(props);

    this.handlePageClick = this.handlePageClick.bind(this);
    this.handleChangeItemByPages = this.handleChangeItemByPages.bind(this);
    this.handleChangeSort = this.handleChangeSort.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(carsActions.getCarsRental());
  }

  handlePageClick(page) {
    this.props.dispatch(carsActions.changePage(page));
  }

  handleChangeItemByPages(quantity) {
    this.props.dispatch(carsActions.changeLimit(quantity));
  }

  handleChangeSort(sort) {
    this.props.dispatch(carsActions.changeSort(sort));
  }

  render() {
    //if (this.props.isFetching) return <h1>Carregando...</h1>;

    return (
      <Container>
        <VehicleFilter />
        <ContainerVehicleList>
          <VehicleSort onChangeItemByPages={this.handleChangeItemByPages}
            onChangeSort={this.handleChangeSort}
          />
          <VehicleList
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
    limit: carsSelectors.getLimit(state)
  };
}

export default connect(mapStateToProps)(CarRentalScreen);
