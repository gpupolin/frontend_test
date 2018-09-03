/** Toda manipulação do estado acontece dentros dos reducers. Aqui nâo deve ocorrer nenhum
 * efeito colateral.
 */
import { Record, List } from "immutable";
import * as types from "./actionTypes";

const carstate = Record({
  isFetching: false,
  data: List()
});

const initialState = carstate({
  isFetching: false,
  data: List()
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.REQUESTED_DATA: {
      return state.set("isFetching", true);
    }
    case types.FETCHED_DATA: {
      return state
        .set("data", state.data.merge(action.payload))
        .set("isFetching", false);
    }
    default:
      return state;
  }
}

export function isFetching(state) {
  return state.cars.get("isFetching");
}

export function getCars(state) {
  return state.cars.get("data").first()
    ? state.cars.getIn(["data", 0, "cars"])
    : null;
}
