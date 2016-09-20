
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('venues').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('venues').insert({
          name: 'Executive Access',
          capacity: 48,
          line_1: '790 Nevada Drive',
          line_2: '',
          city: 'North Hollywood',
          state: 'CA',
          zip: 91606
        }),
        knex('venues').insert({
          name: 'Collaboration',
          capacity: 80,
          line_1: '14484 Hooker Drive',
          line_2: '',
          city: 'Norcross',
          state: 'GA',
          zip: '30092'
        }),
        knex('venues').insert({
          name: 'rowValue3',
          capacity: 71,
          line_1: '31650 Alpine Place',
          line_2: '',
          city: 'Inglewood',
          state: 'CA',
          zip: '90310'
        })
      ]);
    });
};
