/** As actions são responsáveis por mandar uma mensagem para o estado. Nesse ponto ocorrem os
 * efeitos colaterais
 */
import AmadeusService from "../../services/amadeus";
import * as types from "./actionTypes";

export function changeSort(sort) {
  return { type: types.CHANGED_SORT, ...{ sort: sort } };
}

export function changeLimit(quantity) {
  return { type: types.CHANGED_LIMIT, ...{ limit: quantity } };
}

export function changePage(page) {
  return { type: types.CHANGED_PAGE, ...{ page: page.selected } };
}

export function getAirports(type, term) {
  return async (dispatch, getState) => {

    const data = await AmadeusService.getAirport(term);

    dispatch({
      type:
        type === "pickup"
          ? types.FETCHED_AIRPORTS_PICKUP_DATA
          : types.FETCHED_AIRPORTS_RETURN_DATA,
      ...{ payload: data }
    });
  };
}

export function getCarsRental(filter) {
  return async (dispatch, getState) => {
    dispatch({ type: types.REQUESTED_DATA });
    console.log(filter);
    const data = await AmadeusService.getCarRentalAirportSearch(filter);

    dispatch({
      type: types.FETCHED_DATA,
      ...{
        payload:
          data.results.length > 0
            ? data.results
                .map(items => {
                  return items.cars.map(c => {
                    return {
                      ...c,
                      ...items.provider,
                      ...items.location,
                      ...items.address,
                      ...{ airport: items.airport }
                    };
                  });
                })
                .reduce((p, c) => p.concat(c))
            : []
      }
    });
  };
}
