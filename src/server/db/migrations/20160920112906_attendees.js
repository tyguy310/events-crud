
exports.up = function(knex, Promise) {
  return knex.schema.createTable('attendees', table => {
    table.increments();
    table.string('preferred_name').notNullable();
    table.string('last_name').notNullable();
    table.string('birthday').notNullable();
    table.string('email').notNullable().unique();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('attendees');
};
