const getcategories = require("../../database/queries/category/getcategories");

const getCate = (req, res) => {
    const {id ,name , description } = req.body;
    getcategories(id,name, description)
    .then((data)=>{
        console.log(data);
        res.json(data);
    })
    .catch((err) => next(err));
};


module.exports =getCate;