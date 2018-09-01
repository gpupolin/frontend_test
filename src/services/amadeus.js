const API = "https://api.sandbox.amadeus.com/v1.2";

class AmadeusService {

    async getCarRentalAirportSearch(){
        const url = `${API}/cars/search-airport?apikey=0MAJ6RpJ5vck2wlxXjiCG3PdUVctiqfq&location=NCE&pick_up=2018-12-07&drop_off=2018-12-08`;
    
        const response = await fetch(url, {
            method: 'GET',
            headers: {
              Accept: 'application/json'
            }
          });
          if (!response.ok) {
            throw new Error(`AmadeusService getCarRentalAirportSearch failed, HTTP status ${response.status}`);
          }
          const data = await response.json();

          return data;
    }
}

export default new AmadeusService();
