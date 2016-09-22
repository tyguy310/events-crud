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
    res.render('events', renderObject);
  })
  .catch(err => next(err));
});

router.get('/:id', (req, res, next) => {
  const promiseArray = [];
  const renderObject = {};
  const eventID = req.params.id;

  let eventVenue = knex('venues')
  .innerJoin('events', 'venues.id', 'events.venue_id')
  .where('events.id', eventID)
  .then((data) => {
    renderObject.event = data[0];
  });
  promiseArray.push(eventVenue);

  let numberAttending = knex('attendees_events')
  .count()
  .where('event_id', eventID)
  .then((data) => renderObject.count = data[0]);
  promiseArray.push(numberAttending);

  // let ticketEvent = knex('events')
  // .innerJoin('tickets', 'events.id', 'tickets.event_id')
  // .where('event_id', eventID)
  // .then((data) => {
  //   renderObject.tickets = data[0];
  // });
  // promiseArray.push(ticketEvent);

  // ALL Promisees

  Promise.all(promiseArray)
  .then((resPromises) => {
    res.render('event', renderObject);
  })
  .catch(err => next(err));
});

router.get('/:id/register', (req, res, next) => {
  const promiseArray = [];
  const renderObject = {};
  const eventID = req.params.id;
  renderObject.title = 'Register';

  let eventVenue = knex('venues')
  .innerJoin('events', 'venues.id', 'events.venue_id')
  .where('events.id', eventID)
  .then((data) => {
    renderObject.event = data[0];
  });
  promiseArray.push(eventVenue);

  let numberAttending = knex('attendees_events')
  .count()
  .where('event_id', eventID)
  .then((data) => renderObject.count = data[0]);
  promiseArray.push(numberAttending);

  let ticketTypes = knex('tickets')
  .where('event_id', eventID)
  .then((data) => renderObject.tickets = data);
  promiseArray.push(ticketTypes);

  Promise.all(promiseArray)
  .then((resPromises) => {
    res.render('register', renderObject);
  })
  .catch(err => next(err));
});

module.exports = router;
