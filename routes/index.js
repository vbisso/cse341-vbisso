const routes = require("express").Router();
const controller = require("../controllers");
const contactsRoutes = require("./contacts"); // Importing contacts.js

routes.use("/contacts", contactsRoutes);
routes.use("/", require("./swagger"));
// routes.get("/", controller.route01); //index
// routes.get("/2", controller.route02);

module.exports = routes;
