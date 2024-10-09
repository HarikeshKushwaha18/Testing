const ToDo = require('../models/ToDo');

exports.createToDo = async (req, res) => {

    try {
        // extract data from req body to insert in database 
        const { title, description } = req.body;

        // add that data into database and create an object
        const response = await ToDo.create({ title, description });

        res.status(200).json(
            {
                success: true,
                data: response,
                meaasage: "Entry Inserted Successfully"
            }
        )
    }catch(err){
        console.log(err)
        console.error(err);

        res.status(500).json(
            {
                success:false,
                data: 'internal server error',
                message: err.meaasage
            }
        )
    }
}