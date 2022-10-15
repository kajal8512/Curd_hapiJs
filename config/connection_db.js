const config = require("../knexfile")['development'] // form knexfile import dovelopment part
const knex = require("knex")(config)
module.exports = knex