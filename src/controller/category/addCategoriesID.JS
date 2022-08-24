const addCategory = require("../../database/queries/category/addCategory");

const addCa = (req, res) => {
    const {name , description } = req.body;
    addCategory(name, description)
    .then((data)=>{
        console.log(data);
        res.json(data);
    })
    .catch((err) => next(err));
};


module.exports =addCa;