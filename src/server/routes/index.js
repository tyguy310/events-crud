const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

const indexController = require('../controllers/index');

router.get('/', (req, res, next) => {
  const renderObject = {};
  renderObject.title = 'Event App';
  knex('events')
  .then(data => {
    renderObject.data = data;
    res.render('index', renderObject);
  })
  .catch(err => next(err));
});

module.exports = router;
