const knex = require("../database");

module.exports = {
  async index(req, res) {
    const results = await knex("users");
    return res.json(results);
  },

  async create(req, res, next) {
    try {
      const { email } = req.body;
      const { senha } = req.body;

      await knex("users").insert({
        email,
        senha,
      });

      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      const { email } = req.body;
      const { senha } = req.body;
      const { id } = req.params;

      await knex("users").update({ email }).where({ id });
      await knex("users").update({ senha }).where({ id });

      return res.send();
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      const { id } = req.params;

      await knex("users").where({ id }).del();

      return res.send();
    } catch (error) {
      next(error);
    }
  },

  async deleteAllUsers(req, res, next) {
    try {
      await knex("users").del();

      return res.send();
    } catch (error) {
      next(error);
    }
  },
};
