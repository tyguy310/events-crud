
exports.up = function(knex, Promise) {
  return knex.schema.createTable('attendees_tickets', table => {
    table.integer('ticket_id');
    table.foreign('ticket_id').references('tickets.id');
    table.integer('attendee_id');
    table.foreign('attendee_id').references('attendees.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('attendees_tickets');
};
