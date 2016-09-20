
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('attendees').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('attendees').insert({
          preferred_name: 'Michael',
          last_name: 'Banks',
          birthday: 'mbanks0@home.pl',
          email: '6/12/1935'
        }),
        knex('attendees').insert({
          preferred_name: 'Jacqueline',
          last_name: 'Howell',
          birthday: 'jhowell1@hostgator.com',
          email: '5/24/1946'
        }),
        knex('attendees').insert({
          preferred_name: 'George',
          last_name: 'Phillips',
          birthday: 'gphillips2@cpanel.net',
          email: '3/1/2000'
        })
      ]);
    });
};
