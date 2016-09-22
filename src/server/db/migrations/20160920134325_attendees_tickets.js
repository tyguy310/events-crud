
exports.up = function(knex, Promise) {
  return knex.schema.createTable('attendees_events', table => {
    table.integer('event_id');
    table.foreign('event_id').references('events.id');
    table.integer('attendee_id');
    table.foreign('attendee_id').references('attendees.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('attendees_events');
};
