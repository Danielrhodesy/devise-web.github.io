
exports.up = function (knex) {
    return knex.schema.createTable('projects', table => {
      table.increments('id').primary()
      table.string('title').unique()
    })
  };

exports.down = function (knex) {
    return knex.schema.dropTable('projects')
  };
