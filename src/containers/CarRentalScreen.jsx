import React, { Component } from "react";
import { connect } from "react-redux";

import * as carsSelectors from "../store/cars/reducer";
import * as carsActions from "../store/cars/actions";

class CarRentalScreen extends Component {
  componentDidMount() {
    this.props.dispatch(carsActions.getCarsRental());
  }

  render() {
    if (this.props.isFetching) return <h1>Carregando...</h1>;

    return (
      <ul>
        {this.props.data &&
          this.props.data.map(c => {
            return <li key={c.getIn(["vehicle_info", "acriss_code"])}>{c.getIn(["vehicle_info", "acriss_code"])}</li>;
          })}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: carsSelectors.getCars(state),
    isFetching: carsSelectors.isFetching(state)
  };
}

export default connect(mapStateToProps)(CarRentalScreen);
