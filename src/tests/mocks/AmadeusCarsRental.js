export const CarRentalSimple = {
  results: [
    {
      provider: {
        company_code: "ZT"
      },
      cars: [
        {
          vehicle_info: {
            acriss_code: "XX",
            transmission: "No information available",
            fuel: "No information available",
            category: "Special",
            type: "Special"
          }
        },
        {
          vehicle_info: {
            acriss_code: "IFAR",
            transmission: "Automatic",
            fuel: "Unspecified",
            air_conditioning: true,
            category: "Intermediate",
            type: "SUV"
          }
        }
      ]
    },
    {
      provider: {
        company_code: "ZD",
        company_name: "BUDGET"
      },
      cars: [
        {
          vehicle_info: {
            acriss_code: "PCAR",
            transmission: "Automatic",
            fuel: "Unspecified",
            air_conditioning: true,
            category: "Premium",
            type: "2/4 Door"
          }
        }
      ]
    }
  ]
};

export const CarRentalComplex = {
  results: [
    {
      provider: {
        company_code: "ZT",
        company_name: "THRIFTY"
      },
      location: {
        latitude: 37.61889,
        longitude: -12.23756
      },
      airport: "SFO",
      address: {
        line1: "780 MCDONNELL ROAD",
        city: "SAN FRANCISCO",
        region: "CA",
        country: "US"
      },
      cars: [
        {
          vehicle_info: {
            acriss_code: "XX",
            transmission: "No information available",
            fuel: "No information available",
            category: "Special",
            type: "Special"
          },
          rates: [
            {
              type: "WEEKLY",
              price: {
                amount: "84.64",
                currency: "USD"
              }
            }
          ],
          images: [
            {
              category: "VEHICLE",
              width: 90,
              height: 50,
              url:
                "http://multimedia.amadeus.com/mdc/retrieveCarItem?ctg=VEHICLE&prov=ZT&cnt=US&sta=CA&vehcat=XX&item=0&stamp=VEHICLE_0_0_1285865537042&file=1.JPEG"
            }
          ],
          estimated_total: {
            amount: "172.94",
            currency: "USD"
          }
        },
        {
          vehicle_info: {
            acriss_code: "IFAR",
            transmission: "Automatic",
            fuel: "Unspecified",
            air_conditioning: true,
            category: "Intermediate",
            type: "SUV"
          },
          rates: [
            {
              type: "WEEKLY",
              price: {
                amount: "144.53",
                currency: "USD"
              }
            }
          ],
          images: [
            {
              category: "VEHICLE",
              width: 90,
              height: 50,
              url:
                "http://multimedia.amadeus.com/mdc/retrieveCarItem?ctg=VEHICLE&prov=ZT&cnt=US&sta=CA&vehcat=IFAR&item=0&stamp=VEHICLE_0_0_1285865537042&file=1.JPEG"
            }
          ],
          estimated_total: {
            amount: "281.14",
            currency: "USD"
          }
        },
        {
          vehicle_info: {
            acriss_code: "STAR",
            transmission: "Automatic",
            fuel: "Unspecified",
            air_conditioning: true,
            category: "Standard",
            type: "Convertible"
          },
          rates: [
            {
              type: "WEEKLY",
              price: {
                amount: "319.77",
                currency: "USD"
              }
            }
          ],
          images: [
            {
              category: "VEHICLE",
              width: 90,
              height: 50,
              url:
                "http://multimedia.amadeus.com/mdc/retrieveCarItem?ctg=VEHICLE&prov=ZT&cnt=US&sta=CA&vehcat=STAR&item=0&stamp=VEHICLE_0_0_1285865537042&file=1.JPEG"
            }
          ],
          estimated_total: {
            amount: "593.64",
            currency: "USD"
          }
        }
      ]
    },
    {
      provider: {
        company_code: "ZD",
        company_name: "BUDGET"
      },
      location: {
        latitude: 37.61889,
        longitude: -12.23756
      },
      airport: "SFO",
      address: {
        line1: "SAN FRANCISCO INTL APO",
        city: "SAN FRANCISCO",
        region: "CA",
        country: "US"
      },
      cars: [
        {
          vehicle_info: {
            acriss_code: "PCAR",
            transmission: "Automatic",
            fuel: "Unspecified",
            air_conditioning: true,
            category: "Premium",
            type: "2/4 Door"
          },
          rates: [
            {
              type: "WEEKLY",
              price: {
                amount: "272.28",
                currency: "USD"
              }
            },
            {
              type: "WEEKLY",
              price: {
                amount: "253.00",
                currency: "EUR"
              }
            }
          ],
          images: [
            {
              category: "VEHICLE",
              width: 90,
              height: 50,
              url:
                "http://multimedia.amadeus.com/mdc/retrieveCarItem?ctg=VEHICLE&prov=ZD&cnt=US&sta=CA&vehcat=PCAR&item=0&stamp=VEHICLE_0__0__1384438228247&file=1.JPEG"
            }
          ],
          estimated_total: {
            amount: "435.65",
            currency: "USD"
          }
        }
      ]
    },
    {
      provider: {
        company_code: "ZL",
        company_name: "NATIONAL"
      },
      location: {
        latitude: 37.6293,
        longitude: -122.40015
      },
      airport: "SFO",
      address: {
        line1: "780 MCDONNELL ROAD",
        city: " SAN FRANCISCO",
        region: "CA",
        country: "US"
      },
      cars: [
        {
          vehicle_info: {
            acriss_code: "IGAR",
            transmission: "Automatic",
            fuel: "Unspecified",
            air_conditioning: true,
            category: "Intermediate",
            type: "Crossover"
          },
          rates: [
            {
              type: "WEEKLY",
              price: {
                amount: "1299.99",
                currency: "USD"
              }
            }
          ],
          estimated_total: {
            amount: "2481.10",
            currency: "USD"
          }
        }
      ]
    }
  ]
};
