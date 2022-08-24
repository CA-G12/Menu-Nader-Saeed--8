const deletCategory = require("../../database/queries/category/deletById");

const deletCaID = (req, res) => {
    const {id } = req.body;
    deletCategory( id)
    .then((data)=>{
        console.log(data);
        res.json(data);
    })
    .catch((err) => next(err));
};


module.exports =deletCaID;