
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('events').insert({
          title: 'zero tolerance',
          description: 'Quality-focused fault-tolerant moratorium',
          over_21: true,
          start_datetime: '2016-01-01 00:00:00',
          end_datetime: '2016-01-01 03:00:00',
          venue_id: 3
        }),
        knex('events').insert({
          title: 'architecture',
          description: 'User-centric secondary migration',
          over_21: true,
          start_datetime: '2016-04-19 17:30:00',
          end_datetime: '2016-04-19 20:00:00',
          venue_id: 1
        }),
        knex('events').insert({
          title: 'next generation',
          description: 'Upgradable responsive internet solution',
          over_21: true,
          start_datetime: '2016-08-06 08:00:00',
          end_datetime: '2016-08-06 10:00:00',
          venue_id: 3
        })
      ]);
    });
};
