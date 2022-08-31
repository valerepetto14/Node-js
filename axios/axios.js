const axios = require('axios');

const key = '980a3cb7e981919612d3faee6fb0dfbd'
const url = 'https://api.themoviedb.org/3/movie/76341?api_key=980a3cb7e981919612d3faee6fb0dfbd'
const img = 'https://image.tmdb.org/t/p/w500/'

axios.get('https://api.themoviedb.org/3/movie/popular?api_key=980a3cb7e981919612d3faee6fb0dfbd')
    .then((res) =>{
        datos = res.data.results
        datos.forEach(element => {
            console.log(element.title)
        });
    })
    .catch((error) =>{
        console.log(error)
    })