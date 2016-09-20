(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');
    const events = require('../routes/events');
    const attendees = require('../routes/attendees');
    const venues = require('../routes/venues');

    // *** register routes *** //
    app.use('/', routes);
    app.use('/events', events);
    app.use('/attendees', attendees);
    app.use('/venues', venues);

  };

})(module.exports);
