import reducer from "../store/cars/reducer";
import { CarRentalComplex, CarRentalSimple } from "./mocks/AmadeusCarsRental";
import { Record, List } from "immutable";

const carstate = Record({
  isFetching: false,
  data: List()
});

const initialState = carstate({
  isFetching: false,
  data: List()
});

describe("mudanças do estado dos carros para aluguel", () => {
  test("requisição dos dados", () => {
    const state = reducer(initialState, { type: "cars.REQUESTED_DATA" });
    expect(state.toJS()).toEqual({ isFetching: true, data: [] });
  });
  test("dados retornados", () => {
    const state = reducer(initialState, {
      type: "cars.FETCHED_DATA",
      ...{ payload: CarRentalComplex.results }
    });
    expect(state.data.toJS()).toEqual(CarRentalComplex.results);
    expect(state.get("isFetching")).toEqual(false);
  });
});
