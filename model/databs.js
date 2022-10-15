const Joi = require('@hapi/joi');
// const { join } = require('path');
const { Model } = require("objection")
const db = require("../config/connection_db")
Model.knex(db)

class UserModel extends Model {
    static get tableName() {
        return "hapi"
    }
    static get  Joischema() { Joi.object().keys({
        id: Joi.number().integer().min(1).max(100).default(6),
        username: Joi.string().required(),
        email: Joi.string().email().required(),
        Psw: Joi.string().max(8).min(3).required(),
        phone_No: Joi.number().integer().min(4).max(10).default(10)
        });
    }
}

module.exports = UserModel;
