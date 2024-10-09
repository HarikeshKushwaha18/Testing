const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
    {
        title: {type: String, required: true, unique: true, maxLength: 50},
    
    
        description: {type: String, maxLength: 200},
    
    
        createdAt: {type: Date, required: true, default:Date.now()},
    
    
        updatedAt: {type: Date, required: true, default:Date.now()}
    }
    
)

module.exports = mongoose.model('ToDo', todoSchema)