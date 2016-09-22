
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('attendees_events').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('attendees_events').insert({
          event_id: 1,
          attendee_id: 1}),
        knex('attendees_events').insert({
          event_id: 2,
          attendee_id: 2}),
        knex('attendees_events').insert({
          event_id: 2,
          attendee_id: 1}),
        knex('attendees_events').insert({
          event_id: 3,
          attendee_id: 1}),
        knex('attendees_events').insert({
          event_id: 3,
          attendee_id: 3})
      ]);
    });
};
