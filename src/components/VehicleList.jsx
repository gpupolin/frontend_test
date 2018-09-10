import React, { Component, Fragment } from "react";
import VehiclePaginate from "./VehiclePaginate";
import Vehicle from "./Vehicle";
import Loading from "./Loading";
import styled from "styled-components";
import { fadeIn } from "../styles/utils";

const ContainerNoSearch = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  animation: ${fadeIn} 1s forwards;
`;

const Container = styled.div`
  animation: ${fadeIn} 0.5s forwards;
`;

class VehicleList extends Component {
  render() {
    if (this.props.isFetching) return <Loading />;

    if (!this.props.someSearch)
      return (
        <ContainerNoSearch>
          <h1>To get started, select a pickup location 🙂</h1>
        </ContainerNoSearch>
      );

    if (this.props.cars.length <= 0)
      return (
        <ContainerNoSearch>
          <h1>No cars found 😦</h1>
        </ContainerNoSearch>
      );

    if (this.props.cars && this.props.cars.length > 0)
      return (
        <Container>
          {this.props.cars.map((c, i) => {
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
          <VehiclePaginate
            onPageClick={this.props.onPageClick}
            count={this.props.count}
            limit={this.props.limit}
          />
        </Container>
      );
  }
}

export default VehicleList;
