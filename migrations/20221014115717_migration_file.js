/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('hapi',(table)=>{
        table.increments("id"),
        table.string("username"),
        table.string("email").unique(),
        table.string("psw"),
        table.integer("phone_No")
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("hapi")
};
