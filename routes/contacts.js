const routes = require("express").Router();
const controller = require("../controllers/contacts");

routes.get("/", controller.allContacts);
routes.get("/:id", controller.oneContact);
routes.post("/", controller.newContact);
routes.put("/:id", controller.updateContact);
routes.delete("/:id", controller.deleteContact);
module.exports = routes;
