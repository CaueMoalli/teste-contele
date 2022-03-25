const express = require("express");
const routes = express.Router();

const UserController = require("../controllers/userController");

routes.get("/users", UserController.index);
routes.post("/users", UserController.create);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.delete);
routes.delete("/users/", UserController.deleteAllUsers);

module.exports = routes;