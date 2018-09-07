/** Toda manipulação do estado acontece dentros dos reducers. Aqui nâo deve ocorrer nenhum
 * efeito colateral.
 */
import { Record, List } from "immutable";
import * as types from "./actionTypes";

const carstate = Record({
  isFetching: false,
  data: List(),
  sort: "lowest_price",
  page: 0,
  limit: 10
});

const initialState = carstate({
  isFetching: false,
  data: List(),
  sort: "lowest_price",
  page: 0,
  limit: 10
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
    case types.CHANGED_PAGE: {
      return state.set("page", action.page);
    }
    case types.CHANGED_LIMIT: {
      return state.set("limit", action.limit).set("page", 0);
    }
    case types.CHANGED_SORT: {
      return state.set("sort", action.sort);
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

const sortByLowestPrice = (a, b) =>
  Number(a.get("estimated_total").get("amount")) -
  Number(b.get("estimated_total").get("amount"));
const sortByBiggestPrice = (a, b) =>
  Number(b.get("estimated_total").get("amount")) -
  Number(a.get("estimated_total").get("amount"));
