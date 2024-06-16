const needle = require('needle');
const bread = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${bread}`;

needle.get(`${url}`, (error, response, body) => {
  if (error) {
    console.log('error:', error);
  } else if (body.length === 0) {
    console.log("bread does not exist");
  } else {
    console.log(body[0]['description']);
  }
});

