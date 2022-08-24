const buildDB = require("../src/database/buildDB/index");
const connection = require("../src/database/config/connection");
const mealQueries = require("../src/database/queries/meal");
beforeAll(() => {
  return buildDB();
});
test("get Meals query", () => {
  mealQueries.getMeals().then((data) => {
    console.log(data.rows, "asasasa");
    expect(data.rows.length).toBe(0);
  });
});
test("add Meal query", () => {
  mealQueries
    .addMeal("name", "image", "description", 1)
    .then((data) => {
      console.log(data.rows.length, "lefggfdgsfdgfdgdgsfdgsdfggth");
      expect(data.rows.length).toBe(1);
    })
    .catch((err) => {
      console.log(err);
    });
});
test("add Meal query", () => {
  mealQueries
    .addMeal("name", "image", "description", 1)
    .then((data) => {
      console.log(data.rows, "lefggfdgsfdgfdgdgsfdgsdfggth");
      expect(data.rows.length).toBe(1);
    })
    .catch((err) => {
      console.log(err);
    });
});
test("get Meals query", () => {
  mealQueries.getMeals().then((data) => {
    console.log(data.rows);
    expect(data.rows.length).toBe(2);
  });
});
