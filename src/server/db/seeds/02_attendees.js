
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('attendees').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('attendees').insert({
          colName: 'rowValue1'
        }),
        knex('attendees').insert({
          colName: 'rowValue2'
        }),
        knex('attendees').insert({
          colName: 'rowValue3'
        })
      ]);
    });
};
