import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import * as reducers from "../store/reducers";

import CarRentalScreen from "../containers/CarRentalScreen";

import Vehicle from "../components/Vehicle";
import VehicleSort from "../components/VehicleSort";
import VehiclePaginate from "../components/VehiclePaginate";
import VehicleFilter from "../components/VehicleFilter";

const store = createStore(
  combineReducers(reducers),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

addDecorator(story => <Provider store={store}>{story()}</Provider>);

storiesOf("Aluguel de Carros", module)
  .add("container", () => <CarRentalScreen />)
  .add("veículo", () => (
    <Vehicle
      company={"Company"}
      name={"Carro Economico com ar"}
      photo={
        "https://cdn-istoedinheiro-ssl.akamaized.net/wp-content/uploads/sites/17/2018/02/palio.jpg"
      }
      amount={"12.50"}
      currency={"USD"}
      transmission={"Automático"}
      fuel={"Gasolina"}
      type={"2/4 portas"}
      air_conditioning={"Ar"}
    />
  ))
  .add("ordenação", () => <VehicleSort />)
  .add("filtro", () => <VehicleFilter />)
  .add("paginação", () => <VehiclePaginate />);
