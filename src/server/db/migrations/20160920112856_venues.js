
exports.up = function(knex, Promise) {
  return knex.schema.createTable('venues', table => {
    table.increments();
    table.string('name').notNullable();
    table.integer('capacity');
    table.string('line_1');
    table.string('line_2');
    table.string('city');
    table.string('state');
    table.string('zip');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('venues');
};
