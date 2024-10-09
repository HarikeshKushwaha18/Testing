
const ToDo = require('../models/ToDo');

exports.getToDo = async(req, res) =>{
    try{
        const todos = await ToDo.find({});
        res.status(200).json({
            success: true,
            data: todos,
            mesaage: "Fetched successfully"
        })
    }
    catch(err){
        console.error(err);
        res.status(500).json(
            {
                success: false,
                data: "server issue",
                message: "Can't fetch due to server side issue"
            }
        )
    }
} 

exports.getToDoById = async(req, res) => {
    try{
        const id = req.params.id;
        const item = await ToDo.findById({_id:id});

        if(!item){
            return res.status(404).json(
                {
                    success: false,
                    message: "No Data found by Id"
                }
            )
        }
        res.status(200).json(
            {
                success: true,
                data: item,
                message: `Data found by ${id}`
            }
        )

    }catch(err){
        console.error(err);
        res.status(404).json(
            {
                success: false,
                error: err.mesaage,
                message: "Server side issue"
            }
        )
    }
}