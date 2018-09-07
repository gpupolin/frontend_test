import React, { Component, Fragment } from "react";
import VehiclePaginate from "./VehiclePaginate";
import Vehicle from "./Vehicle";

class VehicleList extends Component {
  render() {
    if (this.props.isFetching) return <h1>Carregando...</h1>;

    return (
      <Fragment>
        {this.props.cars && this.props.cars.map((c, i) => {
          return (
            <Vehicle
              key={i}
              company={c.company_name}
              name={`Car ${c.vehicle_info.category} ${
                c.vehicle_info.air_conditioning ? "with Air" : "without Air"
              }`}
              photo={c.images && c.images.length > 0 ? c.images[0].url : ""}
              amount={c.estimated_total.amount}
              currency={c.estimated_total.currency}
              fuel={c.vehicle_info.fuel}
              type={c.vehicle_info.type}
              air_conditioning={c.vehicle_info.air_conditioning}
            />
          );
        })}
        <VehiclePaginate onPageClick={this.props.onPageClick} count={this.props.count} limit={this.props.limit} />
      </Fragment>
    );
  }
}

export default VehicleList;
