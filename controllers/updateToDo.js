const ToDo = require('../models/ToDo');

exports.updateToDo = async(req, res)=>{
    try{
        const id = req.params.id;
        const {title, description} = req.body;
        const updatedItem = await ToDo.findByIdAndUpdate(
            {_id:id},
            {title, description, updatedAt: Date.now()}
            
        );
        res.status(200).json(
            {
                success: true,
                data: updatedItem,
                message: "Updated Successfully"
            }
        )


    }catch(err){
        console.error(err);
        res.status(404).json(
            {
                success: false,
                error: err.message,
                message: "Server side issue"
            }
        )
    }
}