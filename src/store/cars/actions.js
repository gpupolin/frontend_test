import AmadeusService from "../../services/amadeus";
import * as types from "./actionTypes";

export function getCarsRental() {
  return async (dispatch, getState) => {
    dispatch({ type: types.REQUESTED_DATA });

    const data = await AmadeusService.getCarRentalAirportSearch();

    dispatch({ type: types.FETCHED_DATA, ...{ payload: data.results } });
  };
}
