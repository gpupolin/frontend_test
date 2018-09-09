/** Toda manipulação do estado acontece dentros dos reducers. Aqui nâo deve ocorrer nenhum
 * efeito colateral.
 */
import { Record, List, fromJS } from "immutable";
import * as types from "./actionTypes";

const carstate = Record({
  someSearch: false,
  isFetching: false,
  data: List(),
  sort: "lowest_price",
  page: 0,
  limit: 10,
  airportsToPickup: List(),
  airportsToReturn: List()
});

const initialState = carstate({
  someSearch: false,
  isFetching: false,
  data: List(),
  sort: "lowest_price",
  page: 0,
  limit: 10,
  airportsToPickup: List(),
  airportsToReturn: List()
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.REQUESTED_DATA: {
      return state
          .set("someSearch", true)
          .set("isFetching", true);
    }
    case types.FETCHED_DATA: {
      return state
        .set("data", fromJS(action.payload))
        .set("page", 0)
        .set("isFetching", false);
    }
    case types.CHANGED_PAGE: {
      return state.set("page", action.page);
    }
    case types.CHANGED_LIMIT: {
      return state.set("limit", action.limit).set("page", 0);
    }
    case types.CHANGED_SORT: {
      return state.set("sort", action.sort);
    }
    case types.FETCHED_AIRPORTS_PICKUP_DATA: {
      return state.set("airportsToPickup", fromJS(action.payload));
    }
    case types.FETCHED_AIRPORTS_RETURN_DATA: {
      return state.set("airportsToReturn", fromJS(action.payload));
    }
    default:
      return state;
  }
}

/** Seletores para buscar as informações do estado */

export function isFetching(state) {
  return state.cars.get("isFetching");
}

export function getCars(state) {
  return state.cars
    .get("data")
    .sort(
      state.cars.sort === "lowest_price"
        ? sortByLowestPrice
        : sortByBiggestPrice
    )
    .slice(
      Math.ceil(state.cars.get("page") * state.cars.get("limit")),
      Math.ceil(
        state.cars.get("page") * state.cars.get("limit") +
          state.cars.get("limit")
      )
    )
    .toJS();
}

export function getCarsCount(state) {
  return state.cars.get("data").size;
}

export function getLimit(state) {
  return state.cars.get("limit");
}

export function getAirportsToPickup(state) {
  return state.cars.get("airportsToPickup").toJS();
}

export function getAirportsToReturn(state) {
  return state.cars.get("airportsToReturn").toJS();
}

export function getSomeSearch(state) {
  return state.cars.get("someSearch");
}

const sortByLowestPrice = (a, b) =>
  Number(a.get("estimated_total").get("amount")) -
  Number(b.get("estimated_total").get("amount"));
const sortByBiggestPrice = (a, b) =>
  Number(b.get("estimated_total").get("amount")) -
  Number(a.get("estimated_total").get("amount"));
