#!/usr/bin/node
// Write a script that prints all characters of a Star Wars movie:
const axios = require('axios');
const episodio = process.argv[2];
const url = `https://swapi-api.hbtn.io/api/films/${episodio}`;

axios.get(url)
  .then(response => {
    const actores = response.data.characters;
    for (const actor of actores) {
      axios.get(actor)
        .then(actors => {
          console.log(actors.data.name);
        });
    }
  })
  .catch(error => {
    console.log(error.response.status);
  });
