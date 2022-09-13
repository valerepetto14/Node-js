#!/usr/bin/node
// Write a script that prints the number of movies where the character “Wedge Antilles” is present.
const axios = require('axios');
const url = process.argv[2];

axios.get(url)
  .then(response => {
    let cont = 0;
    const peliculas = response.data.results;
    for (const i in peliculas) {
      const actores = peliculas[i].characters;
      for (const a in actores) {
        if (actores[a].includes('18')) {
          cont = cont + 1;
          break;
        }
      }
    }
    console.log(cont);
  })
  .catch(error => {
    console.log(error.response.status);
  });
