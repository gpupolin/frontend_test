import React, { Component } from "react";
import { connect } from "react-redux";

import * as carsSelectors from "../store/cars/reducer";
import * as carsActions from "../store/cars/actions";

/** Componente responsável pelo aluguel de carros. É um smart component, então possui
 * conhecimento do estado da aplicação */
class CarRentalScreen extends Component {
  componentDidMount() {
    this.props.dispatch(carsActions.getCarsRental());
  }

  render() {
    if (this.props.isFetching) return <h1>Carregando...</h1>;

    return (
      <ul>
        {this.props.cars &&
          this.props.cars.map(c => {
            return (
              <li key={c.company_code + c.airport + c.vehicle_info.acriss_code}>
                {`${c.estimated_total.amount} Car ${c.vehicle_info.category} ${c.vehicle_info.air_conditioning ? "with Air" : "without Air"}`}
              </li>
            );
          })}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    cars: carsSelectors.getCars(state),
    isFetching: carsSelectors.isFetching(state)
  };
}

export default connect(mapStateToProps)(CarRentalScreen);
