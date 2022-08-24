const getById = require("../../database/queries/category/getById");

const getId = (req, res) => {
    const {id} = req.body;
    getById(id)
    .then((data)=>{
        console.log(data);
        res.json(data);
    })
    .catch((err) => next(err));
};


module.exports =getId;