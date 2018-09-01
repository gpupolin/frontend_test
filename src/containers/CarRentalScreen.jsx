import React, { Component } from "react";
import { connect } from 'react-redux';

import * as carsSelectors from "../store/cars/reducer";

class CarRentalScreen extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
      title: carsSelectors.getTitle(state),
    };
  }

export default connect(mapStateToProps)(CarRentalScreen);
