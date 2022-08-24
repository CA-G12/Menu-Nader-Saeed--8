const { mealController } = require("../../controller/index");
const router = require("express").Router();

router.get("/meals", mealController.getMeals);
router.post("/meals", mealController.addmeal);
router.get("/meals/:id", mealController.getMeal);
router.put("/meals/edit/:id", mealController.editMeal);
router.delete("/meals/delete/:id", mealController.deleteMeal);

module.exports = router;
