const routes = require("express").Router();

const controller = require("../controllers");
routes.get("/", controller.route01);
routes.get("/2", controller.route02);

module.exports = routes;
