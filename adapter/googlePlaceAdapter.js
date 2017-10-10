'use strict';

const rp = require('request-promise');
const queryString = require('query-string');

function placeAutocomplete(apiKey) {
  return function(parameters) {
    if (!apiKey) {
      return Promise.reject(new Error('An API key is required.'));
    }
    parameters.key = apiKey;

    if (!parameters.input) {
      return Promise.reject(new Error('Input is required for place autocomplete.'));
    }

    const hostname = 'https://maps.googleapis.com';
    const queryParams = queryString.stringify(parameters);
    const path = `${ hostname }/maps/api/place/autocomplete/json?${ queryParams }`;

    const options = {
      uri: path,
      json: true
    };

    return rp(options)
      .then((response) => {
        if (response.status === 'OK') {
          const googlePlaceIds = response.predictions.map((prediction) => {
            return prediction.place_id;
          });

          return Promise.resolve(googlePlaceIds);
        } else if (response.status === 'ZERO_RESULTS') {
          return Promise.resolve([])
        } else {
          return Promise.reject(new Error(response.error_message));
        }
      })
  }
}


module.exports = function GooglePlace(apiKey) {
  return {
    placeAutocomplete: new placeAutocomplete(apiKey)
  }
}