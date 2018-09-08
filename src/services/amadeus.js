const API = "https://api.sandbox.amadeus.com/v1.2";
const API_KEY = "0MAJ6RpJ5vck2wlxXjiCG3PdUVctiqfq";

class AmadeusService {
  async getCarRentalAirportSearch(filter) {
    const url = `${API}/cars/search-airport?apikey=${API_KEY}&location=${
      filter && filter.pickup ? filter.pickup : "NCE"
    }&pick_up=2018-12-07&drop_off=2018-12-08`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    });
    if (!response.ok) {
      return { results: [] };
      // throw new Error(`AmadeusService getCarRentalAirportSearch failed, HTTP status ${response.status}`);
    }
    const data = await response.json();

    return data;
  }

  async getAirport(term) {
    const url = `${API}/airports/autocomplete?apikey=0MAJ6RpJ5vck2wlxXjiCG3PdUVctiqfq&term=${term}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    });
    if (!response.ok) {
      throw new Error(
        `AmadeusService getAirport failed, HTTP status ${response.status}`
      );
    }
    const data = await response.json();

    return data;
  }
}

export default new AmadeusService();
