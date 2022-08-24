const { Router } = require("express");
const { controller } = require("../../contoller/index");
const router = require("express").Router();

router.get("/categories", controller.getCategories());

router.post("/categories", controller.addCategory);
router.get("/categories", controller.getcategories);
router.get("/categories/:id", controller.getById);
router.put("/categories/edit/:id", controller.editCategory);
router.delete("/categories/delete/:id", controller.deletById);

module.exports =router;