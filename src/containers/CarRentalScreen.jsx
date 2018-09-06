import React, { Component } from "react";
import { connect } from "react-redux";

import * as carsSelectors from "../store/cars/reducer";
import * as carsActions from "../store/cars/actions";

import * as theme from "../styles/theme";

import Vehicle from "../components/Vehicle";
import VehicleSort from "../components/VehicleSort";
import VehicleFilter from "../components/VehicleFilter";

/** Componente responsável pelo aluguel de carros. É um smart component, então possui
 * conhecimento do estado da aplicação */
class CarRentalScreen extends Component {
  componentDidMount() {
    this.props.dispatch(carsActions.getCarsRental());
  }

  render() {
    //if (this.props.isFetching) return <h1>Carregando...</h1>;

    return (
      <theme.ContainerFlex
        style={{ paddingTop: "35px", alignItems: "baseline" }}
      >
        <VehicleFilter />
        <div style={{ width: "100%" }}>
          <VehicleSort />
          {this.props.isFetching && <h1>Carregando...</h1>}
          {!this.props.isFetching &&
            this.props.cars.map(c => {
              return (
                <Vehicle
                  company={c.company_name}
                  name={`Car ${c.vehicle_info.category} ${
                    c.vehicle_info.air_conditioning ? "with Air" : "without Air"
                  }`}
                  photo={c.images.length > 0 ? c.images[0].url : ""}
                  amount={c.estimated_total.amount}
                  currency={c.estimated_total.currency}
                  fuel={c.vehicle_info.fuel}
                  type={c.vehicle_info.type}
                  air_conditioning={c.vehicle_info.air_conditioning}
                />
              );
            })}
        </div>
      </theme.ContainerFlex>
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
