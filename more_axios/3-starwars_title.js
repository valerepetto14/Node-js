#!/usr/bin/node
// Write a script that prints the title of a Star Wars movie where the episode number matches a given integer.
const axios = require('axios');
const episodio = process.argv[2];
const url = `https://swapi-api.hbtn.io/api/films/${episodio}`;

axios.get(url)
  .then(response => {
    console.log(response.data.title);
  })
  .catch(error => {
    console.log(error.response.status);
  });
