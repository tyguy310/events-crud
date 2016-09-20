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

router.get('/:id', (req, res, next) => {
  const promiseArray = [];
  const renderObject = {};
  const eventID = req.params.id;

  let eventPromise = knex('events')
  .where('id', eventID)
  .then((data) => {
    renderObject.event = data;
  })
  .catch(err => next(err));
  promiseArray.push(eventPromise);

  Promise.all(promiseArray)
  .then((resPromises) => {
    res.render('event', renderObject);
  })
  .catch(err => next(err));
});

module.exports = router;
