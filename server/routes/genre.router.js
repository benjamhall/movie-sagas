const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres

  const queryText = `SELECT movies.title, genres.name FROM "genres"
  JOIN "movies_genres" ON "genres".id = "movies_genres".genre_id
  JOIN "movies" ON "movies_genres".movie_id = "movies".id
  GROUP BY movies.title, genres.name
  ORDER BY movies.title ASC`;
  pool.query(queryText)
    .then((result) => {res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing get genres request', err)
      res.sendStatus(500)
    })
});

module.exports = router;