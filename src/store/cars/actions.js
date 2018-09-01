import AmadeusService from "../../services/amadeus";
import * as types from "./actionTypes";

export function getCarsRental() {
  return async (dispatch, getState) => {
    const data = await AmadeusService.getCarRentalAirportSearch();

    dispatch({ type: types.FETCHED_DATA, ...{ payload: data } });
  };
}
