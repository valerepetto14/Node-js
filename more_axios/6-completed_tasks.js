#!/usr/bin/node
// Write a script that computes the number of tasks completed by user id.
const axios = require('axios');
const url = process.argv[2];

axios.get(url)
  .then(response => {
    const obj = {};
    const tasks = response.data;
    for (const i of tasks) {
      if (i.completed === true) {
        if (obj[i.userId] !== undefined) {
          const value = obj[i.userId];
          obj[i.userId] = value + 1;
        } else {
          obj[i.userId] = 1;
        }
      }
    }
    console.log(obj);
  })
  .catch(error => {
    console.log(error.response.status);
  });
