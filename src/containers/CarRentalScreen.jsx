import React, { Component } from "react";
import { connect } from "react-redux";

import * as carsSelectors from "../store/cars/reducer";
import * as carsActions from "../store/cars/actions";

class CarRentalScreen extends Component {
  componentDidMount(){
    this.props.dispatch(carsActions.getCarsRental());
  }

  render() {
    return (
      <ul>
        {this.props.data && 
          this.props.data.map(c => {
            return <li>{c.vehicle_info.acriss_code}</li>;
          })}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: carsSelectors.getCars(state)
  };
}

export default connect(mapStateToProps)(CarRentalScreen);
