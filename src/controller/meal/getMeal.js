const getMeal = require("../../database/queries/meal/getMeal");

const getMealC = (req, res, next) => {
  const { id } = req.params;
  getMeal(id)
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};
module.exports = getMealC;
