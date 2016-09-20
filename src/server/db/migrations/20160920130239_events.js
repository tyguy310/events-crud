exports.up = function(knex, Promise) {
  return knex.schema.createTable('events', table => {
    table.increments();
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.boolean('over_21').notNullable().unique();
    table.datetime('start_datetime').notNullable();
    table.datetime('end_datetime').notNullable();
    table.integer('venue_id');
    table.foreign('venue_id').references('venues.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('events');
};
