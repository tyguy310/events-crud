
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tickets').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('tickets').insert({
          name: 'Cheese',
          price: 29.50,
          event_id: 3
        }),
        knex('tickets').insert({
          name: 'Chicken',
          price: 29.50,
          event_id: 2
        }),
        knex('tickets').insert({
          name: 'Salame',
          price: 49.50,
          event_id: 3
        }),
        knex('tickets').insert({
          name: 'Chocolate',
          price: 29.50,
          event_id: 2
        }),
        knex('tickets').insert({
          name: 'Churro',
          price: 29.50,
          event_id: 1
        }),
        knex('tickets').insert({
          name: 'Chowder',
          price: 19.50,
          event_id: 1
        })
      ]);
    });
};
