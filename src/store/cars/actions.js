/** As actions são responsáveis por mandar uma mensagem para o estado. Nesse ponto ocorrem os
 * efeitos colaterais
 */
import AmadeusService from "../../services/amadeus";
import * as types from "./actionTypes";

export function getCarsRental() {
  return async (dispatch, getState) => {
    dispatch({ type: types.REQUESTED_DATA });

    const data = await AmadeusService.getCarRentalAirportSearch();

    dispatch({
      type: types.FETCHED_DATA,
      ...{
        payload: data.results
          .map(items => {
            return items.cars.map(c => {
              return {
                ...c,
                ...items.provider,
                ...items.location,
                ...items.address,
                ...{airport: items.airport}
              };
            });
          })
          .reduce((p, c) => p.concat(c))
      }
    });
  };
}
