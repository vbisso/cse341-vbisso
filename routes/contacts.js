const routes = require("express").Router();
const controller = require("../controllers/contacts");

routes.get("/", controller.allContacts);
routes.get("/:id", controller.oneContact);
module.exports = routes;
