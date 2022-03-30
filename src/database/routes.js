const express = require("express");
const routes = express.Router();
const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("../swagger.json");

const UserController = require("../controllers/userController");

routes.use("/api-docs", swaggerUi.serve);
routes.get("/api-docs", swaggerUi.setup(swaggerDocs));

routes.get("/users", UserController.index);
routes.post("/users", UserController.create);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.delete);
routes.delete("/users/", UserController.deleteAllUsers);

module.exports = routes;
