import { Record, List } from "immutable";
import * as types from "./actionTypes";

const carstate = Record({
  isFetching: false,
  data: Record({})
});


const initialState = carstate({
  isFetching: false,
  data: {}
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.FETCHED_DATA: {
      return state.merge({data:action.payload});
    }
    default:
      return state;
  }
}

export function getCars(state) {
  return state.cars.toJS().data.results ? [...state.cars.toJS().data.results[0].cars] : null;
}
