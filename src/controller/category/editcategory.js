const editCategory = require("../../database/queries/category/editcategory");

const editCa = (req, res) => {
    const {id ,name , description } = req.body;
    editCategory(id,name, description)
    .then((data)=>{
        console.log(data);
        res.json(data);
    })
    .catch((err) => next(err));
};


module.exports =editCa;