#!/usr/bin/node
// Write a script that gets the contents of a webpage and stores it in a file.
const fs = require('fs');
const axios = require('axios');
const url = process.argv[2];
const filepath = process.argv[3];

axios.get(url)
  .then(response => {
    fs.writeFile(filepath, response.data, 'utf8', function (err, data) {
      if (err) {
        console.log(err);
      }
    });
  })
  .catch(error => {
    console.log(error.response.status);
  });
