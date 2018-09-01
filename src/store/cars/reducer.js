import { Record } from "immutable";

const carstate = Record({
  title: ""
});

const initialState = carstate({
  title: "Aluguel de Carros com React/Redux"
});

export default function reduce(state = initialState, action = {}) {
  return state;
}

export function getTitle(state) {
  return state.cars.get("title");
}
