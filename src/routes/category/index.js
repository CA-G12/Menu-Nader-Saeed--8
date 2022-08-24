const controller = require("../../contoller/index");
const router = require("express").Router();

router.get("/categories",controller.getCategories() );


