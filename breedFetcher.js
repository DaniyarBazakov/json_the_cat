const needle = require('needle');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  
  needle.get(url, (error, response, body) => {
    if (error) {
      callback(error, null); // When there's an error, pass the error to the callback
    } else if (body.length === 0) {
      callback(null, "Breed does not exist"); // If no breed is found
    } else {
      const description = body[0]['description'];
      callback(null, description); // If breed is found, pass the description
    }
  });
};

module.exports = { fetchBreedDescription };