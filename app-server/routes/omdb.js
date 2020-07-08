const express = require('express');
const router = express.Router();

const axios = require('axios');

//const OMDB_API_KEY = process.env.OMDB_API_KEY;
//const OMDB_URL = process.env.OMDB_URL;

router.get('/search', (req, res, next) => {
  const title = req.query.title
  const url = `http://www.omdbapi.com/?apikey=1281d955&s=${title}`
  axios.get(url)
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      res.send(err)
    })
});

router.get('/imdb/:imdbId', (req, res, next) => {
  const imdbId = req.params.imdbId
  const url = `http://www.omdbapi.com/?apikey=1281d955&i=${imdbId}`
  axios.get(url)
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      res.send(err)
    })
})

module.exports = router;
