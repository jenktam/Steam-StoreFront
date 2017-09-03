const express = require('express');
const router = express.Router();
const axios = require('axios');

const API = 'https://jsonplaceholder.typicode.com';
// const API1 = 'https://api-2445582011268.apicast.io/games?fields=name,summary,url,release_dates,popularity,rating,total_rating,total_rating_count,genres,cover&order=popularity:desc';
const API1 = 'https://api-2445582011268.apicast.io/games?fields=name,summary,url&order=popularity:desc';

var axiosConfig = {
  headers: {
    'Accept':     'application/json',
    'user-key':   '7ee53a24fee43bb2da17a2658aeb6ce0'
  }
};

router.get('/', (req, res, next) => {
  res.send('api works!')
})


router.get('/posts', (req, res, next) => {
  axios.get(`${API}/posts`)
  .then( posts => {res.status(200).json(posts.data)})
  .catch(error => res.status(500).send(error))
})

router.get('/games', (req, res, next) => {
  axios.get(`${API1}/games`, axiosConfig)
  .then( games => {
    console.log("games.data", games.data)
    res.status(200).json(games.data)
  })
  .catch(error => res.status(500).send(error))
})

router.get('/games/:id', (req, res, next) => {
  axios.get(`${API1}/games/${id}`, axiosConfig)
  .then( game => {
    console.log("games", game.data)
    res.status(200).json(game.data)
  })
  .catch(error => res.status(500).send(error))
})

module.exports = router;
